"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var layouts_1 = require("@/app/layouts");
var types_ts_1 = require("./types.ts");
exports.routes = [
    {
        path: types_ts_1.AppRoutes.HOME,
        name: 'home',
        component: function () { return Promise.resolve().then(function () { return require('@/pages/home-page'); }); },
    },
    {
        path: '/:pathMatch(.*)',
        component: function () { return Promise.resolve().then(function () { return require('@/pages/not-found'); }); },
        meta: {
            layout: layouts_1.CleanLayout,
        },
    },
];
