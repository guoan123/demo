"use strict";
const uni_modules_wotDesignUni_components_common_props = require("../common/props.js");
const dorpMenuItemProps = {
  ...uni_modules_wotDesignUni_components_common_props.baseProps,
  /**
   * DropMenuItem 左侧文字样式
   */
  customTitle: uni_modules_wotDesignUni_components_common_props.makeStringProp(""),
  /**
   * DropMenuItem 右侧 icon 样式
   */
  customIcon: uni_modules_wotDesignUni_components_common_props.makeStringProp(""),
  /**
   * 当前选中项对应选中的 value
   */
  modelValue: [String, Number],
  /**
   * 列表数据，对应数据结构 [{text: '标题', value: '0', tip: '提示文字'}]
   */
  options: uni_modules_wotDesignUni_components_common_props.makeArrayProp(),
  /**
   * 禁用菜单
   */
  disabled: uni_modules_wotDesignUni_components_common_props.makeBooleanProp(false),
  /**
   * 选中的图标名称(可选名称在 wd-icon 组件中)
   */
  iconName: uni_modules_wotDesignUni_components_common_props.makeStringProp("check"),
  /**
   * 菜单标题
   */
  title: String,
  /**
   * 选项对象中，value 对应的 key
   */
  valueKey: uni_modules_wotDesignUni_components_common_props.makeStringProp("value"),
  /**
   * 选项对象中，展示的文本对应的 key
   */
  labelKey: uni_modules_wotDesignUni_components_common_props.makeStringProp("label"),
  /**
   * 选项对象中，选项说明对应的 key
   */
  tipKey: uni_modules_wotDesignUni_components_common_props.makeStringProp("tip")
};
exports.dorpMenuItemProps = dorpMenuItemProps;
