import React from "react";
import {
  toArray,
  shouldConstruct,
  getNonChildrenInnerMarkup
} from "./utils.js";
import { escapeTextForBrowser } from "./escapeTextForBrowser";
import { createOpenTagMarkup } from "./createOpenTagMarkup";
import {
  prepareToUseHooks,
  finishHooks,
  Dispatcher
} from "./ReactPartialRendererHooks";
import {
  Namespaces,
  getIntrinsicNamespace,
  getChildNamespace
} from "./shared/Namespaces.js";

import { REACT_FRAGMENT_TYPE } from "./shared/ReactSymbols";
import { omittedCloseTags } from "./shared/omittedCloseTags";

const newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
};

let ReactSharedInternals =
  React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
if (!ReactSharedInternals.hasOwnProperty("ReactCurrentDispatcher")) {
  ReactSharedInternals.ReactCurrentDispatcher = {
    current: null
  };
}
let ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;

function resolve(child) {
  while (React.isValidElement(child)) {
    let element = child;
    let Component = element.type;
    if (typeof Component !== "function") {
      break;
    }
    processChild(element, Component);
  }

  function processChild(element, Component) {
    const isClass = shouldConstruct(Component);

    let queue = [];
    let replace = false;
    let updater = {
      isMounted: function(publicInstance) {
        return false;
      },
      enqueueForceUpdate: function(publicInstance) {
        if (queue === null) {
          return null;
        }
      },
      enqueueReplaceState: function(publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function(publicInstance, currentPartialState) {
        if (queue === null) {
          return null;
        }
        queue.push(currentPartialState);
      }
    };

    let inst;
    if (isClass) {
      inst = new Component(element.props, {}, updater);

      if (typeof Component.getDerivedStateFromProps === "function") {
        let partialState = Component.getDerivedStateFromProps.call(
          null,
          element.props,
          inst.state
        );

        if (partialState != null) {
          inst.state = Object.assign({}, inst.state, partialState);
        }
      }
    } else {
      const componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, {}, updater);
      inst = finishHooks(Component, element.props, inst, {});
      child = inst;
      return;
    }

    inst.props = element.props;
    inst.updater = updater;

    if (
      typeof inst.UNSAFE_componentWillMount === "function" ||
      typeof inst.componentWillMount === "function"
    ) {
      if (typeof inst.componentWillMount === "function") {
        if (typeof Component.getDerivedStateFromProps !== "function") {
          inst.componentWillMount();
        }
      }
      if (
        typeof inst.UNSAFE_componentWillMount === "function" &&
        typeof Component.getDerivedStateFromProps !== "function"
      ) {
        inst.UNSAFE_componentWillMount();
      }
      if (queue.length) {
        let oldQueue = queue;
        let oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          let nextState = oldReplace ? oldQueue[0] : inst.state;
          let dontMutate = true;
          for (let i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            let partial = oldQueue[i];
            let partialState =
              typeof partial === "function"
                ? partial.call(inst, nextState, element.props, {})
                : partial;
            if (partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = Object.assign({}, nextState, partialState);
              } else {
                Object.assign(nextState, partialState);
              }
            }
          }
          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }

    child = inst.render();
  }
  return { child };
}

class ReactDOMServerRenderer {
  constructor(element) {
    const topFrame = {
      type: null,
      domNamespace: Namespaces.html,
      children: [element],
      childIndex: 0,
      footer: "",
      width: 10,
      frameId: "topFrame"
    };
    this.stack = [topFrame];
    this.exhausted = false;
    this.frameId = 0;
  }

  read() {
    ReactCurrentDispatcher.current = Dispatcher;

    let out = "";
    let framedata = [];
    let re = /.*?\)/;

    while (!this.exhausted) {
      if (this.stack.length === 0) {
        console.log(
          JSON.stringify(framedata, function(key, value) {
            return typeof value === "function"
              ? value.toString().match(re)[0]
              : value;
          })
        );
        this.exhausted = true;
        break;
      }

      let currentStack = [];
      for (let i = 0; i < this.stack.length; i++) {
        currentStack.push({ ...this.stack[i] });
      }
      framedata.push([...currentStack]);

      const frame = this.stack[this.stack.length - 1];

      if (frame.childIndex >= frame.children.length) {
        this.stack.pop();
        out += frame.footer;
        continue;
      }

      const child = frame.children[frame.childIndex++];

      let outBuffer = "";
      outBuffer += this.render(child, frame.domNamespace);
      out += outBuffer;
    }
    return out;
  }

  render(child, parentNamespace) {
    if (typeof child === "string" || typeof child === "number") {
      const text = "" + child;
      return escapeTextForBrowser(text);
    } else {
      let nextChild;
      ({ child: nextChild } = resolve(child));
      const nextElement = nextChild;
      const elementType = nextElement.type;

      if (typeof elementType === "string") {
        return this.renderDOM(nextElement, parentNamespace);
      }

      switch (elementType) {
        case REACT_FRAGMENT_TYPE: {
          const nextChildren = toArray(nextChild.props.children);
          const frame = {
            type: null,
            domNamespace: parentNamespace,
            children: nextChildren,
            childIndex: 0,
            footer: "",
            width: 10,
            frameId: ++this.frameId
          };
          this.stack.push(frame);
          return "";
        }
        default:
          break;
      }
    }
  }

  renderDOM(element, parentNamespace) {
    const tag = element.type.toLowerCase();
    let namespace = parentNamespace;
    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }
    let props = element.props;

    if (tag === "input") {
      props = Object.assign(
        {
          type: undefined
        },
        props,
        {
          defaultChecked: undefined,
          defaultValue: undefined,
          value: props.value != null ? props.value : props.defaultValue,
          checked: props.checked != null ? props.checked : props.defaultChecked
        }
      );
    }

    let out = createOpenTagMarkup(
      element.type,
      tag,
      props,
      namespace,
      //this.makeStaticMarkup,
      this.stack.length === 1
    );

    let footer = "";
    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += "/>";
    } else {
      out += ">";
      footer = "</" + element.type + ">";
    }

    let children;
    const innerMarkup = getNonChildrenInnerMarkup(props);
    if (innerMarkup != null) {
      children = [];
      if (newlineEatingTags[tag] && innerMarkup.charAt(0) === "\n") {
        out += "\n";
      }
      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }
    const frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children,
      childIndex: 0,
      footer: footer,
      width: 10,
      frameId: ++this.frameId
    };

    this.stack.push(frame);
    return out;
  }
}

export default ReactDOMServerRenderer;
