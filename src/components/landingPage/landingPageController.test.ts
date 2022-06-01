import {handleDoodadClick, useCharacterEntrance} from "./landingPageController";
import {renderHook} from "@testing-library/react";

describe("landingPageController", () => {
    it("i don't know...", () => {
        const anim = handleDoodadClick(changeAnim, animationsObject)(1);
        expect(anim).toBe(4);

    });

    it("changes animations after the correct durations", () =>{ //this is going to be brittle


        renderHook(() => useCharacterEntrance(changeAnim, animationsObject)) 

        expect(animationDurations[1]).toBe(2200);
        expect(animationDurations[2]).toBe(500);
        expect(animationDurations[3]).toBe(500);
    });
});

const changeAnim = (index: number) => {
    const date = new Date();
    const miliseconds = date.getMilliseconds();
    animationDurations[index] = miliseconds; //will always get index 4 and the first 4 items will be undefined
    console.log(miliseconds + "   index: " + index + "   anim durations" + animationDurations);
};

const animationDurations : number[] = [];


export interface Animation{
    index: number,
    path: string,
    duration: number,
    preceedingAnimation: string
}

const animationsObject = {
    walkingIn: <Animation> <unknown>{
        index: 0,
        path: "assets/img/walking-left.gif",
        duration: 2200,
        preceedingAnimation: "" //
    },
    turning: <Animation> <unknown>{
        index: 1,
        path: "assets/img/turn-forward.gif",
        duration: 500,
        preceedingAnimation: "walkingIn"
    },
    restingArms: <Animation> <unknown>{
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
    }
}

