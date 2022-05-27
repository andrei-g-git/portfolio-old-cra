"use strict";
exports.__esModule = true;
exports.getElementByClassOrId = exports.clamp = void 0;
exports.clamp = function (value, min, max) {
    return Math.min(Math.max(value, min), max);
};
exports.getElementByClassOrId = function (identifier) {
    var element = document.getElementsByClassName(identifier)[0];
    if (!element)
        element = document.getElementById(identifier);
    return element;
};
