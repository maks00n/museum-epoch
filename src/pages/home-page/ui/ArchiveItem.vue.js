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
var ArchiveSlider_vue_1 = require("./ArchiveSlider.vue");
var VideoSlider_vue_1 = require("./VideoSlider.vue");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
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
    __VLS_styleScopedClasses['shadow-1'];
    __VLS_styleScopedClasses['shadow-2'];
    __VLS_styleScopedClasses['shadow-1'];
    __VLS_styleScopedClasses['shadow-2'];
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("archive-item") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("title-wrapper title-wrapper-1") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("shadow shadow-1") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("shadow shadow-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("title-wrapper title-wrapper-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("shadow shadow-1") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("shadow shadow-2") }));
    // @ts-ignore
    [ArchiveSlider_vue_1.default,];
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(ArchiveSlider_vue_1.default, new ArchiveSlider_vue_1.default({ slides: ((['1', '2', '3', '1'])), }));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{ slides: ((['1', '2', '3', '1'])), }], __VLS_functionalComponentArgsRest(__VLS_0), false));
    // @ts-ignore
    [VideoSlider_vue_1.default,];
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(VideoSlider_vue_1.default, new VideoSlider_vue_1.default({ videos: ((['1', '2', '3', '1'])), }));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{ videos: ((['1', '2', '3', '1'])), }], __VLS_functionalComponentArgsRest(__VLS_5), false));
    __VLS_styleScopedClasses['archive-item'];
    __VLS_styleScopedClasses['title-wrapper'];
    __VLS_styleScopedClasses['title-wrapper-1'];
    __VLS_styleScopedClasses['shadow'];
    __VLS_styleScopedClasses['shadow-1'];
    __VLS_styleScopedClasses['shadow'];
    __VLS_styleScopedClasses['shadow-2'];
    __VLS_styleScopedClasses['title-wrapper'];
    __VLS_styleScopedClasses['title-wrapper-2'];
    __VLS_styleScopedClasses['shadow'];
    __VLS_styleScopedClasses['shadow-1'];
    __VLS_styleScopedClasses['shadow'];
    __VLS_styleScopedClasses['shadow-2'];
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
            ArchiveSlider: ArchiveSlider_vue_1.default,
            VideoSlider: VideoSlider_vue_1.default,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
