"use strict";
exports.__esModule = true;
var landingPageController_1 = require("./landingPageController");
var animations_1 = require("./animations"); //so this is now an integration test ... I should spoof this object
describe("landingPageController", function () {
    it("i don't know...", function () {
        var anim = landingPageController_1.handleDoodadClick(changeAnim, animations_1.animations)(1);
        expect(anim).toBe(3);
    });
});
var changeAnim = function (index) {
    var abc = 123;
};
