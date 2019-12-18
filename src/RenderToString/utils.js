import React from "react";

import { REACT_FRAGMENT_TYPE } from "./shared/ReactSymbols";
import { escapeTextForBrowser } from "./escapeTextForBrowser";

export const toArray = React.Children.toArray;

export function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }
  const element = children;
  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }
  const fragmentChildren = element.props.children;
  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }
  return [fragmentChildren];
}

export function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

export function getNonChildrenInnerMarkup(props) {
  const innerHTML = props.dangerouslySetInnerHTML;
  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    const content = props.children;
    if (typeof content === "string" || typeof content === "number") {
      return escapeTextForBrowser(content);
    }
  }
  return null;
}
