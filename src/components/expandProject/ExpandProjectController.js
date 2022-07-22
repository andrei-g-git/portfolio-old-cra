"use strict";
exports.__esModule = true;
exports.getDelayAndAppendToClassName = void 0;
var utils_1 = require("../../js/utils");
exports.getDelayAndAppendToClassName = function (duration) {
    var _a = getClassSecondsAndTimeoutMiliseconds(utils_1.clamp(utils_1.calcFloatToDecimal(duration, 1), 0.3, 1)), suffix = _a.suffix, delay = _a.delay;
    return {
        popupClass: " close-popup-" + suffix,
        delay: delay
    };
};
var getClassSecondsAndTimeoutMiliseconds = function (seconds) {
    if (seconds >= 1)
        seconds = Math.floor(seconds);
    var rawSuffix = seconds.toString();
    var suffix = rawSuffix;
    if (rawSuffix.includes(".")) {
        suffix = rawSuffix.replace(".", "");
        suffix += "s";
    }
    var milliseconds = seconds * 1000;
    return {
        suffix: suffix,
        delay: milliseconds
    };
};
