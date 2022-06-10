"use strict";
exports.__esModule = true;
exports.useHighlightNavItemByScrollHeight = exports.scrollToActiveNavItem = exports.useScrollByActiveNavItem = void 0;
var react_1 = require("react");
var Pages_1 = require("./Pages");
var utils_1 = require("../../js/utils");
exports.useScrollByActiveNavItem = function (props /* change */) {
    react_1.useEffect(function () {
        var height = 0;
        switch (props.selectedNavItem /* activeNavItem */) {
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
        //props.toggleAutoscrolling(true); //this is way too coupled, the function shouldn't have access to the props, just some values
        //it's also async-y because it's calling a redux dispatch so it won't happen instantly
        window.scrollTo({
            top: height,
            left: 0,
            behavior: "smooth"
        });
        // setTimeout(() => { //one of these days I should learn to code without fucking setTimeout()
        //     props.toggleAutoscrolling(false)
        // },
        //     900
        // );
    }, [/* props.activeNavItem,  */ props.selectedNavItem]);
};
exports.scrollToActiveNavItem = function (selectedNavIndex) {
    var height = 0;
    switch (selectedNavIndex) {
        case 0:
            height = 0; //convertViewportHeightToNumber(Pages.HOME.height); 
            break;
        case 1:
            height = utils_1.convertViewportHeightToNumber(Pages_1.Pages.HOME.height); //if I change orders this is going to break
            break;
        case 2:
            height = utils_1.convertViewportHeightToNumber(Pages_1.Pages.HOME.height) + utils_1.convertViewportHeightToNumber(Pages_1.Pages.ABOUT.height);
            break;
        case 3:
            height = utils_1.convertViewportHeightToNumber(Pages_1.Pages.HOME.height) + utils_1.convertViewportHeightToNumber(Pages_1.Pages.ABOUT.height) + utils_1.convertViewportHeightToNumber(Pages_1.Pages.PROJECTS.height);
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
    if (height >= 0 && height < 1080 / 2) {
        highlightNavItem(0); //this assumes nav items are always ordered the right way, I have to change how I store the nav items
    }
    if (height >= 1080 && height < 2160 - 1080 / 2) {
        highlightNavItem(1);
    }
    if (height >= 2160 && height < 3240 - 1080 / 2) {
        highlightNavItem(2);
    }
    if (height >= 3240 && height < 4320 - 1080 / 2) {
        highlightNavItem(3);
    }
};
