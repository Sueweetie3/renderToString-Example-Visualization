/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import ExampleTree from "./Imgs/ExampleTree.png";
import EverGreenTree from "./Imgs/evergreen-tree.png";
import MemoNote from "./Imgs/note.png";
import "./App.css";

const nodeDetails = {
  0: {
    type: "f Example()",
    props: {}
  },
  1: {
    type: "div",
    props: { className: "main", children: "Array<React.Element>(4)" }
  },
  2: {
    type: "h2",
    props: { className: "title", children: "Array<React.Element>(2)" }
  },
  3: {
    type: "class ItemList",
    props: {
      items: ["apple", "banana", "carrot"],
      selectItems: [],
      handleSelectItem: "f: item => {...}"
    }
  },
  4: "You have selected o(*≧▽≦)ツ:",
  5: {
    type: "ƒ SelectedResult({ selectItems })",
    props: { selectItems: [] }
  },
  6: {
    type: "svg",
    props: {
      className: "logo",
      viewBox: "0 0 48 48",
      children: "React.Element"
    }
  },
  7: "Product List:",
  8: {
    type: "div",
    props: {
      className: "product-list",
      children: "React.Element"
    }
  },
  9: {
    type: "Symbol(react.fragment)",
    props: { children: [] }
  },
  10: {
    type: "path",
    props: { d: "M44.4, 11.5C44.4, 11.5...", children: [] }
  },
  11: { type: "ul", props: { children: "Array<React.Element>(3)" } },
  12: {
    type: "ƒ ItemView({ item, selectItems, handleSelectItem, showIcon })",
    props: {
      item: "apple",
      selectItems: [],
      showIcon: true,
      handleSelectItem: "f: item => {...}"
    }
  },
  13: {
    type: "ƒ ItemView({ item, selectItems, handleSelectItem, showIcon })",
    props: {
      item: "apple",
      selectItems: [],
      showIcon: true,
      handleSelectItem: "f: item => {...}"
    }
  },
  14: {
    type: "ƒ ItemView({ item, selectItems, handleSelectItem, showIcon })",
    props: {
      item: "apple",
      selectItems: [],
      showIcon: true,
      handleSelectItem: "f: item => {...}"
    }
  },
  15: {
    type: "li",
    props: { children: "Array<React.Element>(3)" }
  },
  16: {
    type: "input",
    props: {
      type: "checkbox",
      value: "apple",
      checked: false,
      onChange: "()=>{...}"
    }
  },
  17: {
    type: "img",
    props: {
      alt: "apple",
      src: "./apple.png",
      style: {
        width: "16px",
        height: "16px",
        marginLeft: "6px",
        marginRight: "12px"
      }
    }
  },
  18: "apple"
};
function Tree({ handleClickNode }) {
  return (
    <div className="treeImg">
      <h2>
        <img src={EverGreenTree} className="logo" />
        <span>React Element Tree</span>
      </h2>
      <img src={ExampleTree} useMap="#tree1map" width="400" heith="458" />
      <map name="tree1map">
        <area
          shape="circle"
          coords="224, 25, 30"
          onClick={() => handleClickNode(0)}
        />
        <area
          shape="circle"
          coords="224, 134, 30"
          onClick={() => handleClickNode(1)}
        />
        <area
          shape="circle"
          coords="77, 255, 30"
          onClick={() => handleClickNode(2)}
        />
        <area
          shape="circle"
          coords="180, 255, 30"
          onClick={() => handleClickNode(3)}
        />
        <area
          shape="circle"
          coords="275, 255, 30"
          onClick={() => handleClickNode(4)}
        />
        <area
          shape="circle"
          coords="372, 255, 30"
          onClick={() => handleClickNode(5)}
        />
        <area
          shape="circle"
          coords="25, 370, 30"
          onClick={() => handleClickNode(6)}
        />
        <area
          shape="circle"
          coords="105, 370, 30"
          onClick={() => handleClickNode(7)}
        />
        <area
          shape="circle"
          coords="180, 370, 30"
          onClick={() => handleClickNode(8)}
        />
        <area
          shape="circle"
          coords="372, 370, 30"
          onClick={() => handleClickNode(9)}
        />
        <area
          shape="circle"
          coords="25, 484, 30"
          onClick={() => handleClickNode(10)}
        />
        <area
          shape="circle"
          coords="180, 484, 30"
          onClick={() => handleClickNode(11)}
        />
        <area
          shape="circle"
          coords="115, 590, 30"
          onClick={() => handleClickNode(12)}
        />
        <area
          shape="circle"
          coords="180, 590, 30"
          onClick={() => handleClickNode(13)}
        />
        <area
          shape="circle"
          coords="242, 590, 30"
          onClick={() => handleClickNode(14)}
        />
        <area
          shape="circle"
          coords="115, 700, 30"
          onClick={() => handleClickNode(15)}
        />
        <area
          shape="circle"
          coords="55, 805, 30"
          onClick={() => handleClickNode(16)}
        />
        <area
          shape="circle"
          coords="115, 805, 30"
          onClick={() => handleClickNode(17)}
        />
        <area
          shape="circle"
          coords="175, 805, 30"
          onClick={() => handleClickNode(18)}
        />
      </map>
    </div>
  );
}

function ReactElementDisplay({ selectNode }) {
  const node = nodeDetails[selectNode];
  const nodeProps = node && nodeDetails[selectNode].props;
  return (
    <div className="elementDisplay">
      <h2>
        <img src={MemoNote} className="logo" />
        <span>React Element Detail</span>
      </h2>
      <div>
        <h4>id: </h4>
        {selectNode}
      </div>
      {typeof node === "string" ? (
        <React.Fragment>
          <h4>content: </h4>"{node}"
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div>
            <h4>type: </h4>"{nodeDetails[selectNode].type}"
          </div>
          <div>
            <h4>props:</h4>
            {Object.keys(nodeProps).map(key => {
              return (
                <div style={{ marginTop: "8px" }}>
                  <span style={{ color: "#f53d2d" }}>{key}:</span>{" "}
                  {JSON.stringify(nodeProps[key])}
                </div>
              );
            })}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

function Explanation() {
  // Refer to source code to see React.Element data structure
  const [selectNode, setSelectNode] = React.useState(0);
  const handleClickNode = React.useCallback(id => {
    setSelectNode(id);
  }, []);
  return (
    <div className="main-grid-container">
      <div className="view">
        <Tree handleClickNode={handleClickNode} />
        <ReactElementDisplay selectNode={selectNode} />
      </div>
      <div className="view">StackView</div>
    </div>
  );
}

export default Explanation;
