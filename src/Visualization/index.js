/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { treeData, frameData, outputData } from "./data";
import G6 from "@antv/g6";
import G2 from "@antv/g2";
import "./registerShape";

import NodeImg from "../Imgs/analytics.png";
import FrameImg from "../Imgs/frame.png";
import ProcessImg from "../Imgs/process.png";
import MemoNote from "../Imgs/note.png";
import ReactImg from "../Imgs/note.png";

// status: 0 - wait, 1 - start, process, pend, 2,after, - end
const itemState = {
  root: 0
};

const functionElementIds = ["root", 3, 5, 12, 13, 14];

for (let i = 1; i < 19; i++) {
  itemState[i] = 0;
}

function TreeView({ clickNum, setClickNum }) {
  const ref = React.useRef(null);
  let tree = null;
  const [selectNode, setSelectNode] = useState(null);

  useEffect(() => {
    if (!tree) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      tree = new G6.TreeGraph({
        container: ref.current,
        width: 580,
        height: 600,
        linkCenter: true,
        modes: {},
        defaultNode: {
          style: {
            fill: "#9ededa",
            stroke: null
          }
        },
        layout: {
          type: "indented",
          direction: "LR",
          indent: 100,
          getHeight: function getHeight() {
            return 30;
          }
        }
      });
    }
    tree.node(node => {
      return {
        shape: "file-node",
        label: node.id,
        labelCfg: {
          style: {
            fontSize: 30
          }
        }
      };
    });

    tree.edge(() => {
      return {
        shape: "step-line"
      };
    });
    tree.data(treeData);

    tree.render();
    tree.fitView();

    tree.on("node:mouseenter", evt => {
      const { item } = evt;
      const model = item.getModel();
      if (!itemState[model.id]) {
        tree.updateItem(item, {
          style: {
            fill: "#029c92"
          }
        });
      }
      setSelectNode(model);
    });

    tree.on("node:mouseleave", evt => {
      const { item } = evt;
      const model = item.getModel();
      if (!itemState[model.id]) {
        tree.updateItem(item, {
          style: {
            fill: "#9ededa"
          }
        });
      }
    });

    tree.on("node:click", evt => {
      const { item } = evt;
      const model = item.getModel();
      const nowItemState = ++itemState[model.id];
      if (nowItemState === 1) {
        tree.updateItem(item, {
          style: {
            fill: "#faa669"
          }
        });
      } else {
        tree.updateItem(item, {
          style: {
            fill: "#b3b3b3"
          }
        });
      }

      !functionElementIds.includes(model.id) && setClickNum(++clickNum);
    });
  }, []);

  return (
    <div className="view" ref={ref}>
      <h2>React Elements Tree</h2>
      <ReactElementDisplay selectNode={selectNode} />
    </div>
  );
}

