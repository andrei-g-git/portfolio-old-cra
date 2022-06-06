"use strict";
exports.__esModule = true;
exports.calcPercentIncrement10 = exports.calcFractionToDecimal = exports.convertToPixels = exports.convertViewportHeightToNumber = exports.getElementByClassOrId = exports.clamp = void 0;
exports.clamp = function (value, min, max) {
    return Math.min(Math.max(value, min), max);
};
exports.getElementByClassOrId = function (identifier) {
    var element = document.getElementsByClassName(identifier)[0];
    if (!element)
        element = document.getElementById(identifier);
    return element;
};
exports.convertViewportHeightToNumber = function (viewportValue) {
    var pixelNumericValue = 0;
    if (viewportValue.length > 0 && viewportValue.includes("vh")) {
        var viewportPercent = parseInt(viewportValue.replace("vh", "")) / 100;
        pixelNumericValue = window.innerHeight * viewportPercent; //maybe I should pass the innerHeight as a value
    }
    return pixelNumericValue;
};
exports.convertToPixels = function (value, altValue) {
    var pixelValue = altValue;
    if (value && typeof value === "number") {
        pixelValue = value + "px";
    }
    return pixelValue;
};
exports.calcFractionToDecimal = function (numerator, max, decimals) {
    var fraction = numerator / max;
    return parseFloat(fraction.toFixed(decimals));
};
exports.calcPercentIncrement10 = function (numerator, max) {
    var fraction = numerator / max;
    var withTwoDecimals = parseFloat(fraction.toFixed(2));
    var forRounding = withTwoDecimals * 10;
    var rounded = Math.round(forRounding);
    return rounded * 10;
};
