"use strict";
exports.__esModule = true;
var react_1 = require("@testing-library/react");
var movementHooks_1 = require("./movementHooks");
describe("movementHooks", function () {
    it("whatever", function () {
        // document.body.innerHTML = `
        //     <div class="element-class"></div>
        // `; 
        var element = document.createElement("div");
        element.setAttribute("class", "element-class");
        element.setAttribute("id", "element-class");
        document.appendChild(element);
        react_1.renderHook(function () { movementHooks_1.useHorizontalPanning("element-class"); });
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
