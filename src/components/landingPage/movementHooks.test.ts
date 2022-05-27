import { renderHook } from "@testing-library/react";
import { useHorizontalPanning } from "./movementHooks";

describe("movementHooks", () => {
    it("whatever", () => {
        // document.body.innerHTML = `
        //     <div class="element-class"></div>
        // `; 
        let element = document.createElement("div");
        element.setAttribute("class", "element-class");
        element.setAttribute("id", "element-class");
        document.appendChild(element)

        renderHook(() => {useHorizontalPanning("element-class")});

        let mousedown = new MouseEvent("mousedown", {clientX: 10, clientY: 10});
        let mousemove = new MouseEvent("mousemove", {clientX: 110, clientY: 110});
        let mouseup = new MouseEvent("mouseup");
        //let element = (document.getElementsByClassName("element-class") as HTMLCollectionOf<HTMLElement>)[0];

        element.dispatchEvent(mousedown);
        element.dispatchEvent(mousemove);
        element.dispatchEvent(mouseup);
        //expect(element.offsetLeft).toBe(9999);
        expect(element.style.left).toBe("9999px");
    });
});