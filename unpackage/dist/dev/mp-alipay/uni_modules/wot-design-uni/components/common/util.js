"use strict";
const common_vendor = require("../../../../common/vendor.js");
function uuid() {
  return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}
function s4() {
  return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
}
function isObj(value) {
  return Object.prototype.toString.call(value) === "[object Object]" || typeof value === "object";
}
function getType(target) {
  const typeStr = Object.prototype.toString.call(target);
  const match = typeStr.match(/\[object (\w+)\]/);
  const type = match && match.length ? match[1].toLowerCase() : "";
  return type;
}
const isDef = (value) => value !== void 0 && value !== null;
function getRect(selector, all, scope) {
  return new Promise((resolve, reject) => {
    let query = null;
    if (scope) {
      query = common_vendor.index.createSelectorQuery().in(scope);
    } else {
      query = common_vendor.index.createSelectorQuery();
    }
    query[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
      if (all && isArray(rect) && rect.length > 0) {
        resolve(rect);
      } else if (!all && rect) {
        resolve(rect);
      } else {
        reject(new Error("No nodes found"));
      }
    }).exec();
  });
}
function kebabCase(word) {
  const newWord = word.replace(/[A-Z]/g, function(match) {
    return "-" + match;
  }).toLowerCase();
  return newWord;
}
function isArray(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  }
  return Object.prototype.toString.call(value) === "[object Array]";
}
function isString(value) {
  return getType(value) === "string";
}
function objToStyle(styles) {
  if (isArray(styles)) {
    return styles.filter(function(item) {
      return item != null && item !== "";
    }).map(function(item) {
      return objToStyle(item);
    }).join(";");
  }
  if (isString(styles)) {
    return styles;
  }
  if (isObj(styles)) {
    return Object.keys(styles).filter(function(key) {
      return styles[key] != null && styles[key] !== "";
    }).map(function(key) {
      return [kebabCase(key), styles[key]].join(":");
    }).join(";");
  }
  return "";
}
const requestAnimationFrame = (cb = () => {
}) => {
  return new Promise((resolve) => {
    const timer = setInterval(() => {
      clearInterval(timer);
      resolve(true);
      cb();
    }, 1e3 / 30);
  });
};
exports.getRect = getRect;
exports.isDef = isDef;
exports.isObj = isObj;
exports.objToStyle = objToStyle;
exports.requestAnimationFrame = requestAnimationFrame;
exports.uuid = uuid;
