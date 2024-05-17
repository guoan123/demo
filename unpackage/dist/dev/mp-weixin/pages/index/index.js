"use strict";
const common_vendor = require("../../common/vendor.js");
const uni_modules_wotDesignUni_components_composables_useQueue = require("../../uni_modules/wot-design-uni/components/composables/useQueue.js");
require("../../uni_modules/wot-design-uni/locale/index.js");
require("../../uni_modules/wot-design-uni/locale/lang/zh-CN.js");
if (!Array) {
  const _easycom_wd_drop_menu_item2 = common_vendor.resolveComponent("wd-drop-menu-item");
  const _easycom_wd_drop_menu2 = common_vendor.resolveComponent("wd-drop-menu");
  (_easycom_wd_drop_menu_item2 + _easycom_wd_drop_menu2)();
}
const _easycom_wd_drop_menu_item = () => "../../uni_modules/wot-design-uni/components/wd-drop-menu-item/wd-drop-menu-item.js";
const _easycom_wd_drop_menu = () => "../../uni_modules/wot-design-uni/components/wd-drop-menu/wd-drop-menu.js";
if (!Math) {
  (_easycom_wd_drop_menu_item + _easycom_wd_drop_menu)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    uni_modules_wotDesignUni_components_composables_useQueue.useQueue();
    const value1 = ref(0);
    const value2 = ref(0);
    const option1 = ref([
      { label: "全部商品", value: 0 },
      { label: "新款商品", value: 1 },
      { label: "活动商品", value: 2 }
    ]);
    const option2 = ref([
      { label: "综合", value: 0 },
      { label: "销量", value: 1 },
      { label: "上架时间", value: 2 }
    ]);
    function handleChange1({ value }) {
      console.log(value);
    }
    function handleChange2({ value }) {
      console.log(value);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleChange1),
        b: common_vendor.o(($event) => common_vendor.isRef(value1) ? value1.value = $event : null),
        c: common_vendor.p({
          options: common_vendor.unref(option1),
          modelValue: common_vendor.unref(value1)
        }),
        d: common_vendor.o(handleChange2),
        e: common_vendor.o(($event) => common_vendor.isRef(value2) ? value2.value = $event : null),
        f: common_vendor.p({
          options: common_vendor.unref(option2),
          modelValue: common_vendor.unref(value2)
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/26382/Desktop/杂乱/demo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
