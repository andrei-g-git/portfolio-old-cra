import {useEffect, useState} from "react";
import { clamp, calcFloatToDecimal } from "../../js/utils";

export const useClosePopupClass = (duration: number, waitedObject: {waited: boolean}): {popupClass: string, delay: number} => { //UNIT TEST

    //const [classAndDelay, setClassAndDelay] = useState({popupClass: "", delay: 0});
    const classAndDelay = {
        popupClass: "", 
        delay: 0
    };

    const {suffix, delay} = getClassSecondsAndTimeoutMiliseconds(
        clamp(
            calcFloatToDecimal(duration, 1),
            0.3,
            1
        )
    );
    let popupClass = "";
    //useEffect(() => {
        //if(waitedObject.waited){ //this is too coupled
            popupClass = ` close-popup-${suffix}`;
            classAndDelay.popupClass = popupClass;
            classAndDelay.delay = delay;
            // setClassAndDelay({
            //     ...classAndDelay,
            //     popupClass: popupClass,
            //     delay: delay
            // })
        //}
    //},
        /* [waitedObject.waited] */
    //);

    // return{
    //     popupClass: popupClass,
    //     delay: delay
    // };  

    
    return classAndDelay;  
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