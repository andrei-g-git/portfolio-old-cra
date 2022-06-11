"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.uiReducer = void 0;
var actionTypes_1 = require("./actionTypes");
//import { NavItems } from "../components/navbar/navItems";
var Pages_1 = require("../components/main/Pages");
var uiEnums_1 = require("../js/uiEnums");
var initialState = {
    whatevs: 123,
    characterAnimation: 0,
    activeNavItem: Pages_1.Pages.HOME.index,
    clickedNavItem: false,
    autoScrolling: false,
    selectedNavItem: 0,
    highlightedNavItem: 0,
    scrolling: false,
    scrollDirection: uiEnums_1.Scrolling.NONE,
    darkTheme: false
};
exports.uiReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.WHATEVER:
            return __assign(__assign({}, state), { whatevs: action.payload });
        case actionTypes_1.CHARACTER_ANIMATION_CHANGED:
            return __assign(__assign({}, state), { characterAnimation: action.payload });
        case actionTypes_1.ACTIVE_NAV_ITEM_CHANGED:
            return __assign(__assign({}, state), { activeNavItem: action.payload });
        case actionTypes_1.JUST_CLICKED_NAV_ITEM:
            return __assign(__assign({}, state), { clickedNavItem: action.payload });
        case actionTypes_1.SWITCHED_AUTOSCROLL:
            return __assign(__assign({}, state), { autoScrolling: action.payload });
        case actionTypes_1.NAV_ITEM_SELECTED:
            return __assign(__assign({}, state), { selectedNavItem: action.payload });
        case actionTypes_1.NAV_ITEM_HIGHLIGHTED:
            return __assign(__assign({}, state), { highlightedNavItem: action.payload });
        case actionTypes_1.SCROLLED:
            return __assign(__assign({}, state), { scrolling: action.payload });
        case actionTypes_1.SCROLL_DIRECTION_CANGED:
            return __assign(__assign({}, state), { scrollDirection: action.payload });
        case actionTypes_1.TOGGLED_THEME:
            return __assign(__assign({}, state), { darkTheme: action.payload });
        default:
            return state;
    }
};
