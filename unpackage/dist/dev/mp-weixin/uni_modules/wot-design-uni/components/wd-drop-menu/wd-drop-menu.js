"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_wotDesignUni_components_common_clickoutside = require("../common/clickoutside.js");
const uni_modules_wotDesignUni_components_composables_useQueue = require("../composables/useQueue.js");
const uni_modules_wotDesignUni_components_common_util = require("../common/util.js");
const uni_modules_wotDesignUni_components_composables_useChildren = require("../composables/useChildren.js");
const uni_modules_wotDesignUni_components_wdDropMenu_types = require("./types.js");
require("../common/props.js");
if (!Array) {
  const _easycom_wd_icon2 = common_vendor.resolveComponent("wd-icon");
  _easycom_wd_icon2();
}
const _easycom_wd_icon = () => "../wd-icon/wd-icon.js";
if (!Math) {
  _easycom_wd_icon();
}
const __default__ = {
  name: "wd-drop-menu",
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  props: uni_modules_wotDesignUni_components_wdDropMenu_types.dropMenuProps,
  setup(__props) {
    const props = __props;
    const queue = common_vendor.inject(uni_modules_wotDesignUni_components_composables_useQueue.queueKey, null);
    const dropMenuId = common_vendor.ref(`dropMenuId${uni_modules_wotDesignUni_components_common_util.uuid()}`);
    const currentUid = common_vendor.ref(null);
    const offset = common_vendor.ref(0);
    const windowHeight = common_vendor.ref(0);
    const { proxy } = common_vendor.getCurrentInstance();
    const { linkChildren, children } = uni_modules_wotDesignUni_components_composables_useChildren.useChildren(uni_modules_wotDesignUni_components_wdDropMenu_types.DROP_MENU_KEY);
    linkChildren({ props, fold, offset });
    common_vendor.watch(
      () => props.direction,
      (newValue) => {
        if (newValue !== "up" && newValue !== "down") {
          console.error("[wot design] warning(wd-drop-menu): direction must be 'up' or 'down'");
        }
      },
      { deep: true, immediate: true }
    );
    common_vendor.onBeforeMount(() => {
      windowHeight.value = common_vendor.index.getSystemInfoSync().windowHeight;
    });
    function noop(event) {
      event.preventDefault();
      event.stopPropagation();
    }
    function getDisplayTitle(child) {
      const { title, modelValue, options, valueKey, labelKey } = child;
      if (title) {
        return title;
      }
      for (let i = 0, len = options.length; i < len; i++) {
        if (modelValue === options[i][valueKey]) {
          return options[i][labelKey];
        }
      }
      console.error("[wot-design] warning(wd-drop-menu-item): no value is matched in the options option.");
    }
    function toggle(child) {
      if (child && !child.disabled) {
        if (queue && queue.closeOther) {
          queue.closeOther(child);
        } else {
          uni_modules_wotDesignUni_components_common_clickoutside.closeOther(child);
        }
        fold(child);
      }
    }
    function fold(child) {
      currentUid.value = child ? child.$.uid : null;
      if (!child) {
        children.forEach((item) => {
          item.$.exposed.setShowPop(false);
        });
        return;
      }
      uni_modules_wotDesignUni_components_common_util.getRect(`#${dropMenuId.value}`, false, proxy).then((rect) => {
        if (!rect)
          return;
        const { top, bottom } = rect;
        if (props.direction === "down") {
          offset.value = Number(bottom);
        } else {
          offset.value = windowHeight.value - Number(top);
        }
        const showPop = child.$.exposed.getShowPop();
        if (showPop) {
          child.$.exposed.setShowPop(false);
          currentUid.value = null;
        } else {
          children.forEach((item) => {
            if (child.$.uid === item.$.uid) {
              item.$.exposed.open();
            } else {
              item.$.exposed.setShowPop(false);
            }
          });
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(children), (child, index, i0) => {
          return {
            a: common_vendor.t(getDisplayTitle(child)),
            b: "26b08949-0-" + i0,
            c: index,
            d: common_vendor.o(($event) => toggle(child), index),
            e: common_vendor.n(`wd-drop-menu__item ${child.disabled ? "is-disabled" : ""} ${currentUid.value === child.$.uid ? "is-active" : ""}`)
          };
        }),
        b: common_vendor.p({
          name: "arrow-down",
          size: "14px",
          ["custom-class"]: "wd-drop-menu__arrow"
        }),
        c: common_vendor.s(_ctx.customStyle),
        d: common_vendor.n(`wd-drop-menu ${_ctx.customClass}`),
        e: common_vendor.o(noop),
        f: dropMenuId.value
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-26b08949"], ["__file", "C:/Users/26382/Desktop/杂乱/demo/uni_modules/wot-design-uni/components/wd-drop-menu/wd-drop-menu.vue"]]);
wx.createComponent(Component);
