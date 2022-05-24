"use strict";
exports.__esModule = true;
exports.characterAnimationChanged = exports.whatever = void 0;
var actionTypes_1 = require("./actionTypes");
exports.whatever = function (value) {
    return {
        type: actionTypes_1.WHATEVER,
        payload: value
    };
};
exports.characterAnimationChanged = function (index) {
    return {
        type: actionTypes_1.CHARACTER_ANIMATION_CHANGED,
        payload: index
    };
};
