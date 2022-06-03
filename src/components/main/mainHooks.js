"use strict";
exports.__esModule = true;
exports.useHighlightNavItemByScrollHeight = exports.highlightNavItemByScrollHeight = exports.scrollToActiveNavItem = exports.useScrollByActiveNavItem = void 0;
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
        window.scrollTo({
            top: height,
            left: 0,
            behavior: "smooth"
        });
    }, [props.activeNavItem, props.clickedNavItem]);
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
exports.highlightNavItemByScrollHeight = function (changeActiveNavitem) {
    document.addEventListener("scroll", function () {
        var height = window.scrollY;
        if (height >= 0 && height < 1080) {
            changeActiveNavitem(0); //this assumes nav items are always ordered the right way, I have to change how I store the nav items
        }
        if (height >= 1080 && height < 2160) {
            changeActiveNavitem(1);
        }
        if (height >= 2160 && height < 3240) {
            changeActiveNavitem(2);
        }
        if (height >= 3240 && height < 4320) {
            changeActiveNavitem(3);
        }
    });
};
exports.useHighlightNavItemByScrollHeight = function (changeActiveNavitem) {
    react_1.useEffect(function () {
        document.addEventListener("scroll", function () {
            var height = window.scrollY;
            if (height >= 0 && height < 1080) {
                changeActiveNavitem(0); //this assumes nav items are always ordered the right way, I have to change how I store the nav items
            }
            if (height >= 1080 && height < 2160) {
                changeActiveNavitem(1);
            }
            if (height >= 2160 && height < 3240) {
                changeActiveNavitem(2);
            }
            if (height >= 3240 && height < 4320) {
                changeActiveNavitem(3);
            }
        });
    }, []);
};
