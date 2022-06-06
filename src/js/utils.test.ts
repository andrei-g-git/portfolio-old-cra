import { 
    clamp,
    calcFractionToDecimal,
    calcPercentIncrement10
} from "./utils";

describe("calcFractionToDecimal", () => {
    it("returns the correct float", () => {
        const result = calcFractionToDecimal(45.73, 80.21, 2);
        expect(result).toBe(0.57);
    });
});

describe("calcPercentIncrement10", () => {
    it("returns the correct integer", () => {
        const result = calcPercentIncrement10(45.73, 80.21);
        expect(result).toBe(60);
    })
});


