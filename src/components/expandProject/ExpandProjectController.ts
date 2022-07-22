import { clamp, calcFloatToDecimal } from "../../js/utils";

export const getDelayAndAppendToClassName = (duration: number): {popupClass: string, delay: number} => {
    const {suffix, delay} = getClassSecondsAndTimeoutMiliseconds(
        clamp(
            calcFloatToDecimal(duration, 1),
            0.3,
            1
        )
    );
    return{
        popupClass: ` close-popup-${suffix}`,
        delay
    }
}

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