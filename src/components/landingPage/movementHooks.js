"use strict";
exports.__esModule = true;
exports.resizeCentered = exports.useCenteredResizing = exports.useHorizontalPanning_onhold = exports.useHorizontalPanningPANZOOM = void 0;
var react_1 = require("react");
var utils_1 = require("../../js/utils");
var panzoom_1 = require("@panzoom/panzoom");
/*
    useHorizontalPanning
 */
exports.useHorizontalPanningPANZOOM = function (identifier, maxWidth) {
    react_1.useEffect(function () {
        var element = document.getElementsByClassName(identifier)[0];
        if (element) {
            var panzoom_2 = panzoom_1["default"](element, { disableYAxis: true, disableZoom: true, touchAction: "pan-y", animate: true, duration: 150 });
            var amountToPan_1 = getHorizontalPanAmount(window.innerWidth, element.offsetWidth);
            var dragObject_1 = {
                xStart: 0,
                location: "center",
                left: amountToPan_1,
                center: 0,
                right: -amountToPan_1
            };
            window.addEventListener("resize", function () {
                amountToPan_1 = getHorizontalPanAmount(window.innerWidth, element ? element.offsetWidth : 0);
                dragObject_1.left = amountToPan_1;
                dragObject_1.right = -amountToPan_1;
            });
            element.addEventListener("panzoomstart", function (event) {
                event.preventDefault();
                dragObject_1.xStart = panzoom_2.getPan().x;
                var x = panzoom_2.getPan().x;
                if ((x > dragObject_1.center - 5) && (x < dragObject_1.center + 5)) {
                    dragObject_1.location = "center";
                }
                if ((x > dragObject_1.left - 5) && (x < dragObject_1.left + 5)) {
                    dragObject_1.location = "left";
                }
                if ((x > dragObject_1.right - 5) && (x < dragObject_1.right + 5)) {
                    dragObject_1.location = "right";
                }
            });
            element.addEventListener("panzoomend", function (event) {
                event.preventDefault();
                var x = panzoom_2.getPan().x;
                var viewportWidth = window.innerWidth;
                var overflowingAreaWidth = maxWidth - viewportWidth;
                var overflowOnEigherSide = overflowingAreaWidth / 2; //not using
                // if(x > overflowOnEigherSide) panzoom.pan(overflowOnEigherSide, 0);
                // if(x < -overflowOnEigherSide) panzoom.pan(-overflowOnEigherSide, 0);
                //console.log("x is: " + x + "     and prev x: " + dragObject.xStart)
                if (Math.abs((x - dragObject_1.xStart)) > 10) {
                    if (dragObject_1.location === "center") {
                        if ((x - dragObject_1.xStart) > 10) {
                            panzoom_2.pan(amountToPan_1, 0);
                        }
                        if ((x - dragObject_1.xStart) < 10) {
                            panzoom_2.pan(-amountToPan_1, 0);
                        }
                    }
                    else if (dragObject_1.location === "left") {
                        if ((x - dragObject_1.xStart) > 10) {
                            panzoom_2.pan(amountToPan_1, 0);
                        }
                        if ((x - dragObject_1.xStart) < 10) {
                            panzoom_2.pan(0, 0);
                        }
                    }
                    else if (dragObject_1.location === "right") {
                        if ((x - dragObject_1.xStart) > 10) {
                            panzoom_2.pan(0, 0);
                        }
                        if ((x - dragObject_1.xStart) < 10) {
                            panzoom_2.pan(-amountToPan_1, 0);
                        }
                    }
                    // if(element){
                    //     let left = element.offsetLeft;
                    //     left = clamp(left, -element.offsetWidth, 0);
                    //     element.style.left = left + "px";
                    // }
                }
                //console.log(x - dragObject.xStart + "  and prev location: " + dragObject.location)
            });
        }
    }, []);
};
var getHorizontalPanAmount = function (windowInnerWidth, elementWidth) {
    var viewportWidth = windowInnerWidth;
    var offsetToStillSeePartOfCharacter = viewportWidth / 2;
    var amountToPan = viewportWidth - offsetToStillSeePartOfCharacter;
    var max = (elementWidth - windowInnerWidth) / 2;
    amountToPan = utils_1.clamp(amountToPan, 0, max);
    return amountToPan;
};
//on hold... using panzoom library for now    
exports.useHorizontalPanning_onhold = function (identifier) {
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
