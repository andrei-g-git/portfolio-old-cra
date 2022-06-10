"use strict";
exports.__esModule = true;
exports.scrollToHeight = exports.scrollHome = void 0;
exports.scrollHome = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};
exports.scrollToHeight = function (height, isSmooth) {
    if (height >= 0) {
        window.scrollTo({
            top: height,
            left: 0,
            behavior: isSmooth ? "smooth" : "auto"
        });
    }
};
