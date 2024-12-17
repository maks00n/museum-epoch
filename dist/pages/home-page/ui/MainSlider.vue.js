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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("swiper/vue");
const modules_1 = require("swiper/modules");
const vue_2 = require("vue");
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
const MainSliderCard_vue_1 = __importDefault(require("./MainSliderCard.vue"));
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const props = defineProps();
const instance = (0, vue_2.getCurrentInstance)();
const uniqueId = (0, vue_2.ref)(instance?.uid);
; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main-slider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("title") }, });
    (props.title);
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Swiper;
    /** @type { [typeof __VLS_components.Swiper, typeof __VLS_components.Swiper, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ navigation: (({ nextEl: '.custom-next-' + __VLS_ctx.uniqueId, prevEl: '.custom-prev-' + __VLS_ctx.uniqueId })), modules: (([__VLS_ctx.Navigation, __VLS_ctx.Autoplay, __VLS_ctx.Navigation])), slidesPerView: ((4)), spaceBetween: ((20)), loop: ((true)), ...{ class: ("swiper") }, }));
    const __VLS_2 = __VLS_1({ navigation: (({ nextEl: '.custom-next-' + __VLS_ctx.uniqueId, prevEl: '.custom-prev-' + __VLS_ctx.uniqueId })), modules: (([__VLS_ctx.Navigation, __VLS_ctx.Autoplay, __VLS_ctx.Navigation])), slidesPerView: ((4)), spaceBetween: ((20)), loop: ((true)), ...{ class: ("swiper") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    for (const [slide] of __VLS_getVForSourceType((props.slides))) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.SwiperSlide;
        /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((slide.name)), }));
        const __VLS_8 = __VLS_7({ key: ((slide.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        // @ts-ignore
        [MainSliderCard_vue_1.default,];
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(MainSliderCard_vue_1.default, new MainSliderCard_vue_1.default({ photo: ((slide.photo)), name: ((slide.name)), description: ((slide.description)), isCompact: ((props.isCompact)), }));
        const __VLS_13 = __VLS_12({ photo: ((slide.photo)), name: ((slide.name)), description: ((slide.description)), isCompact: ((props.isCompact)), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("custom-navigation") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: (('custom-prev custom-prev-' + __VLS_ctx.uniqueId)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/app/assets/images/arrow.svg"), alt: ("назад"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: (('custom-next custom-next-' + __VLS_ctx.uniqueId)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/app/assets/images/arrow.svg"), alt: ("вперед"), });
    __VLS_styleScopedClasses['main-slider'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['swiper'];
    __VLS_styleScopedClasses['custom-navigation'];
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
            Navigation: modules_1.Navigation,
            Autoplay: modules_1.Autoplay,
            MainSliderCard: MainSliderCard_vue_1.default,
            uniqueId: uniqueId,
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
