import {handleDoodadClick} from "./landingPageController";

describe("landingPageController", () => {
    it("i don't know...", () => {
        const anim = handleDoodadClick(changeAnim)(1);
        expect(anim).toBe(3);

    });
});

const changeAnim = (index: number) => {
    const abc = 123;
}