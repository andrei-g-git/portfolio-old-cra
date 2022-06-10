"use strict";
exports.__esModule = true;
exports.useReRenderWhenScrollToPage = exports.useScrollDirection = exports.useScrollCheck = void 0;
var react_1 = require("react");
var uiEnums_1 = require("../../js/uiEnums");
var Pages_1 = require("../main/Pages");
var utils_1 = require("../../js/utils");
exports.useScrollCheck = function (toggleScrolling) {
    react_1.useEffect(function () {
        var timer = null;
        window.addEventListener("scroll", function () {
            // toggleScrolling(true);
            // if(timer !== null) {
            //     clearTimeout(timer);        
            // }
            // timer = setTimeout(() => {
            //     toggleScrolling(false);
            // }, 
            //     150
            // );
            timer = utils_1.toggleWithTimer(timer, 150, toggleScrolling, true);
        });
    }, []);
};
exports.useScrollDirection = function (changeScrollDirection, toggleScrolling) {
    react_1.useEffect(function () {
        var lastScrollTop = 0;
        var timer = null;
        window.addEventListener("scroll", function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                changeScrollDirection(uiEnums_1.Scrolling.DOWN);
            }
            else {
                changeScrollDirection(uiEnums_1.Scrolling.UP);
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
            //
            toggleScrolling(true);
            if (timer !== null) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                toggleScrolling(false);
                changeScrollDirection(uiEnums_1.Scrolling.NONE);
            }, 150);
        });
    }, []);
};
exports.useReRenderWhenScrollToPage = function (uncouplePropObject) {
    var _a = react_1.useState(false), reRenderSkills = _a[0], setReRenderSkills = _a[1];
    var page = uncouplePropObject.page, scrolling = uncouplePropObject.scrolling, scrollDirection = uncouplePropObject.scrollDirection;
    react_1.useEffect(function () {
        if (scrolling) {
            if ((scrollDirection === uiEnums_1.Scrolling.DOWN && page === Pages_1.Pages.ABOUT.index) ||
                (scrollDirection === uiEnums_1.Scrolling.UP && page === Pages_1.Pages.PROJECTS.index)) {
                setReRenderSkills(true);
            }
            else {
                setReRenderSkills(false);
            }
        }
    }, [page]);
    return reRenderSkills;
};
