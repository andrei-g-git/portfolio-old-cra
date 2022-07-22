"use strict";
exports.__esModule = true;
exports.useClosePopupClass = void 0;
var utils_1 = require("../../js/utils");
exports.useClosePopupClass = function (duration, waitedObject) {
    //const [classAndDelay, setClassAndDelay] = useState({popupClass: "", delay: 0});
    var classAndDelay = {
        popupClass: "",
        delay: 0
    };
    var _a = getClassSecondsAndTimeoutMiliseconds(utils_1.clamp(utils_1.calcFloatToDecimal(duration, 1), 0.3, 1)), suffix = _a.suffix, delay = _a.delay;
    var popupClass = "";
    //useEffect(() => {
    //if(waitedObject.waited){ //this is too coupled
    popupClass = " close-popup-" + suffix;
    classAndDelay.popupClass = popupClass;
    classAndDelay.delay = delay;
    // setClassAndDelay({
    //     ...classAndDelay,
    //     popupClass: popupClass,
    //     delay: delay
    // })
    //}
    //},
    /* [waitedObject.waited] */
    //);
    // return{
    //     popupClass: popupClass,
    //     delay: delay
    // };  
    return classAndDelay;
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
