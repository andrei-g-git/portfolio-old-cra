import {useEffect} from "react";


export const useCharacterEntrance = (animationAction: Function) => {
    useEffect(() => {
        setTimeout(() => {
            animationAction(animations[/* "leaning" */"turning"]);
    
            setTimeout(() => {
                animationAction(animations[/* "idling" */"restingArms"]);

                setTimeout(() => {
                    animationAction(animations["idling"])
                }, 
                    500
                );
            },
                500
            );
        },
            2200
        );
    },
        []
    );
};

export const getCharacterAnimationUri = (index: number): string => {
    switch(index){
        case 0:
            //return require("../../assets/img/testChar1.gif");
            return require("../../assets/img/walking-left.gif");
        case 1:
            //return require("../../assets/img/testCharIdle1.gif");
            return require("../../assets/img/turn-forward.gif");
        case 2:
            //return require("../../assets/img/actualIdle1.gif");   
            return require("../../assets/img/rest-arms.gif");
        case 3:
            return require("../../assets/img/idling.gif");
        case 4:
            return require("../../assets/img/testlookatthing1.gif");    
        case 5:
            return require("../../assets/img/looking-right-1.gif");            
        default: 
            return "nope"
    };
};

export const animations = {
    walkingIn: 0,
    turning: 1,
    //leaning: 1,
    //idling: 2,
    restingArms: 2,
    idling: 3,
    lookingAtThing1: 4,
    lookingAtThing2: 5  
};

export const getAnimationByName = (name: string): number => {
    switch(name){
        case "walkingIn":
            return 0;
        //case "leaning":
        case "turning":
            return 1;
        //case "idling":
        case "restingArms":
            return 2;
        case "idling":
            return 3;
        case "lookingAtThing1":
            return 4;
        case "lookingAtThing2":
            return 5;     
        default: 
            return 0;                                                                   
    }
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