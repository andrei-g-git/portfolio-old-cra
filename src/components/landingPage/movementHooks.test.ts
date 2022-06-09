import { renderHook } from "@testing-library/react";
import { useHorizontalPanningPANZOOM } from "./movementHooks";

describe("movementHooks", () => {
    it("whatever", () => { 
        let element = document.createElement("div");
        element.setAttribute("class", "element-class");
        element.setAttribute("id", "element-class");
        document.appendChild(element)

        //renderHook(() => {useHorizontalPanningPANZOOM("element-class")}); //this is the oldUseHorizontalPanningPANZOOM
        renderHook(() => {useHorizontalPanningPANZOOM("element-class", 1000)}); //with panzoom, test will probably fail

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