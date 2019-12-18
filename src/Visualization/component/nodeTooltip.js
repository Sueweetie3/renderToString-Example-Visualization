import React from "react";
import "antd/es/timeline/style/css";
import styles from "./index.module.css";
const NodeToolTips = ({ x, y, node }) => {
  return (
    <div
      id="tttt"
      className={styles.nodeTooltips}
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      <div className="elementDisplay">
        <div>
          <h4>type: </h4>"{node.type}"
          {node.content ? (
            <React.Fragment>
              <h4 style={{ marginTop: "8px" }}>content:</h4>
              {JSON.stringify(node.content)}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h4 style={{ marginTop: "8px" }}>props:</h4>
              {Object.keys(node.props).map(key => {
                return (
                  <div style={{ marginTop: "8px" }}>
                    <span style={{ color: "#f53d2d" }}>{key}:</span>{" "}
                    {JSON.stringify(node.props[key])}
                  </div>
                );
              })}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default NodeToolTips;
