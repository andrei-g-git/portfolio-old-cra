import { getJSDocReturnType } from "typescript"; //fuck is this?...
import {
    WHATEVER,
    CHARACTER_ANIMATION_CHANGED,
    ACTIVE_NAV_ITEM_CHANGED,
    JUST_CLICKED_NAV_ITEM,
    SWITCHED_AUTOSCROLL,
    NAV_ITEM_HIGHLIGHTED,
    NAV_ITEM_SELECTED,
    SCROLLED,
    SCROLL_DIRECTION_CANGED,
    TOGGLED_THEME,
    TOGGLED_SHOWCASE_MODAL,
    SELECTED_SHOWCASE_ITEM
} from "./actionTypes";
import {
    NumberPayload,
    BooleanPayload
} from "./interface/Payloads";

export const whatever = (value: number): NumberPayload => {
    return{
        type: WHATEVER,
        payload: value
    };
};

export const characterAnimationChanged = (index: number): NumberPayload => {
    return{
        type: CHARACTER_ANIMATION_CHANGED,
        payload: index
    };
};

export const activeNavItemChanged = (navIndex: number): NumberPayload => {
    return{
        type: ACTIVE_NAV_ITEM_CHANGED,
        payload: navIndex
    };
};

export const justClickedNavItem = (justClicked: boolean): BooleanPayload => {
    return{
        type: JUST_CLICKED_NAV_ITEM,
        payload: justClicked
    };
};

export const switchedAutoscroll = (autoScrolling: boolean): BooleanPayload => {
    return{
        type: SWITCHED_AUTOSCROLL,
        payload: autoScrolling
    };    
};

export const navItemHighlighted = (navIndex: number): NumberPayload => {
    return{
        type: NAV_ITEM_HIGHLIGHTED,
        payload: navIndex
    };
};

export const navItemSelected = (navIndex: number): NumberPayload => {
    return{
        type: NAV_ITEM_SELECTED,
        payload: navIndex
    };
};

export const scrolled = (isScrolling: boolean): BooleanPayload => {
    return{
        type: SCROLLED,
        payload: isScrolling
    };
};

export const scrollDirectionChanged = (scrollDirection: number): NumberPayload => {
    return{
        type: SCROLL_DIRECTION_CANGED,
        payload: scrollDirection
    };
};

export const toggledTheme = (isDark: boolean): BooleanPayload => {
    return{
        type: TOGGLED_THEME,
        payload: isDark
    };
};

export const toggledShowcaseModal = (showcasing: boolean): BooleanPayload => {
    return{
        type: TOGGLED_SHOWCASE_MODAL,
        payload: showcasing
    };
};

export const selectedShowcaseItem = (selectedItem: number): NumberPayload => {
    return{
        type: SELECTED_SHOWCASE_ITEM,
        payload: selectedItem
    };
};