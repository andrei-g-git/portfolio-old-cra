"use strict";
exports.__esModule = true;
exports.useClosePopupClass = void 0;
var react_1 = require("react");
var utils_1 = require("../../js/utils");
exports.useClosePopupClass = function (duration, waitedObject) {
    var _a = getClassSecondsAndTimeoutMiliseconds(utils_1.clamp(utils_1.calcFloatToDecimal(duration, 1), 0.3, 1)), suffix = _a.suffix, delay = _a.delay;
    var popupClass = "";
    react_1.useEffect(function () {
        if (waitedObject.waited) { //this is too coupled
            popupClass = " close-popup-" + suffix;
        }
    }, [waitedObject.waited]);
    return {
        popupClass: popupClass,
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
