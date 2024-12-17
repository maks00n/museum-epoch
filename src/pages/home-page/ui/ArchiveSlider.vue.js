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
require("swiper/css");
require("swiper/css/effect-coverflow");
require("swiper/css/pagination");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var modules = [modules_1.EffectCoverflow, modules_1.Pagination];
var props = defineProps(); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_styleScopedClasses['swiper-slide'];
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.swiper;
    /** @type { [typeof __VLS_components.Swiper, typeof __VLS_components.swiper, typeof __VLS_components.Swiper, typeof __VLS_components.swiper, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ effect: (('coverflow')), initialSlide: ((props.slides.length > 3 ? 1 : Math.floor(__VLS_ctx.slides.length / 2))), grabCursor: ((true)), centeredSlides: ((true)), slidesPerView: (('auto')), spaceBetween: ((0)), loop: ((props.slides.length > 3 ? true : false)), coverflowEffect: (({
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
            scale: 0.7,
        })), modules: ((__VLS_ctx.modules)) }, { class: ("mySwiper") })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ effect: (('coverflow')), initialSlide: ((props.slides.length > 3 ? 1 : Math.floor(__VLS_ctx.slides.length / 2))), grabCursor: ((true)), centeredSlides: ((true)), slidesPerView: (('auto')), spaceBetween: ((0)), loop: ((props.slides.length > 3 ? true : false)), coverflowEffect: (({
                rotate: 10,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
                scale: 0.7,
            })), modules: ((__VLS_ctx.modules)) }, { class: ("mySwiper") })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_6 = {};
    for (var _i = 0, _a = __VLS_getVForSourceType((props.slides)); _i < _a.length; _i++) {
        var slide = _a[_i][0];
        var __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.SwiperSlide;
        /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */
        // @ts-ignore
        var __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ key: ((slide)), }));
        var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{ key: ((slide)), }], __VLS_functionalComponentArgsRest(__VLS_8), false));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/temp-moment.png"), alt: ("moment"), });
        __VLS_nonNullable(__VLS_12.slots).default;
        var __VLS_12;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['mySwiper'];
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
            modules: modules,
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
