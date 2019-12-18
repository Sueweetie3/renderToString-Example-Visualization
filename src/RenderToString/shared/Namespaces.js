export const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
export const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
export const Namespaces = {
  html: HTML_NAMESPACE,
  svg: SVG_NAMESPACE
};

export function getIntrinsicNamespace(type) {
  switch (type) {
    case "svg":
      return SVG_NAMESPACE;

    default:
      return HTML_NAMESPACE;
  }
}

export function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    return getIntrinsicNamespace(type);
  }

  if (parentNamespace === SVG_NAMESPACE && type === "foreignObject") {
    return HTML_NAMESPACE;
  }

  return parentNamespace;
}
