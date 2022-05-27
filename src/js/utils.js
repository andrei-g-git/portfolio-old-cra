"use strict";
exports.__esModule = true;
exports.clamp = void 0;
exports.clamp = function (value, min, max) {
    return Math.min(Math.max(value, min), max);
};
