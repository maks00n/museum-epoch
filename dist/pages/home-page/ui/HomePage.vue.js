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
const ArchiveItem_vue_1 = __importDefault(require("./ArchiveItem.vue"));
const CollectionItem_vue_1 = __importDefault(require("./CollectionItem.vue"));
const MainSlider_vue_1 = __importDefault(require("./MainSlider.vue"));
const BottomItem_vue_1 = __importDefault(require("./BottomItem.vue"));
const ChronologyItem_vue_1 = __importDefault(require("./ChronologyItem.vue"));
const TopItem_vue_1 = __importDefault(require("./TopItem.vue"));
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
// заглушки
const epochData = [
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
const personData = [
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    // @ts-ignore
    [TopItem_vue_1.default,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(TopItem_vue_1.default, new TopItem_vue_1.default({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    [ChronologyItem_vue_1.default,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(ChronologyItem_vue_1.default, new ChronologyItem_vue_1.default({ id: ("chronology"), }));
    const __VLS_6 = __VLS_5({ id: ("chronology"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    // @ts-ignore
    [ArchiveItem_vue_1.default,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(ArchiveItem_vue_1.default, new ArchiveItem_vue_1.default({ id: ("archive"), }));
    const __VLS_11 = __VLS_10({ id: ("archive"), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    // @ts-ignore
    [CollectionItem_vue_1.default,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(CollectionItem_vue_1.default, new CollectionItem_vue_1.default({ id: ("collection"), }));
    const __VLS_16 = __VLS_15({ id: ("collection"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    // @ts-ignore
    [MainSlider_vue_1.default,];
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(MainSlider_vue_1.default, new MainSlider_vue_1.default({ title: ("Быт эпохи"), slides: ((__VLS_ctx.epochData)), isCompact: ((true)), id: ("epoch"), }));
    const __VLS_21 = __VLS_20({ title: ("Быт эпохи"), slides: ((__VLS_ctx.epochData)), isCompact: ((true)), id: ("epoch"), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    // @ts-ignore
    [MainSlider_vue_1.default,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(MainSlider_vue_1.default, new MainSlider_vue_1.default({ title: ("Персоналии"), slides: ((__VLS_ctx.personData)), isCompact: ((false)), id: ("person"), }));
    const __VLS_26 = __VLS_25({ title: ("Персоналии"), slides: ((__VLS_ctx.personData)), isCompact: ((false)), id: ("person"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    // @ts-ignore
    [BottomItem_vue_1.default,];
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(BottomItem_vue_1.default, new BottomItem_vue_1.default({}));
    const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
    __VLS_styleScopedClasses['home'];
    __VLS_styleScopedClasses['container'];
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
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
