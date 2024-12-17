"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("swiper/vue");
var modules_1 = require("swiper/modules");
var vue_2 = require("vue");
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
var MainSliderCard_vue_1 = require("./MainSliderCard.vue");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var props = defineProps();
var instance = (0, vue_2.getCurrentInstance)();
var uniqueId = (0, vue_2.ref)(instance === null || instance === void 0 ? void 0 : instance.uid);
; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_fnComponent = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
;
var __VLS_functionalComponentProps;
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_localComponents = __assign(__assign(__assign({}, {}), {}), __VLS_ctx);
    var __VLS_components;
    var __VLS_localDirectives = __assign(__assign({}, {}), __VLS_ctx);
    var __VLS_directives;
    var __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("main-slider") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("title") }));
    (props.title);
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Swiper;
    /** @type { [typeof __VLS_components.Swiper, typeof __VLS_components.Swiper, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ navigation: (({ nextEl: '.custom-next-' + __VLS_ctx.uniqueId, prevEl: '.custom-prev-' + __VLS_ctx.uniqueId })), modules: (([__VLS_ctx.Navigation, __VLS_ctx.Autoplay, __VLS_ctx.Navigation])), slidesPerView: ((4)), spaceBetween: ((20)), loop: ((true)) }, { class: ("swiper") })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ navigation: (({ nextEl: '.custom-next-' + __VLS_ctx.uniqueId, prevEl: '.custom-prev-' + __VLS_ctx.uniqueId })), modules: (([__VLS_ctx.Navigation, __VLS_ctx.Autoplay, __VLS_ctx.Navigation])), slidesPerView: ((4)), spaceBetween: ((20)), loop: ((true)) }, { class: ("swiper") })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    for (var _i = 0, _a = __VLS_getVForSourceType((props.slides)); _i < _a.length; _i++) {
        var slide = _a[_i][0];
        var __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.SwiperSlide;
        /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */
        // @ts-ignore
        var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((slide.name)), }));
        var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{ key: ((slide.name)), }], __VLS_functionalComponentArgsRest(__VLS_7), false));
        // @ts-ignore
        [MainSliderCard_vue_1.default,];
        // @ts-ignore
        var __VLS_12 = __VLS_asFunctionalComponent(MainSliderCard_vue_1.default, new MainSliderCard_vue_1.default({ photo: ((slide.photo)), name: ((slide.name)), description: ((slide.description)), isCompact: ((props.isCompact)), }));
        var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([{ photo: ((slide.photo)), name: ((slide.name)), description: ((slide.description)), isCompact: ((props.isCompact)), }], __VLS_functionalComponentArgsRest(__VLS_12), false));
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("custom-navigation") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: (('custom-prev custom-prev-' + __VLS_ctx.uniqueId)) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/app/assets/images/arrow.svg"), alt: ("назад"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: (('custom-next custom-next-' + __VLS_ctx.uniqueId)) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/app/assets/images/arrow.svg"), alt: ("вперед"), });
    __VLS_styleScopedClasses['main-slider'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['swiper'];
    __VLS_styleScopedClasses['custom-navigation'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            Swiper: vue_1.Swiper,
            SwiperSlide: vue_1.SwiperSlide,
            Navigation: modules_1.Navigation,
            Autoplay: modules_1.Autoplay,
            MainSliderCard: MainSliderCard_vue_1.default,
            uniqueId: uniqueId,
        };
    },
    __typeProps: {},
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
