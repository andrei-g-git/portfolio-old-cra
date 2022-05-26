"use strict";
exports.__esModule = true;
exports.useHorizontalPanning = void 0;
var react_1 = require("react");
exports.useHorizontalPanning = function (identifier) {
    react_1.useEffect(function () {
        var element = document.getElementsByClassName(identifier)[0];
        if (!element)
            element = document.getElementById(identifier);
        panHorizontally(element, startPanning, pan, stopPanning);
    }, []);
};
var panHorizontally = function (element, startPanning, pan, stopPanning) {
    var dragObject = {
        dragging: false,
        mouseStart: 0,
        previousMousePosition: 0,
        initialOffset: 0
    };
    if (element) {
        element.addEventListener("dragstart", startPanning(element, dragObject));
        element.addEventListener("drag", pan(element, dragObject));
        element.addEventListener("dragend", stopPanning(dragObject));
    }
};
var startPanning = function (element, dragObject) {
    return function (event) {
        var o = dragObject;
        o.mouseStart = event.clientX;
        if (element)
            o.initialOffset = element.offsetLeft;
        o.dragging = true;
    };
};
var pan = function (element, dragObject) {
    return function (event) {
        event.preventDefault();
        var o = dragObject;
        var mouseNow = event.clientX;
        if (mouseNow === 0)
            mouseNow = o.previousMousePosition;
        var mouseDelta = o.mouseStart - mouseNow;
        if (o.dragging) {
            o.previousMousePosition = event.clientX;
            if (element)
                element.style.left = (o.initialOffset + mouseDelta) + "px";
        }
    };
};
var stopPanning = function (
//document: Document,
dragObject) {
    return function () {
        dragObject.dragging = false;
        // document.removeEventListener("dragstart", startPanning); so these return callbacks but aren't callbacks - and they return anonymous callbacks
        // document.removeEventListener("drag", pan);                                       which I don't know if they have constant references
    }; //if I don't clean up there may be mem leaks, hopefully only on old browsers like IE7
}; //if there are leaks I should just make the curried callbacks non-anonymous
