"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_wotDesignUni_components_wdOverlay_types = require("./types.js");
require("../common/props.js");
if (!Array) {
  const _easycom_wd_transition2 = common_vendor.resolveComponent("wd-transition");
  _easycom_wd_transition2();
}
const _easycom_wd_transition = () => "../wd-transition/wd-transition.js";
if (!Math) {
  _easycom_wd_transition();
}
const __default__ = {
  name: "wd-overlay",
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  props: uni_modules_wotDesignUni_components_wdOverlay_types.overlayProps,
  emits: ["click"],
  setup(__props, { emit }) {
    function handleClick() {
      emit("click");
    }
    function noop() {
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleClick),
        b: common_vendor.o(($event) => _ctx.lockScroll ? noop : ""),
        c: common_vendor.p({
          show: _ctx.show,
          name: "fade",
          ["custom-class"]: "wd-overlay",
          duration: _ctx.duration,
          ["custom-style"]: `z-index: ${_ctx.zIndex}; ${_ctx.customStyle}`
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/26382/Desktop/杂乱/demo/uni_modules/wot-design-uni/components/wd-overlay/wd-overlay.vue"]]);
my.createComponent(Component);
