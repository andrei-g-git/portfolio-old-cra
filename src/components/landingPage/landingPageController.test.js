"use strict";
exports.__esModule = true;
var landingPageController_1 = require("./landingPageController");
var react_1 = require("@testing-library/react");
describe("landingPageController", function () {
    it("i don't know...", function () {
        var anim = landingPageController_1.handleDoodadClick(changeAnim, animationsObject)(1);
        expect(anim).toBe(4);
    });
    it("changes animations after the correct durations", function () {
        react_1.renderHook(function () { return landingPageController_1.useCharacterEntrance(changeAnim, animationsObject); });
        expect(animationDurations[1]).toBe(2200);
        expect(animationDurations[2]).toBe(500);
        expect(animationDurations[3]).toBe(500);
    });
});
var changeAnim = function (index) {
    var date = new Date();
    var miliseconds = date.getMilliseconds();
    animationDurations[index] = miliseconds; //will always get index 4 and the first 4 items will be undefined
    console.log(miliseconds + "   index: " + index + "   anim durations" + animationDurations);
};
var animationDurations = [];
var animationsObject = {
    walkingIn: {
        index: 0,
        path: "assets/img/walking-left.gif",
        duration: 2200,
        preceedingAnimation: "" //
    },
    turning: {
        index: 1,
        path: "assets/img/turn-forward.gif",
        duration: 500,
        preceedingAnimation: "walkingIn"
    },
    restingArms: {
        index: 2,
        path: "assets/img/rest-arms.gif",
        duration: 500,
        preceedingAnimation: "turning"
    },
    idling: {
        index: 3,
        path: "assets/img/idling.gif",
        duration: 2000,
        preceedingAnimation: "restingArms"
    }
};
