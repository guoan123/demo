"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_wotDesignUni_components_common_util = require("../common/util.js");
const uni_modules_wotDesignUni_components_wdPopup_types = require("./types.js");
require("../common/props.js");
if (!Array) {
  const _easycom_wd_overlay2 = common_vendor.resolveComponent("wd-overlay");
  const _easycom_wd_icon2 = common_vendor.resolveComponent("wd-icon");
  (_easycom_wd_overlay2 + _easycom_wd_icon2)();
}
const _easycom_wd_overlay = () => "../wd-overlay/wd-overlay.js";
const _easycom_wd_icon = () => "../wd-icon/wd-icon.js";
if (!Math) {
  (_easycom_wd_overlay + _easycom_wd_icon)();
}
const __default__ = {
  name: "wd-popup",
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  props: uni_modules_wotDesignUni_components_wdPopup_types.popupProps,
  emits: [
    "update:modelValue",
    "before-enter",
    "enter",
    "before-leave",
    "leave",
    "after-leave",
    "after-enter",
    "click-modal",
    "close"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const getClassNames = (name2) => {
      if (!name2) {
        return {
          enter: "enter-class enter-active-class",
          "enter-to": "enter-to-class enter-active-class",
          leave: "leave-class leave-active-class",
          "leave-to": "leave-to-class leave-active-class"
        };
      }
      return {
        enter: `wd-${name2}-enter wd-${name2}-enter-active`,
        "enter-to": `wd-${name2}-enter-to wd-${name2}-enter-active`,
        leave: `wd-${name2}-leave wd-${name2}-leave-active`,
        "leave-to": `wd-${name2}-leave-to wd-${name2}-leave-active`
      };
    };
    const inited = common_vendor.ref(false);
    const display = common_vendor.ref(false);
    const status = common_vendor.ref("");
    const transitionEnded = common_vendor.ref(false);
    const currentDuration = common_vendor.ref(300);
    const classes = common_vendor.ref("");
    const safeBottom = common_vendor.ref(0);
    const name = common_vendor.ref("");
    const style = common_vendor.computed(() => {
      return `z-index: ${props.zIndex}; padding-bottom: ${safeBottom.value}px; -webkit-transition-duration: ${currentDuration.value}ms; transition-duration: ${currentDuration.value}ms; ${display.value || !props.hideWhenClose ? "" : "display: none;"} ${props.customStyle}`;
    });
    const rootClass = common_vendor.computed(() => {
      return `wd-popup wd-popup--${props.position} ${props.customClass || ""} ${classes.value || ""}`;
    });
    common_vendor.onBeforeMount(() => {
      observerTransition();
      if (props.safeAreaInsetBottom) {
        const { safeArea, screenHeight, safeAreaInsets } = common_vendor.index.getSystemInfoSync();
        if (safeArea) {
          safeBottom.value = safeAreaInsets ? safeAreaInsets.bottom : 0;
        } else {
          safeBottom.value = 0;
        }
      }
      if (props.modelValue) {
        enter();
      }
    });
    common_vendor.watch(
      () => props.modelValue,
      (newVal) => {
        observermodelValue(newVal);
      },
      { deep: true, immediate: true }
    );
    common_vendor.watch(
      [() => props.position, () => props.transition],
      () => {
        observerTransition();
      },
      { deep: true, immediate: true }
    );
    function observermodelValue(value) {
      value ? enter() : leave();
    }
    function enter() {
      const classNames = getClassNames(props.transition || props.position);
      const duration = props.transition === "none" ? 0 : uni_modules_wotDesignUni_components_common_util.isObj(props.duration) ? props.duration.enter : props.duration;
      status.value = "enter";
      emit("before-enter");
      uni_modules_wotDesignUni_components_common_util.requestAnimationFrame(() => {
        emit("enter");
        classes.value = classNames.enter;
        currentDuration.value = duration;
        uni_modules_wotDesignUni_components_common_util.requestAnimationFrame(() => {
          inited.value = true;
          display.value = true;
          uni_modules_wotDesignUni_components_common_util.requestAnimationFrame(() => {
            transitionEnded.value = false;
            classes.value = classNames["enter-to"];
          });
        });
      });
    }
    function leave() {
      if (!display.value)
        return;
      const classNames = getClassNames(props.transition || props.position);
      const duration = props.transition === "none" ? 0 : uni_modules_wotDesignUni_components_common_util.isObj(props.duration) ? props.duration.leave : props.duration;
      status.value = "leave";
      emit("before-leave");
      uni_modules_wotDesignUni_components_common_util.requestAnimationFrame(() => {
        emit("leave");
        classes.value = classNames.leave;
        currentDuration.value = duration;
        uni_modules_wotDesignUni_components_common_util.requestAnimationFrame(() => {
          transitionEnded.value = false;
          const timer = setTimeout(() => {
            onTransitionEnd();
            clearTimeout(timer);
          }, currentDuration.value);
          classes.value = classNames["leave-to"];
        });
      });
    }
    function onTransitionEnd() {
      if (transitionEnded.value)
        return;
      transitionEnded.value = true;
      if (status.value === "leave") {
        emit("after-leave");
      } else if (status.value === "enter") {
        emit("after-enter");
      }
      if (!props.modelValue && display.value) {
        display.value = false;
      }
    }
    function observerTransition() {
      const { transition, position } = props;
      name.value = transition || position;
    }
    function handleClickModal() {
      emit("click-modal");
      if (props.closeOnClickModal) {
        close();
      }
    }
    function close() {
      emit("close");
      emit("update:modelValue", false);
    }
    function noop() {
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.modal
      }, _ctx.modal ? {
        b: common_vendor.o(handleClickModal),
        c: common_vendor.o(noop),
        d: common_vendor.p({
          show: _ctx.modelValue,
          ["z-index"]: _ctx.zIndex,
          ["lock-scroll"]: _ctx.lockScroll,
          duration: _ctx.duration,
          ["custom-style"]: _ctx.modalStyle
        })
      } : {}, {
        e: !_ctx.lazyRender || inited.value
      }, !_ctx.lazyRender || inited.value ? common_vendor.e({
        f: _ctx.closable
      }, _ctx.closable ? {
        g: common_vendor.o(close),
        h: common_vendor.p({
          ["custom-class"]: "wd-popup__close",
          name: "add"
        })
      } : {}, {
        i: common_vendor.n(common_vendor.unref(rootClass)),
        j: common_vendor.s(common_vendor.unref(style)),
        k: common_vendor.o(onTransitionEnd)
      }) : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-25a8a9f7"], ["__file", "C:/Users/26382/Desktop/杂乱/demo/uni_modules/wot-design-uni/components/wd-popup/wd-popup.vue"]]);
my.createComponent(Component);
