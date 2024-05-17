"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_wotDesignUni_components_common_util = require("../common/util.js");
const uni_modules_wotDesignUni_components_wdTransition_types = require("./types.js");
require("../common/props.js");
const __default__ = {
  name: "wd-transition",
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  props: uni_modules_wotDesignUni_components_wdTransition_types.transitionProps,
  emits: ["click", "before-enter", "enter", "before-leave", "leave", "after-leave", "after-enter"],
  setup(__props, { emit }) {
    const props = __props;
    const getClassNames = (name) => {
      if (!name) {
        return {
          enter: `${props.enterClass} ${props.enterActiveClass}`,
          "enter-to": `${props.enterToClass} ${props.enterActiveClass}`,
          leave: `${props.leaveClass} ${props.leaveActiveClass}`,
          "leave-to": `${props.leaveToClass} ${props.leaveActiveClass}`
        };
      }
      return {
        enter: `wd-${name}-enter wd-${name}-enter-active`,
        "enter-to": `wd-${name}-enter-to wd-${name}-enter-active`,
        leave: `wd-${name}-leave wd-${name}-leave-active`,
        "leave-to": `wd-${name}-leave-to wd-${name}-leave-active`
      };
    };
    const inited = common_vendor.ref(false);
    const display = common_vendor.ref(false);
    const status = common_vendor.ref("");
    const transitionEnded = common_vendor.ref(false);
    const currentDuration = common_vendor.ref(300);
    const classes = common_vendor.ref("");
    const enterPromise = common_vendor.ref(null);
    const style = common_vendor.computed(() => {
      return `-webkit-transition-duration:${currentDuration.value}ms;transition-duration:${currentDuration.value}ms;${display.value ? "" : "display: none;"}${props.customStyle}`;
    });
    const rootClass = common_vendor.computed(() => {
      return `wd-transition ${props.customClass}  ${classes.value}`;
    });
    common_vendor.onBeforeMount(() => {
      if (props.show) {
        enter();
      }
    });
    common_vendor.watch(
      () => props.show,
      (newVal) => {
        observerShow(newVal);
      },
      { deep: true, immediate: true }
    );
    function handleClick() {
      emit("click");
    }
    function observerShow(value) {
      value ? enter() : leave();
    }
    function enter() {
      if (enterPromise.value)
        return;
      enterPromise.value = new Promise((resolve) => {
        const classNames = getClassNames(props.name);
        const duration = uni_modules_wotDesignUni_components_common_util.isObj(props.duration) ? props.duration.enter : props.duration;
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
              resolve();
            });
          });
        });
      });
    }
    function leave() {
      if (!enterPromise.value)
        return;
      enterPromise.value.then(() => {
        if (!display.value)
          return;
        const classNames = getClassNames(props.name);
        const duration = uni_modules_wotDesignUni_components_common_util.isObj(props.duration) ? props.duration.leave : props.duration;
        status.value = "leave";
        emit("before-leave");
        uni_modules_wotDesignUni_components_common_util.requestAnimationFrame(() => {
          emit("leave");
          classes.value = classNames.leave;
          currentDuration.value = duration;
          uni_modules_wotDesignUni_components_common_util.requestAnimationFrame(() => {
            transitionEnded.value = false;
            setTimeout(() => {
              onTransitionEnd();
              enterPromise.value = null;
            }, currentDuration.value);
            classes.value = classNames["leave-to"];
          });
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
      if (!props.show && display.value) {
        display.value = false;
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: inited.value
      }, inited.value ? {
        b: common_vendor.n(common_vendor.unref(rootClass)),
        c: common_vendor.s(common_vendor.unref(style)),
        d: common_vendor.o(onTransitionEnd),
        e: common_vendor.o(handleClick)
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-af59a128"], ["__file", "C:/Users/26382/Desktop/杂乱/demo/uni_modules/wot-design-uni/components/wd-transition/wd-transition.vue"]]);
wx.createComponent(Component);
