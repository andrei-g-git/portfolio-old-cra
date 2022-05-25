"use strict";
exports.__esModule = true;
var landingPageController_1 = require("./landingPageController");
describe("landingPageController", function () {
    it("i don't know...", function () {
        var anim = landingPageController_1.handleDoodadClick(changeAnim)(1);
        expect(anim).toBe(3);
    });
});
var changeAnim = function (index) {
    var abc = 123;
};
