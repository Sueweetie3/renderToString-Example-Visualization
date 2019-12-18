import { isUnitlessNumber } from "../shared/CSSProperty";
import {
  createMarkupForProperty,
  createMarkupForCustomAttribute
} from "./createMarkupForProperty";

var ROOT_ATTRIBUTE_NAME = "data-reactroot";

const uppercasePattern = /([A-Z])/g;
const msPattern = /^ms-/;

export default function hyphenateStyleName(name: string): string {
  return name
    .replace(uppercasePattern, "-$1")
    .toLowerCase()
    .replace(msPattern, "-ms-");
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf("-") === -1) {
    return typeof props.is === "string";
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;

    default:
      return true;
  }
}

const styleNameCache = {};
const processStyleName = function(styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }
  const result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function dangerousStyleValue(name, value, isCustomProperty) {
  const isEmpty = value == null || typeof value === "boolean" || value === "";
  if (isEmpty) {
    return "";
  }

  if (
    !isCustomProperty &&
    typeof value === "number" &&
    value !== 0 &&
    !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])
  ) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ("" + value).trim();
}

function createMarkupForStyles(styles): string | null {
  let serialized = "";
  let delimiter = "";
  for (const styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    const isCustomProperty = styleName.indexOf("--") === 0;
    const styleValue = styles[styleName];
    if (styleValue != null) {
      serialized +=
        delimiter +
        (isCustomProperty ? styleName : processStyleName(styleName)) +
        ":";
      serialized += dangerousStyleValue(
        styleName,
        styleValue,
        isCustomProperty
      );

      delimiter = ";";
    }
  }
  return serialized || null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var STYLE = "style";
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}

export function createOpenTagMarkup(
  tagVerbatim,
  tagLowercase,
  props,
  namespace,
  //makeStaticMarkup,
  isRootElement
): string {
  let ret = "<" + tagVerbatim;

  for (const propKey in props) {
    if (!hasOwnProperty.call(props, propKey)) {
      continue;
    }
    let propValue = props[propKey];
    if (propValue == null) {
      continue;
    }
    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }
    let markup = null;
    if (isCustomComponent(tagLowercase, props)) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }
    if (markup) {
      ret += " " + markup;
    }
  }

  if (isRootElement) {
    ret += " " + createMarkupForRoot();
  }
  return ret;
}
