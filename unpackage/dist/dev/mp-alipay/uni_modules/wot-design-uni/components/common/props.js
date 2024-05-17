"use strict";
const makeRequiredProp = (type) => ({
  type,
  required: true
});
const makeArrayProp = () => ({
  type: Array,
  default: () => []
});
const makeBooleanProp = (defaultVal) => ({
  type: Boolean,
  default: defaultVal
});
const makeNumberProp = (defaultVal) => ({
  type: Number,
  default: defaultVal
});
const makeStringProp = (defaultVal) => ({
  type: String,
  default: defaultVal
});
const baseProps = {
  /**
   * 自定义根节点样式
   */
  customStyle: makeStringProp(""),
  /**
   * 自定义根节点样式类
   */
  customClass: makeStringProp("")
};
exports.baseProps = baseProps;
exports.makeArrayProp = makeArrayProp;
exports.makeBooleanProp = makeBooleanProp;
exports.makeNumberProp = makeNumberProp;
exports.makeRequiredProp = makeRequiredProp;
exports.makeStringProp = makeStringProp;
