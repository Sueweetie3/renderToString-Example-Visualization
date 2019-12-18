import React from "react";
import ReactDOMServerRenderer from "../RenderToString";

import "../index.css";
import { ItemList } from "./ItemList.js";

function SelectedResult({ selectItems }) {
  return (
    <React.Fragment>
      {selectItems.map(item => (
        <span key={item} className="selectItemName">
          {item}
        </span>
      ))}
    </React.Fragment>
  );
}

function Example() {
  const [selectItems, setSelectItems] = React.useState([]);
  const handleSelectItem = React.useCallback(
    item => {
      if (selectItems.includes(item)) {
        setSelectItems(selectItems.filter(selectItem => selectItem !== item));
      } else {
        setSelectItems([...selectItems, item]);
      }
    },
    [selectItems]
  );
  return (
    <div className="main">
      <h2 className="title">
        <svg className="logo" viewBox="0 0 48 48">
          <path
            d="M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0
      c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4
      c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0
      C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8
      c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5
      c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5
      c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1
      c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8
      c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
          ></path>
        </svg>
        Product List:
      </h2>
      <ItemList
        items={["apple", "banana", "carrot"]}
        selectItems={selectItems}
        handleSelectItem={handleSelectItem}
      />
      You have selected o(*≧▽≦)ツ:
      <SelectedResult selectItems={selectItems} />
    </div>
  );
}

const ReactDOMServerRendererInst = new ReactDOMServerRenderer((<Example />));
console.log(ReactDOMServerRendererInst.read());

export default Example;
