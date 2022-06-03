import { getJSDocReturnType } from "typescript"; //fuck is this?...
import {
    WHATEVER,
    CHARACTER_ANIMATION_CHANGED,
    ACTIVE_NAV_ITEM_CHANGED,
    JUST_CLICKED_NAV_ITEM
} from "./actionTypes";
import {
    NumberPayload
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

export const justClickedNavItem = (justClicked: boolean): {type: string, payload: boolean} => {
    return{
        type: JUST_CLICKED_NAV_ITEM,
        payload: justClicked
    };
};