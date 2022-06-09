"use strict";
exports.__esModule = true;
var react_1 = require("@testing-library/react");
var movementHooks_1 = require("./movementHooks");
describe("movementHooks", function () {
    it("whatever", function () {
        var element = document.createElement("div");
        element.setAttribute("class", "element-class");
        element.setAttribute("id", "element-class");
        document.appendChild(element);
        //renderHook(() => {useHorizontalPanningPANZOOM("element-class")}); //this is the oldUseHorizontalPanningPANZOOM
        react_1.renderHook(function () { movementHooks_1.useHorizontalPanningPANZOOM("element-class", 1000); }); //with panzoom, test will probably fail
        var mousedown = new MouseEvent("mousedown", { clientX: 10, clientY: 10 });
        var mousemove = new MouseEvent("mousemove", { clientX: 110, clientY: 110 });
        var mouseup = new MouseEvent("mouseup");
        //let element = (document.getElementsByClassName("element-class") as HTMLCollectionOf<HTMLElement>)[0];
        element.dispatchEvent(mousedown);
        element.dispatchEvent(mousemove);
        element.dispatchEvent(mouseup);
        //expect(element.offsetLeft).toBe(9999);
        expect(element.style.left).toBe("9999px");
    });
});
