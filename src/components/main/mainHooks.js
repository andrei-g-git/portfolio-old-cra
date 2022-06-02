"use strict";
exports.__esModule = true;
exports.scrollToActiveNavItem = exports.useScrollByActiveNavItem = void 0;
var react_1 = require("react");
exports.useScrollByActiveNavItem = function (props /* change */) {
    react_1.useEffect(function () {
        var height = 0;
        switch (props.activeNavItem) {
            case 0:
                height = 0; //obviously these will have to be more dynamic
                break;
            case 1:
                height = 1080;
                break;
            case 2:
                height = 2160;
                break;
            case 3:
                height = 3240;
                break;
            default:
                height = 0;
                break;
        }
        window.scrollTo(0, height);
    }, [props.activeNavItem]);
};
exports.scrollToActiveNavItem = function (navIndex) {
    var height = 0;
    switch (navIndex) {
        case 0:
            height = 0; //obviously these will have to be more dynamic
            break;
        case 1:
            height = 1080;
            break;
        case 2:
            height = 2160;
            break;
        case 3:
            height = 3240;
            break;
        default:
            height = 0;
            break;
    }
    window.scrollTo({
        top: height,
        left: 0,
        behavior: "smooth"
    });
};
