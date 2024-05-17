"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_wotDesignUni_components_common_util = require("../common/util.js");
const uni_modules_wotDesignUni_components_wdIcon_types = require("./types.js");
require("../common/props.js");
const __default__ = {
  name: "wd-icon",
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  props: uni_modules_wotDesignUni_components_wdIcon_types.iconProps,
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const isImageUrl = common_vendor.ref(false);
    common_vendor.watch(
      () => props.name,
      (val) => {
        isImageUrl.value = val.indexOf("/") > -1;
      },
      { deep: true, immediate: true }
    );
    const rootClass = common_vendor.computed(() => {
      const prefix = props.classPrefix;
      return `${prefix} ${props.customClass} ${isImageUrl.value ? "wd-icon--image" : prefix + "-" + props.name}`;
    });
    const rootStyle = common_vendor.computed(() => {
      const style = {};
      if (props.color) {
        style["color"] = props.color;
      }
      if (props.size) {
        style["font-size"] = props.size;
      }
      return `${uni_modules_wotDesignUni_components_common_util.objToStyle(style)}; ${props.customStyle}`;
    });
    function handleClick(event) {
      emit("click", event);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isImageUrl.value
      }, isImageUrl.value ? {
        b: _ctx.name
      } : {}, {
        c: common_vendor.o(handleClick),
        d: common_vendor.n(common_vendor.unref(rootClass)),
        e: common_vendor.s(common_vendor.unref(rootStyle))
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-24906af6"], ["__file", "C:/Users/26382/Desktop/杂乱/demo/uni_modules/wot-design-uni/components/wd-icon/wd-icon.vue"]]);
my.createComponent(Component);
