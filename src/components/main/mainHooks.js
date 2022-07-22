"use strict";
exports.__esModule = true;
exports.getPageHeight = exports.useHighlightNavItemByScrollHeight = exports.scrollToActiveNavItem = exports.useScrollByActiveNavItem = void 0;
var react_1 = require("react");
var Pages_1 = require("./Pages");
var utils_1 = require("../../js/utils");
exports.useScrollByActiveNavItem = function (props /* change */) {
    react_1.useEffect(function () {
        var height = 0;
        switch (props.selectedNavItem) {
            case 0:
                height = 0;
                break;
            case 1:
                height = exports.getPageHeight(Pages_1.Pages.ABOUT.name);
                break;
            case 2:
                height = exports.getPageHeight(Pages_1.Pages.PROJECTS.name);
                break;
            case 3:
                height = exports.getPageHeight(Pages_1.Pages.CONTACT.name);
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
    }, [props.selectedNavItem]);
};
exports.scrollToActiveNavItem = function (selectedNavIndex) {
    var height = 0;
    switch (selectedNavIndex) {
        case 0:
            height = 0;
            break;
        case 1:
            height = exports.getPageHeight(Pages_1.Pages.ABOUT.name);
            break;
        case 2:
            height = exports.getPageHeight(Pages_1.Pages.PROJECTS.name);
            break;
        case 3:
            height = exports.getPageHeight(Pages_1.Pages.CONTACT.name);
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
exports.useHighlightNavItemByScrollHeight = function (highlightNavItem) {
    react_1.useEffect(function () {
        document.addEventListener("scroll", function () { return changeActiveNavItemByScrollPosition(highlightNavItem); });
        return function () {
            document.removeEventListener("scroll", function () { return changeActiveNavItemByScrollPosition(highlightNavItem); });
        };
    }, []);
};
var changeActiveNavItemByScrollPosition = function (highlightNavItem) {
    var height = window.scrollY;
    var aboutHeight = exports.getPageHeight(Pages_1.Pages.ABOUT.name);
    var projectsHeight = exports.getPageHeight(Pages_1.Pages.PROJECTS.name);
    var contactHeight = exports.getPageHeight(Pages_1.Pages.CONTACT.name);
    if (height >= 0 && height < 1080 / 2) {
        highlightNavItem(0); //this assumes nav items are always ordered the right way, I have to change how I store the nav items
    }
    if (height >= aboutHeight && height < 3 * aboutHeight / 2) { //height - height/2 --- halfway through the page
        highlightNavItem(1);
    }
    if (height >= projectsHeight && height < 3 * projectsHeight / 2) {
        highlightNavItem(2);
    }
    if (height >= contactHeight && height < 3 * contactHeight / 2) {
        highlightNavItem(3);
    }
};
exports.getPageHeight = function (name) {
    switch (name) {
        case Pages_1.Pages.HOME.name:
            return 0;
        case Pages_1.Pages.ABOUT.name:
            return utils_1.convertViewportHeightToNumber(Pages_1.Pages.HOME.height);
        case Pages_1.Pages.PROJECTS.name:
            return utils_1.convertViewportHeightToNumber(Pages_1.Pages.HOME.height) + utils_1.convertViewportHeightToNumber(Pages_1.Pages.ABOUT.height);
        case Pages_1.Pages.CONTACT.name:
            return utils_1.convertViewportHeightToNumber(Pages_1.Pages.HOME.height) + utils_1.convertViewportHeightToNumber(Pages_1.Pages.ABOUT.height) + utils_1.convertViewportHeightToNumber(Pages_1.Pages.PROJECTS.height);
        default:
            return 0;
    }
};
