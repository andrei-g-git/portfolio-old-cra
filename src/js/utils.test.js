"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
describe("calcFractionToDecimal", function () {
    it("returns the correct float", function () {
        var result = utils_1.calcFractionToDecimal(45.73, 80.21, 2);
        expect(result).toBe(0.57);
    });
});
describe("calcPercentIncrement10", function () {
    it("returns the correct integer", function () {
        var result = utils_1.calcPercentIncrement10(45.73, 80.21);
        expect(result).toBe(60);
    });
});