function ReactElementDisplay({ selectNode }) {
  if (!selectNode) {
    return null;
  }
  return (
    <div className="elementDisplay" style={{ width: "320px" }}>
      <div className="displayTitle">
        <img src={ReactImg} alt="logo" className="logo" />
        <span> React Element Detail </span>
      </div>
      <div>
        <h4> id: </h4> {selectNode.id}
      </div>
      {selectNode.content ? (
        <React.Fragment>
          <h4>content:</h4>
          {JSON.stringify(selectNode.content)}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div>
            <h4> type: </h4>"{selectNode.type}"
          </div>
          <div>
            <h4> props: </h4>
            {Object.keys(selectNode.props).map(key => {
              return (
                <div className="propsDisplay">
                  <span>{key}:</span>
                  {JSON.stringify(selectNode.props[key])}
                </div>
              );
            })}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

let chart = null;
function FrameView({ clickNum }) {
  const ref = React.useRef(null);
  const [selectFrame, setSelectFrame] = useState(null);
  useEffect(() => {
    if (!chart) {
      chart = new G2.Chart({
        container: ref.current,
        //forceFit: true,
        width: 580,
        height: 600
      });
    }
    chart.axis(false);
    chart.scale("frameId", {
      type: "cat"
    });
    chart.scale("width", {
      max: 18
    });
    chart
      .coord("rect")
      .transpose()
      .scale(1, 1);
    chart
      .interval()
      .position("frameId*width")
      .size(80)
      .color("frameId", [
        "#0976db",
        "#1890FF",
        "#32a2fc",
        "#58b3fc",
        "#69C0FF",
        "#84d1fa",
        "#9bd9fa",
        "#BAE7FF"
      ])
      .label(
        "type",
        type => {
          return type || "null";
        },
        {
          offset: -30,
          textStyle: {
            textAlign: "center",
            fill: "#404040",
            fontSize: "16"
          }
        }
      );
    chart.source(frameData[clickNum]);
    chart.legend("frameId", false);
    chart.tooltip(false);
    chart.render();
    chart.on("click", ev => {
      const data = ev.data;
      if (data) {
        setSelectFrame(data._origin);
      }
    });
  }, []);
  useEffect(() => {
    chart.changeData(frameData[clickNum]);
  });
  return (
    <div className="view" ref={ref} style={{ paddingLeft: "20px" }}>
      <h2>ReactDOMServerRenderer Stack</h2>
      <FrameDisplay selectFrame={selectFrame} clickNum={clickNum} />
    </div>
  );
}

function CurrentFrame({ selectFrame }) {
  return (
    <React.Fragment>
      <div className="displayTitle">
        <img src={FrameImg} className="logo" />
        <span>Current Frame </span>
      </div>
      <div className="propsDisplay">
        <span>type:</span>
        {JSON.stringify(selectFrame.type)}
      </div>
      <div className="propsDisplay">
        <span>domNamespace:</span>
        {selectFrame.domNamespace}
      </div>
      <div className="propsDisplay">
        <span>children:</span>
        {selectFrame.children.length
          ? `Array<React.Element>(${selectFrame.children.length})`
          : "[]"}
      </div>
      <div className="propsDisplay">
        <span>childIndex:</span>
        {selectFrame.childIndex}
      </div>
      <div className="propsDisplay">
        <span>footer:</span>
        {JSON.stringify(selectFrame.footer)}
      </div>
    </React.Fragment>
  );
}

function CurrentChild({ currentChild }) {
  return (
    <React.Fragment>
      <div className="displayTitle">
        <img src={NodeImg} className="logo" />
        <span> Current Child </span>
      </div>
      {typeof currentChild === "object" ? (
        <React.Fragment>
          <div>
            <h4> type: </h4>"{currentChild.type}"
          </div>
          <div>
            <h4> props: </h4>
            {Object.keys(currentChild.props).map(key => {
              return (
                <div className="propsDisplay">
                  <span>{key}:</span>
                  {key === "children"
                    ? `Array<React.Element>(${currentChild.props[key].length})`
                    : JSON.stringify(currentChild.props[key]).slice(0, 60)}
                </div>
              );
            })}
          </div>
        </React.Fragment>
      ) : (
        JSON.stringify(currentChild)
      )}
    </React.Fragment>
  );
}

function NextChild({ currentChild }) {
  const MemoChild = () => {
    if (currentChild.type.indexOf("Example") !== -1) {
      return (
        <div>
          <h4> type: </h4>"div"<h4> props: </h4>{" "}
          <div className="propsDisplay">
            <span>className:</span>main
          </div>
          <div className="propsDisplay">
            <span>children:</span>Array&lt;React.Element&gt;(4)
          </div>
        </div>
      );
    }
    return "=== Curent Child";
  };
  return (
    <React.Fragment>
      <div className="displayTitle">
        <img src={NodeImg} className="logo" />
        <span>Next Child: </span>
      </div>
      {typeof currentChild === "object" ? <MemoChild /> : null}
    </React.Fragment>
  );
}

function Output({ clickNum }) {
  const [output, setOutput] = useState("");
  const newOutputLength = outputData[clickNum].length;
  useEffect(() => {
    setOutput(output + outputData[clickNum]);
  }, [clickNum]);
  return (
    <React.Fragment>
      <div className="displayTitle">
        <img src={MemoNote} className="logo" />
        <span>Output: </span>
      </div>
      <div>
        {output.slice(0, output.length - newOutputLength)}
        <span style={{ color: "#f53d2d" }}>
          {newOutputLength ? output.slice(-newOutputLength) : ""}
        </span>
      </div>
    </React.Fragment>
  );
}

function FrameDisplay({ selectFrame, clickNum }) {
  const [showProcessing1, setShowProcessing1] = useState(false);
  const [showProcessing2, setShowProcessing2] = useState(false);
  if (!selectFrame) {
    return null;
  }
  const currentChild = selectFrame.children[selectFrame.childIndex];
  return (
    <div className="elementDisplay" style={{ maxWidth: "360px" }}>
      <CurrentFrame selectFrame={selectFrame} />
      <div className="sepline"></div>
      <CurrentChild currentChild={currentChild} />
      <div className="sepline"></div>
      <div className="displayTitle">
        <img
          src={ProcessImg}
          className="logo"
          onClick={() => {
            setShowProcessing1(!showProcessing1);
          }}
        />
        <span>Processing </span>
      </div>
      {showProcessing1 && <div>function resolve()</div>}
      <div className="sepline"></div>
      <NextChild currentChild={currentChild} />
      <div className="sepline"></div>
      <div className="displayTitle">
        <img
          src={ProcessImg}
          className="logo"
          onClick={() => {
            setShowProcessing2(showProcessing2 ? false : true);
          }}
        />
        <span>Processing </span>
      </div>
      {showProcessing2 && <div>function createOpenTagMarkup()</div>}
      <div className="sepline"></div>
      <Output clickNum={clickNum} />
      <div className="sepline"></div>
      <div className="displayTitle">
        <img src={FrameImg} className="logo" />
        <span>Next Frame </span>
      </div>
    </div>
  );
}

export default function() {
  const [clickNum, setClickNum] = useState(0);
  const [showFrameView, setShowFrameView] = useState(false);
  const handleShowFrameView = React.useCallback(() => {
    setShowFrameView(!showFrameView);
  }, [showFrameView]);
  return (
    <div className="main-grid-container">
      <label className="switch">
        <input type="checkbox" onClick={handleShowFrameView} />
        <span className="slider round"></span>
      </label>
      <TreeView clickNum={clickNum} setClickNum={setClickNum} />
      {showFrameView && <FrameView clickNum={clickNum} />}
    </div>
  );
}
