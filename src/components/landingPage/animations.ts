import { NumberPayload } from "../../redux/interface/Payloads"
import {useEffect} from "react";


export const useCharacterEntrance = (animationAction: Function) => {
    useEffect(() => {
        setTimeout(() => {
            animationAction(animations["leaning"]);
    
            setTimeout(() => {
                animationAction(animations["idling"]);
            },
                750
            );
        },
            1800
        );
    },
        []
    );
};

export const getCharacterAnimationUri = (index: number): string => {
    switch(index){
        case 0:
            return require("../../assets/img/testChar1.gif");// + "?" + Math.random().toString();
        case 1:
            return require("../../assets/img/testCharIdle1.gif");// + "?" + Math.random().toString();     
        case 2:
            return require("../../assets/img/actualIdle1.gif");       
        default: 
            return "nope"
    };
};

export const animations = {
    walkingIn: 0,
    leaning: 1,
    idling: 2,
    lookingAtThing1: 3,
    lookingAtThing2: 4  
};