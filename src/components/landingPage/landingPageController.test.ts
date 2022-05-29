import {handleDoodadClick} from "./landingPageController";
import {animations} from "./animations"; //so this is now an integration test ... I should spoof this object

describe("landingPageController", () => {
    it("i don't know...", () => {
        const anim = handleDoodadClick(changeAnim, animations)(1);
        expect(anim).toBe(3);

    });
});

const changeAnim = (index: number) => {
    const abc = 123;
}