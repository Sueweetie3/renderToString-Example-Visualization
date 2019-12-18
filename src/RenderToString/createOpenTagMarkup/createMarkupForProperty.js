import properties, {
  RESERVED,
  OVERLOADED_BOOLEAN,
  BOOLEAN,
  NUMERIC,
  POSITIVE_NUMERIC
} from "./properties";
import { escapeTextForBrowser } from "../escapeTextForBrowser";

function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (
    name.length > 2 &&
    (name[0] === "o" || name[0] === "O") &&
    (name[1] === "n" || name[1] === "N")
  ) {
    return true;
  }

  return false;
}

function shouldRemoveAttribute(
  name,
  value,
  propertyInfo,
  isCustomComponentTag
) {
  if (value === null || typeof value === "undefined") {
    return true;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (propertyInfo !== null) {
    // eslint-disable-next-line default-case
    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;

      case OVERLOADED_BOOLEAN:
        return value === false;

      case NUMERIC:
        return isNaN(value);

      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }

  return false;
}
function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

export function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);

  if (name !== "style" && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return "";
  }

  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return "";
  }

  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || (type === OVERLOADED_BOOLEAN && value === true)) {
      return attributeName + '=""';
    } else {
      return attributeName + "=" + quoteAttributeValueForBrowser(value);
    }
  } else {
    return name + "=" + quoteAttributeValueForBrowser(value);
  }
}

export function createMarkupForCustomAttribute(name, value) {
  if (value == null) {
    return "";
  }

  return name + "=" + quoteAttributeValueForBrowser(value);
}
