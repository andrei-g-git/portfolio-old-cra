import { getJSDocReturnType } from "typescript";
import {
    WHATEVER,
    CHARACTER_ANIMATION_CHANGED
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
}