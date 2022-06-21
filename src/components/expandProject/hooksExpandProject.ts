import {useState, useEffect} from "react";
import { clamp, calcFloatToDecimal } from "../../js/utils";

export const useClosePopupClass = (duration: number, waitedObject: {waited: boolean}): {popupClass: string, delay: number} => { //UNIT TEST

    const {suffix, delay} = getClassSecondsAndTimeoutMiliseconds(
        clamp(
            calcFloatToDecimal(duration, 1),
            0.3,
            1
        )
    );
    let popupClass = "";
    useEffect(() => {
        if(waitedObject.waited){ //this is too coupled
            popupClass = ` close-popup-${suffix}`;
        }
    },
        [waitedObject.waited]
    );

    return{
        popupClass: popupClass,
        delay: delay
    };    
};

const getClassSecondsAndTimeoutMiliseconds = (seconds: number): {suffix: string, delay: number} => {
    if(seconds >= 1) seconds = Math.floor(seconds);
    const rawSuffix = seconds.toString();
    let suffix = rawSuffix;
    if(rawSuffix.includes(".")) {
        suffix = rawSuffix.replace(".", "");
        suffix += "s";
    }
    const milliseconds = seconds * 1000;

    return{
        suffix: suffix,
        delay: milliseconds
    };
};