"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_wotDesignUni_components_common_clickoutside = require("../common/clickoutside.js");
const uni_modules_wotDesignUni_components_composables_useQueue = require("../composables/useQueue.js");
const uni_modules_wotDesignUni_components_composables_useParent = require("../composables/useParent.js");
const uni_modules_wotDesignUni_components_wdDropMenu_types = require("../wd-drop-menu/types.js");
const uni_modules_wotDesignUni_components_common_util = require("../common/util.js");
const uni_modules_wotDesignUni_components_wdDropMenuItem_types = require("./types.js");
require("../common/props.js");
if (!Array) {
  const _easycom_wd_icon2 = common_vendor.resolveComponent("wd-icon");
  const _easycom_wd_popup2 = common_vendor.resolveComponent("wd-popup");
  (_easycom_wd_icon2 + _easycom_wd_popup2)();
}
const _easycom_wd_icon = () => "../wd-icon/wd-icon.js";
const _easycom_wd_popup = () => "../wd-popup/wd-popup.js";
if (!Math) {
  (_easycom_wd_icon + _easycom_wd_popup)();
}
const __default__ = {
  name: "wd-drop-menu-item",
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  props: uni_modules_wotDesignUni_components_wdDropMenuItem_types.dorpMenuItemProps,
  emits: ["change", "update:modelValue", "open", "opened", "closed", "close"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const queue = common_vendor.inject(uni_modules_wotDesignUni_components_composables_useQueue.queueKey, null);
    const showWrapper = common_vendor.ref(false);
    const showPop = common_vendor.ref(false);
    const position = common_vendor.ref();
    const zIndex = common_vendor.ref(12);
    const modal = common_vendor.ref(true);
    const closeOnClickModal = common_vendor.ref(true);
    const duration = common_vendor.ref(0);
    const { parent: dropMenu } = uni_modules_wotDesignUni_components_composables_useParent.useParent(uni_modules_wotDesignUni_components_wdDropMenu_types.DROP_MENU_KEY);
    const { proxy } = common_vendor.getCurrentInstance();
    common_vendor.watch(
      () => props.modelValue,
      (newValue) => {
        if (uni_modules_wotDesignUni_components_common_util.isDef(newValue) && typeof newValue !== "number" && typeof newValue !== "string") {
          console.error("[wot-design] warning(wd-drop-menu-item): the type of value should be a number or a string.");
        }
      },
      {
        deep: true,
        immediate: true
      }
    );
    common_vendor.onBeforeMount(() => {
      if (queue && queue.pushToQueue) {
        queue.pushToQueue(proxy);
      } else {
        uni_modules_wotDesignUni_components_common_clickoutside.pushToQueue(proxy);
      }
    });
    common_vendor.onBeforeUnmount(() => {
      if (queue && queue.removeFromQueue) {
        queue.removeFromQueue(proxy);
      } else {
        uni_modules_wotDesignUni_components_common_clickoutside.removeFromQueue(proxy);
      }
    });
    function setShowPop(show) {
      showPop.value = show;
    }
    function getShowPop() {
      return showPop.value;
    }
    function choose(index) {
      if (props.disabled)
        return;
      const { valueKey } = props;
      const item = props.options[index];
      emit("update:modelValue", item[valueKey] !== "" && item[valueKey] !== void 0 ? item[valueKey] : item);
      close();
      emit("change", {
        value: item[valueKey] !== "" && item[valueKey] !== void 0 ? item[valueKey] : item,
        selectedItem: item
      });
    }
    function close() {
      if (showPop.value) {
        showPop.value = false;
        dropMenu && dropMenu.fold();
      }
    }
    const positionStyle = common_vendor.computed(() => {
      let style = "";
      if (showWrapper.value && dropMenu) {
        style = dropMenu.props.direction === "down" ? `top: calc(var(--window-top) + ${dropMenu.offset.value}px); bottom: 0;` : `top: 0; bottom: calc(var(--window-bottom) + ${dropMenu.offset.value}px)`;
      } else {
        style = "";
      }
      return style;
    });
    function open() {
      showWrapper.value = true;
      showPop.value = true;
      if (dropMenu) {
        modal.value = Boolean(dropMenu.props.modal);
        duration.value = Number(dropMenu.props.duration);
        closeOnClickModal.value = Boolean(dropMenu.props.closeOnClickModal);
        position.value = dropMenu.props.direction === "down" ? "top" : "bottom";
      }
      emit("open");
    }
    function onPopupClose() {
      showWrapper.value = false;
      emit("closed");
    }
    function handleOpen() {
      emit("open");
    }
    function handleOpened() {
      emit("opened");
    }
    function handleClose() {
      emit("close");
    }
    expose({ setShowPop, getShowPop, open, close });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: showWrapper.value
      }, showWrapper.value ? common_vendor.e({
        b: _ctx.options.length
      }, _ctx.options.length ? {
        c: common_vendor.f(_ctx.options, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item[_ctx.labelKey] ? item[_ctx.labelKey] : item),
            b: item[_ctx.tipKey]
          }, item[_ctx.tipKey] ? {
            c: common_vendor.t(item[_ctx.tipKey])
          } : {}, {
            d: (item[_ctx.valueKey] !== "" ? item[_ctx.valueKey] : item) === _ctx.modelValue
          }, (item[_ctx.valueKey] !== "" ? item[_ctx.valueKey] : item) === _ctx.modelValue ? {
            e: common_vendor.n(`wd-drop-item__icon ${_ctx.customIcon}`),
            f: "d46e2d3a-1-" + i0 + ",d46e2d3a-0",
            g: common_vendor.p({
              name: _ctx.iconName,
              size: "20px"
            })
          } : {}, {
            h: index,
            i: common_vendor.o(($event) => choose(index), index),
            j: common_vendor.n(`wd-drop-item__option ${(item[_ctx.valueKey] !== "" ? item[_ctx.valueKey] : item) === _ctx.modelValue ? "is-active" : ""}`)
          });
        }),
        d: common_vendor.n(`wd-drop-item__title ${_ctx.customTitle}`)
      } : {}, {
        e: common_vendor.o(close),
        f: common_vendor.o(handleOpen),
        g: common_vendor.o(handleOpened),
        h: common_vendor.o(handleClose),
        i: common_vendor.o(onPopupClose),
        j: common_vendor.o(($event) => showPop.value = $event),
        k: common_vendor.p({
          ["z-index"]: zIndex.value,
          duration: duration.value,
          position: position.value,
          ["custom-style"]: "position: absolute; max-height: 80%;",
          ["modal-style"]: "position: absolute;",
          modal: modal.value,
          ["close-on-click-modal"]: closeOnClickModal.value,
          modelValue: showPop.value
        }),
        l: common_vendor.n(`wd-drop-item  ${_ctx.customClass}`),
        m: common_vendor.s(`z-index: ${zIndex.value}; ${common_vendor.unref(positionStyle)};${_ctx.customStyle}`)
      }) : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d46e2d3a"], ["__file", "C:/Users/26382/Desktop/杂乱/demo/uni_modules/wot-design-uni/components/wd-drop-menu-item/wd-drop-menu-item.vue"]]);
wx.createComponent(Component);
