"use strict";
exports.__esModule = true;
exports.NavItems = void 0;
var NavItems = /** @class */ (function () {
    function NavItems() {
    }
    Object.defineProperty(NavItems, "HOME", {
        get: function () {
            return {
                index: 0,
                name: "home"
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavItems, "ABOUT", {
        get: function () {
            return {
                index: 1,
                name: "about"
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavItems, "PORTFOLIO", {
        get: function () {
            return {
                index: 2,
                name: "portfolio"
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavItems, "CONTACT", {
        get: function () {
            return {
                index: 3,
                name: "contact"
            };
        },
        enumerable: false,
        configurable: true
    });
    return NavItems;
}());
exports.NavItems = NavItems;
