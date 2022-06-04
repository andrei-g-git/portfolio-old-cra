"use strict";
exports.__esModule = true;
exports.Pages = void 0;
var Pages = /** @class */ (function () {
    function Pages() {
    }
    Object.defineProperty(Pages, "HOME", {
        get: function () {
            return {
                index: 0,
                name: "home",
                height: "100vh"
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pages, "ABOUT", {
        get: function () {
            return {
                index: 1,
                name: "about",
                height: "100vh"
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pages, "PORTFOLIO", {
        get: function () {
            return {
                index: 2,
                name: "portfolio",
                height: "100vh"
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pages, "CONTACT", {
        get: function () {
            return {
                index: 3,
                name: "contact",
                height: "100vh"
            };
        },
        enumerable: false,
        configurable: true
    });
    Pages.getNavItems = function () {
        return [
            Pages.HOME.name,
            Pages.ABOUT.name,
            Pages.PORTFOLIO.name,
            Pages.CONTACT.name ///////
        ];
    };
    return Pages;
}());
exports.Pages = Pages;
