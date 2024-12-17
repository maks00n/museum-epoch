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
var ArchiveItem_vue_1 = require("./ArchiveItem.vue");
var CollectionItem_vue_1 = require("./CollectionItem.vue");
var MainSlider_vue_1 = require("./MainSlider.vue");
var BottomItem_vue_1 = require("./BottomItem.vue");
var ChronologyItem_vue_1 = require("./ChronologyItem.vue");
var TopItem_vue_1 = require("./TopItem.vue");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
// заглушки
var epochData = [
    {
        name: 'название',
        photo: '/temp-epoch.png',
        description: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке укрепления моральных ценностей.'
    },
    {
        name: 'название',
        photo: '/temp-epoch.png',
        description: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке укрепления моральных ценностей.'
    },
    {
        name: 'название',
        photo: '/temp-epoch.png',
        description: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке укрепления моральных ценностей.'
    },
    {
        name: 'название',
        photo: '/temp-epoch.png',
        description: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке укрепления моральных ценностей.'
    },
    {
        name: 'название',
        photo: '/temp-epoch.png',
        description: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке укрепления моральных ценностей.'
    }
];
var personData = [
    {
        name: 'ФИО',
        photo: '/temp-person.png',
        description: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке укрепления моральных ценностей.'
    },
    {
        name: 'ФИО',
        photo: '/temp-person.png',
        description: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке укрепления моральных ценностей.'
    },
    {
        name: 'ФИО',
        photo: '/temp-person.png',
        description: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке укрепления моральных ценностей.'
    },
    {
        name: 'ФИО',
        photo: '/temp-person.png',
        description: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке укрепления моральных ценностей.'
    },
    {
        name: 'ФИО',
        photo: '/temp-person.png',
        description: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке укрепления моральных ценностей.'
    },
    {
        name: 'ФИО',
        photo: '/temp-person.png',
        description: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке укрепления моральных ценностей.'
    }
]; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("home") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("container") }));
    // @ts-ignore
    [TopItem_vue_1.default,];
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(TopItem_vue_1.default, new TopItem_vue_1.default({}));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
    // @ts-ignore
    [ChronologyItem_vue_1.default,];
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(ChronologyItem_vue_1.default, new ChronologyItem_vue_1.default({ id: ("chronology"), }));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{ id: ("chronology"), }], __VLS_functionalComponentArgsRest(__VLS_5), false));
    // @ts-ignore
    [ArchiveItem_vue_1.default,];
    // @ts-ignore
    var __VLS_10 = __VLS_asFunctionalComponent(ArchiveItem_vue_1.default, new ArchiveItem_vue_1.default({ id: ("archive"), }));
    var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([{ id: ("archive"), }], __VLS_functionalComponentArgsRest(__VLS_10), false));
    // @ts-ignore
    [CollectionItem_vue_1.default,];
    // @ts-ignore
    var __VLS_15 = __VLS_asFunctionalComponent(CollectionItem_vue_1.default, new CollectionItem_vue_1.default({ id: ("collection"), }));
    var __VLS_16 = __VLS_15.apply(void 0, __spreadArray([{ id: ("collection"), }], __VLS_functionalComponentArgsRest(__VLS_15), false));
    // @ts-ignore
    [MainSlider_vue_1.default,];
    // @ts-ignore
    var __VLS_20 = __VLS_asFunctionalComponent(MainSlider_vue_1.default, new MainSlider_vue_1.default({ title: ("Быт эпохи"), slides: ((__VLS_ctx.epochData)), isCompact: ((true)), id: ("epoch"), }));
    var __VLS_21 = __VLS_20.apply(void 0, __spreadArray([{ title: ("Быт эпохи"), slides: ((__VLS_ctx.epochData)), isCompact: ((true)), id: ("epoch"), }], __VLS_functionalComponentArgsRest(__VLS_20), false));
    // @ts-ignore
    [MainSlider_vue_1.default,];
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(MainSlider_vue_1.default, new MainSlider_vue_1.default({ title: ("Персоналии"), slides: ((__VLS_ctx.personData)), isCompact: ((false)), id: ("person"), }));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([{ title: ("Персоналии"), slides: ((__VLS_ctx.personData)), isCompact: ((false)), id: ("person"), }], __VLS_functionalComponentArgsRest(__VLS_25), false));
    // @ts-ignore
    [BottomItem_vue_1.default,];
    // @ts-ignore
    var __VLS_30 = __VLS_asFunctionalComponent(BottomItem_vue_1.default, new BottomItem_vue_1.default({}));
    var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_30), false));
    __VLS_styleScopedClasses['home'];
    __VLS_styleScopedClasses['container'];
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
            ArchiveItem: ArchiveItem_vue_1.default,
            CollectionItem: CollectionItem_vue_1.default,
            MainSlider: MainSlider_vue_1.default,
            BottomItem: BottomItem_vue_1.default,
            ChronologyItem: ChronologyItem_vue_1.default,
            TopItem: TopItem_vue_1.default,
            epochData: epochData,
            personData: personData,
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
