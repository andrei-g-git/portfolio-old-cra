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
exports.__esModule = true;
exports.uiReducer = void 0;
var actionTypes_1 = require("./actionTypes");
var initialState = {
    whatevs: 123,
    characterAnimation: 0
};
exports.uiReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.WHATEVER:
            return __assign(__assign({}, state), { whatevs: action.payload });
        case actionTypes_1.CHARACTER_ANIMATION_CHANGED:
            return __assign(__assign({}, state), { characterAnimation: action.payload });
        default:
            return state;
    }
};
