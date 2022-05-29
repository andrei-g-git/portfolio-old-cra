import {useEffect} from "react";
import { Animation } from "../interface/Animation";

export const animations/* ForRealThisTime */: any = {
    walkingIn: <Animation> {
        index: 0,
        path: "assets/img/walking-left.gif",
        duration: 2200,
        preceedingAnimation: "" 
    },
    turning: <Animation> {
        index: 1,
        path: "assets/img/turn-forward.gif",
        duration: 500,
        preceedingAnimation: "walkingIn"
    },
    restingArms: <Animation> {
        index: 2,
        path: "assets/img/rest-arms.gif",
        duration: 500,
        preceedingAnimation: "turning"
    },
    idling: <Animation> {
        index: 3,
        path: "assets/img/idling.gif",
        duration: 2000,
        preceedingAnimation: "restingArms"
    },
    lookingAtThing1: <Animation> {
        index: 4,
        path: "assets/img/looking-left-1.gif",
        duration: 1500,
        preceedingAnimation: "idling"
    },
    lookingAtThing2: <Animation> {
        index: 5,
        path: "assets/img/looking-right-1.gif",
        duration: 1500,
        preceedingAnimation: "idling"
    } 
};

export const useCharacterEntrance = (animationAction: Function, animationsObject: any) => {
    useEffect(() => {
        const beforeRestingArms: string = animationsObject.restingArms.preceedingAnimation;
        const beforeTurning: string = animationsObject.turning.preceedingAnimation;
        const beforeIdling: string = animationsObject.idling.preceedingAnimation;
        setTimeout(() => {
            animationAction(animations["turning"].index);
    
            setTimeout(() => {
                animationAction(animations["restingArms"].index);
                
                setTimeout(() => {
                    animationAction(animations["idling"].index)
                }, 
                    animationsObject[beforeIdling]
                        .duration
                );
            },
                animationsObject[beforeRestingArms]
                    .duration
            );
        },
            animationsObject[beforeTurning]
                .duration
        );
    },
        []
    );
};

export const getCharacterAnimationUri = (index: number, animationsObject: any, relativePathPrefix: string): string => {
    // switch(index){
    //     case 0:
    //         return require("../../assets/img/walking-left.gif");
    //     case 1:
    //         return require("../../assets/img/turn-forward.gif");
    //     case 2:
    //         return require("../../assets/img/rest-arms.gif");
    //     case 3:
    //         return require("../../assets/img/idling.gif");
    //     case 4:
    //         return require("../../assets/img/looking-left-1.gif");    
    //     case 5:
    //         return require("../../assets/img/looking-right-1.gif");            
    //     default: 
    //         return "nope"
    // };

    let path: string = "";//relativePathPrefix;
    for(const [name, animation] of Object.entries(animationsObject)){
        if((<Animation>animation).index === index){
            path += (<Animation>animation).path; 
            break;
        }
    }
    return require(`../../${path}`); //if I concat the relative suffix dynamically it returns a cannot find module error ... luckily I'm only running animations in the same tsx file so ../../will work for now
};

// export const animations = {
//     walkingIn: 0,
//     turning: 1,
//     restingArms: 2,
//     idling: 3,
//     lookingAtThing1: 4,
//     lookingAtThing2: 5  
// };

export const getAnimationByName = (name: string, animationsObject: any): number => {
    // switch(name){
    //     case "walkingIn":
    //         return 0;
    //     case "turning":
    //         return 1;
    //     case "restingArms":
    //         return 2;
    //     case "idling":
    //         return 3;
    //     case "lookingAtThing1":
    //         return 4;
    //     case "lookingAtThing2":
    //         return 5;     
    //     default: 
    //         return 0;                                                                   
    // }
    return animationsObject[name].index;
};

export const getAnimationByDoodadNumber = (index: number) : number => {
    switch(index){
        case 1:
            return 4;
        case 2:
            return 5;
        default: 
            return 4;
    }
};