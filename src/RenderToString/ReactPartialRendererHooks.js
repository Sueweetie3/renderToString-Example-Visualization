/* eslint-disable no-self-compare */
/* eslint-disable no-unused-vars */
function is(x: any, y: any) {
  return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
}

let currentlyRenderingComponent = null;
let firstWorkInProgressHook = null;
let workInProgressHook = null;
// Whether the work-in-progress hook is a re-rendered hook
let isReRender = false;
// Whether an update was scheduled during the currently executing render pass.
let didScheduleRenderPhaseUpdate = false;
// Lazily created map of render-phase updates
let renderPhaseUpdates = null;
let numberOfReRenders = 0;
// Counter to prevent infinite loops.

function resolveCurrentlyRenderingComponent() {
  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    return false;
  }

  for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (is(nextDeps[i], prevDeps[i])) {
      continue;
    }
    return false;
  }
  return true;
}

function createHook() {
  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false;
      // Append to the end of the list
      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }
  return workInProgressHook;
}

export function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;

  // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;
}

export function finishHooks(Component, props, children, refOrContext): any {
  // This must be called after every function component to prevent hooks from
  // being used in classes.

  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1;

    // Start over from the beginning of the list
    workInProgressHook = null;

    children = Component(props, refOrContext);
  }
  currentlyRenderingComponent = null;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;

  // These were reset above
  // currentlyRenderingComponent = null;
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

  return children;
}

function basicStateReducer(state, action) {
  return typeof action === "function" ? action(state) : action;
}

export function useState(initialState) {
  return useReducer(
    basicStateReducer,
    // useReducer has a special case to support lazy useState initializers
    (initialState: any)
  );
}

export function useReducer(reducer, initialArg, init) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    // current hook.
    const queue = workInProgressHook.queue;
    const dispatch = queue.dispatch;
    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      const firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(queue);
        let newState = workInProgressHook.memoizedState;
        let update = firstRenderPhaseUpdate;
        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          const action = update.action;
          newState = reducer(newState, action);
          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;

        return [newState, dispatch];
      }
    }
    return [workInProgressHook.memoizedState, dispatch];
  } else {
    let initialState;
    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState =
        typeof initialArg === "function" ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }
    workInProgressHook.memoizedState = initialState;
    const queue = (workInProgressHook.queue = {
      last: null,
      dispatch: null
    });
    const dispatch = (queue.dispatch = dispatchAction.bind(
      null,
      currentlyRenderingComponent,
      queue
    ));
    return [workInProgressHook.memoizedState, dispatch];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  const nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    const prevState = workInProgressHook.memoizedState;
    if (prevState !== null) {
      if (nextDeps !== null) {
        const prevDeps = prevState[1];
        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  const nextValue = nextCreate();
  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  const previousRef = workInProgressHook.memoizedState;
  if (previousRef === null) {
    const ref = { current: initialValue };
    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function dispatchAction(componentIdentity, queue, action) {
  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    const update = {
      action,
      next: null
    };
    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }
    const firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      let lastRenderPhaseUpdate = firstRenderPhaseUpdate;
      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }
      lastRenderPhaseUpdate.next = update;
    }
  } else {
    // This means an update has happened after the function component has
    // returned. On the server this is a no-op. In React Fiber, the update
    // would be scheduled for a future render.
  }
}

export function useCallback(callback, deps) {
  // Callbacks are passed as they are in the server environment.
  return callback;
}

function noop(): void {}

export const Dispatcher = {
  useMemo,
  useReducer,
  useRef,
  useState,
  useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop
};
