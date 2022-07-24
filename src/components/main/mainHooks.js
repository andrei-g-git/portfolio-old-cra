"use strict";
exports.__esModule = true;
exports.getPageVh = exports.getPageHeightResponsive = exports.getPageHeight = exports.useHighlightNavItemByScrollHeight = exports.scrollToActiveNavItem = exports.useScrollByActiveNavItem = void 0;
var react_1 = require("react");
var Pages_1 = require("./Pages");
var utils_1 = require("../../js/utils");
//import { ScreenType } from "../../js/navigation"; //there's no way I can test any of this if I keep adding non-injectable resources
exports.useScrollByActiveNavItem = function (props /* change */) {
    react_1.useEffect(function () {
        var height = 0;
        //const screenType = new ScreenType(480);
        switch (props.selectedNavItem) {
            case 0:
                height = 0;
                break;
            case 1:
                //height = getPageHeight(Pages.ABOUT.name);
                height = exports.getPageHeightResponsive(Pages_1.Pages.ABOUT.name, 480);
                break;
            case 2:
                //height = getPageHeight(Pages.PROJECTS.name);
                height = exports.getPageHeightResponsive(Pages_1.Pages.PROJECTS.name, 480);
                break;
            case 3:
                //height = getPageHeight(Pages.CONTACT.name);
                height = exports.getPageHeightResponsive(Pages_1.Pages.CONTACT.name, 480);
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
            //height = getPageHeight(Pages.ABOUT.name);
            height = exports.getPageHeightResponsive(Pages_1.Pages.ABOUT.name, 480);
            break;
        case 2:
            //height = getPageHeight(Pages.PROJECTS.name);
            height = exports.getPageHeightResponsive(Pages_1.Pages.PROJECTS.name, 480);
            break;
        case 3:
            //height = getPageHeight(Pages.CONTACT.name);
            height = exports.getPageHeightResponsive(Pages_1.Pages.CONTACT.name, 480);
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
    //const aboutHeight = getPageHeight(Pages.ABOUT.name);
    var aboutHeight = exports.getPageHeightResponsive(Pages_1.Pages.ABOUT.name, 480);
    //const projectsHeight = getPageHeight(Pages.PROJECTS.name);
    var projectsHeight = exports.getPageHeightResponsive(Pages_1.Pages.PROJECTS.name, 480);
    //const contactHeight = getPageHeight(Pages.CONTACT.name);
    var contactHeight = exports.getPageHeightResponsive(Pages_1.Pages.CONTACT.name, 480);
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
exports.getPageHeightResponsive = function (name, mobileBreakpoint) {
    var homeH = Pages_1.Pages.HOME.height;
    var aboutH = Pages_1.Pages.ABOUT.height;
    var projectsH = Pages_1.Pages.PROJECTS.height;
    if (window.innerWidth <= mobileBreakpoint) {
        homeH = Pages_1.Pages.HOME.mobileHeight;
        aboutH = Pages_1.Pages.ABOUT.mobileHeight;
        projectsH = Pages_1.Pages.PROJECTS.mobileHeight;
    }
    switch (name) {
        case Pages_1.Pages.HOME.name:
            return 0;
        case Pages_1.Pages.ABOUT.name:
            return utils_1.convertViewportHeightToNumber(homeH);
        case Pages_1.Pages.PROJECTS.name:
            return utils_1.convertViewportHeightToNumber(homeH) + utils_1.convertViewportHeightToNumber(aboutH);
        case Pages_1.Pages.CONTACT.name:
            return utils_1.convertViewportHeightToNumber(homeH) + utils_1.convertViewportHeightToNumber(aboutH) + utils_1.convertViewportHeightToNumber(projectsH);
        default:
            return 0;
    }
};
exports.getPageVh = function (name, mobileBreakpoint) {
    var homeVh = Pages_1.Pages.HOME.height;
    var aboutVh = Pages_1.Pages.ABOUT.height;
    var projectsVh = Pages_1.Pages.PROJECTS.height;
    var contactVh = Pages_1.Pages.CONTACT.height;
    if (window.innerWidth <= mobileBreakpoint) {
        homeVh = Pages_1.Pages.HOME.mobileHeight;
        aboutVh = Pages_1.Pages.ABOUT.mobileHeight;
        projectsVh = /* "2000px"; */ Pages_1.Pages.PROJECTS.mobileHeight;
        contactVh = Pages_1.Pages.CONTACT.mobileHeight;
    }
    console.log("window type mobile:   ", window.innerWidth <= mobileBreakpoint);
    switch (name) {
        case Pages_1.Pages.HOME.name:
            return homeVh;
        case Pages_1.Pages.ABOUT.name:
            return aboutVh;
        case Pages_1.Pages.PROJECTS.name:
            console.log("projects page vh: ", projectsVh);
            return projectsVh;
        case Pages_1.Pages.CONTACT.name:
            return contactVh;
        default:
            return "100vh";
    }
};
