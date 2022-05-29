"use strict";
exports.__esModule = true;
var landingPageController_1 = require("./landingPageController");
var animations_1 = require("./animations"); //so this is now an integration test ... I should spoof this object
var react_1 = require("react");
describe("landingPageController", function () {
    it("i don't know...", function () {
        var anim = landingPageController_1.handleDoodadClick(changeAnim, animations_1.animations)(1);
        expect(anim).toBe(4);
    });
    it("changes animations after the correct durations", function () {
        jest.spyOn(react_1["default"], "useEffect")
            .mockImplementation(function (f) { return f(); }); //doesn't work
        landingPageController_1.useCharacterEntrance(changeAnim, animations_1.animations);
        expect(animationDurations[1]).toBe(2200);
        expect(animationDurations[2]).toBe(500);
        expect(animationDurations[3]).toBe(500);
    });
});
var changeAnim = function (index) {
    var date = new Date();
    var miliseconds = date.getMilliseconds();
    animationDurations[index] = miliseconds;
};
var animationDurations = [];
