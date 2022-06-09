"use strict";
exports.__esModule = true;
exports.Scrolling = void 0;
var Scrolling = /** @class */ (function () {
    function Scrolling() {
    }
    Object.defineProperty(Scrolling, "UP", {
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrolling, "DOWN", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrolling, "NONE", {
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    return Scrolling;
}());
exports.Scrolling = Scrolling;
