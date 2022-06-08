"use strict";
exports.__esModule = true;
exports.resizeCentered = exports.useCenteredResizing = exports.useHorizontalPanning = void 0;
var react_1 = require("react");
var utils_1 = require("../../js/utils");
/*
    useHorizontalPanning
 */
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
    var dimensionsObject = {
        windowWidth: 0
    };
    if (element) {
        element.addEventListener("dragstart", startPanning(element, dragObject, dimensionsObject));
        element.addEventListener("drag", pan(element, dragObject, dimensionsObject));
        element.addEventListener("dragend", stopPanning(dragObject));
    }
};
var startPanning = function (element, dragObject, dimensionsObject) {
    return function (event /* DragEvent */) {
        console.log("started panning");
        var o = dragObject;
        o.mouseStart = event.clientX;
        if (element)
            o.initialOffset = element.offsetLeft;
        o.dragging = true;
        dimensionsObject.windowWidth = window.innerWidth; //I could prob get away with calling this in the pan function, not sure how slow it is though
    };
};
var pan = function (element, dragObject, dimensionsObject) {
    return function (event /* DragEvent */) {
        event.preventDefault();
        var o = dragObject;
        var mouseNow = event.clientX;
        if (mouseNow === 0)
            mouseNow = o.previousMousePosition;
        var mouseDelta = o.mouseStart - mouseNow;
        if (o.dragging) {
            o.previousMousePosition = event.clientX;
            if (element) {
                var windowWidth = dimensionsObject.windowWidth;
                var offset = o.initialOffset + mouseDelta;
                var width = /* 1920; */ element.offsetWidth;
                var max = 0;
                var min = -width + windowWidth;
                offset = utils_1.clamp(offset, min, max);
                element.style.left = offset + "px";
                console.log(offset);
            }
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
/*
    useCenteredResizing
*/
exports.useCenteredResizing = function (element, maxElementWidth) {
    react_1.useEffect(function () {
        exports.resizeCentered(element, maxElementWidth);
    }, []);
    window.addEventListener("resize", function () {
        exports.resizeCentered(element, maxElementWidth);
    });
};
exports.resizeCentered = function (identifier, maxElementWidth) {
    var element = utils_1.getElementByClassOrId(identifier);
    var windowWidth = window.innerWidth;
    var offset = (maxElementWidth - windowWidth) / 2;
    if (element)
        element.style.right = offset + "px";
};
