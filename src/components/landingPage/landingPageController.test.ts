import {handleDoodadClick, useCharacterEntrance} from "./landingPageController";
import {animations} from "./animations"; //so this is now an integration test ... I should spoof this object
import React, {useEffect} from "react";

describe("landingPageController", () => {
    it("i don't know...", () => {
        const anim = handleDoodadClick(changeAnim, animations)(1);
        expect(anim).toBe(4);

    });

    it("changes animations after the correct durations", () =>{ //this is going to be brittle

        jest.spyOn(React, "useEffect")
            .mockImplementation((f) => f()); //doesn't work
        useCharacterEntrance(changeAnim, animations);

        expect(animationDurations[1]).toBe(2200);
        expect(animationDurations[2]).toBe(500);
        expect(animationDurations[3]).toBe(500);
    });
});

const changeAnim = (index: number) => {
    const date = new Date();
    const miliseconds = date.getMilliseconds();
    animationDurations[index] = miliseconds;
};

const animationDurations : number[] = [];