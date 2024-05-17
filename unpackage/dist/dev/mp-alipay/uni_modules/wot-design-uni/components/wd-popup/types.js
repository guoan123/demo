"use strict";
const uni_modules_wotDesignUni_components_common_props = require("../common/props.js");
const popupProps = {
  ...uni_modules_wotDesignUni_components_common_props.baseProps,
  transition: String,
  /**
   * 关闭按钮
   */
  closable: uni_modules_wotDesignUni_components_common_props.makeBooleanProp(false),
  /**
   * 弹出框的位置
   */
  position: uni_modules_wotDesignUni_components_common_props.makeStringProp("center"),
  /**
   * 点击遮罩是否关闭
   */
  closeOnClickModal: uni_modules_wotDesignUni_components_common_props.makeBooleanProp(true),
  /**
   * 动画持续时间
   */
  duration: {
    type: [Number, Boolean],
    default: 300
  },
  /**
   * 是否显示遮罩
   */
  modal: uni_modules_wotDesignUni_components_common_props.makeBooleanProp(true),
  /**
   * 设置层级
   */
  zIndex: uni_modules_wotDesignUni_components_common_props.makeNumberProp(10),
  /**
   * 是否当关闭时将弹出层隐藏（display: none)
   */
  hideWhenClose: uni_modules_wotDesignUni_components_common_props.makeBooleanProp(true),
  /**
   * 遮罩样式
   */
  modalStyle: uni_modules_wotDesignUni_components_common_props.makeStringProp(""),
  /**
   * 弹出面板是否设置底部安全距离（iphone X 类型的机型）
   */
  safeAreaInsetBottom: uni_modules_wotDesignUni_components_common_props.makeBooleanProp(false),
  /**
   * 弹出层是否显示
   */
  modelValue: uni_modules_wotDesignUni_components_common_props.makeBooleanProp(false),
  /**
   * 弹层内容懒渲染，触发展示时才渲染内容
   */
  lazyRender: uni_modules_wotDesignUni_components_common_props.makeBooleanProp(true),
  /**
   * 是否锁定滚动
   */
  lockScroll: uni_modules_wotDesignUni_components_common_props.makeBooleanProp(true)
};
exports.popupProps = popupProps;
