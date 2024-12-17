"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("swiper/vue");
const modules_1 = require("swiper/modules");
require("swiper/css");
require("swiper/css/effect-coverflow");
require("swiper/css/pagination");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const modules = [modules_1.EffectCoverflow, modules_1.Pagination];
const props = defineProps(); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['swiper-slide'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.swiper;
    /** @type { [typeof __VLS_components.Swiper, typeof __VLS_components.swiper, typeof __VLS_components.Swiper, typeof __VLS_components.swiper, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ effect: (('coverflow')), initialSlide: ((props.slides.length > 3 ? 1 : Math.floor(__VLS_ctx.slides.length / 2))), grabCursor: ((true)), centeredSlides: ((true)), slidesPerView: (('auto')), spaceBetween: ((0)), loop: ((props.slides.length > 3 ? true : false)), coverflowEffect: (({
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
            scale: 0.7,
        })), modules: ((__VLS_ctx.modules)), ...{ class: ("mySwiper") }, }));
    const __VLS_2 = __VLS_1({ effect: (('coverflow')), initialSlide: ((props.slides.length > 3 ? 1 : Math.floor(__VLS_ctx.slides.length / 2))), grabCursor: ((true)), centeredSlides: ((true)), slidesPerView: (('auto')), spaceBetween: ((0)), loop: ((props.slides.length > 3 ? true : false)), coverflowEffect: (({
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
            scale: 0.7,
        })), modules: ((__VLS_ctx.modules)), ...{ class: ("mySwiper") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    for (const [slide] of __VLS_getVForSourceType((props.slides))) {
        const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.SwiperSlide;
        /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ key: ((slide)), }));
        const __VLS_9 = __VLS_8({ key: ((slide)), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/temp-moment.png"), alt: ("moment"), });
        __VLS_nonNullable(__VLS_12.slots).default;
        var __VLS_12;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['mySwiper'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
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
const __VLS_self = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {
            Swiper: vue_1.Swiper,
            SwiperSlide: vue_1.SwiperSlide,
            modules: modules,
        };
    },
    __typeProps: {},
});
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
