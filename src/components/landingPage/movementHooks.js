"use strict";
exports.__esModule = true;
exports.useHorizontalPanning_onhold = exports.resizeCentered = exports.useCenteredResizing = exports.useHorizontalPanningPANZOOM = void 0;
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
            var panzoom = panzoom_1["default"](element, { disableYAxis: true, disableZoom: true, touchAction: "pan-y", animate: true, duration: 150 });
            var panning_1 = {
                amount: getHorizontalPanAmount(window.innerWidth, element.offsetWidth)
            };
            var dragObject_1 = {
                xStart: 0,
                location: "center",
                left: panning_1.amount,
                center: 0,
                right: -panning_1.amount
            };
            window.addEventListener("resize", function () {
                panning_1.amount = getHorizontalPanAmount(window.innerWidth, element ? element.offsetWidth : 0);
                dragObject_1.left = panning_1.amount;
                dragObject_1.right = -panning_1.amount;
            });
            panzoomStart(element, dragObject_1, curryGetPanX(panzoom));
            panzoomEnd(element, dragObject_1, curryGetAmountToPan(panning_1), curryGetPanX(panzoom), curryPanzoomPan(panzoom));
        }
    }, []);
};
var curryGetAmountToPan = function (panning) {
    return function () {
        return panning.amount;
    };
};
var getHorizontalPanAmount = function (windowInnerWidth, elementWidth) {
    var viewportWidth = windowInnerWidth;
    var offsetToStillSeePartOfCharacter = viewportWidth / 2;
    var amountToPan = viewportWidth - offsetToStillSeePartOfCharacter;
    var max = (elementWidth - windowInnerWidth) / 2;
    amountToPan = utils_1.clamp(amountToPan, 0, max);
    return amountToPan;
};
var panzoomStart = function (element, dragObject, getPanX) {
    element === null || element === void 0 ? void 0 : element.addEventListener("panzoomstart", function (event) {
        event.preventDefault();
        dragObject.xStart = getPanX();
        var x = getPanX();
        if ((x > dragObject.center - 5) && (x < dragObject.center + 5)) {
            dragObject.location = "center";
        }
        if ((x > dragObject.left - 5) && (x < dragObject.left + 5)) {
            dragObject.location = "left";
        }
        if ((x > dragObject.right - 5) && (x < dragObject.right + 5)) {
            dragObject.location = "right";
        }
    });
};
var panzoomEnd = function (element, dragObject, getAmountToPan, getPanX, panzoomPan) {
    element === null || element === void 0 ? void 0 : element.addEventListener("panzoomend", function (event) {
        event.preventDefault();
        var x = getPanX();
        if (Math.abs((x - dragObject.xStart)) > 10) {
            if (dragObject.location === "center") {
                if ((x - dragObject.xStart) > 10) {
                    panzoomPan(getAmountToPan(), 0);
                }
                if ((x - dragObject.xStart) < 10) {
                    panzoomPan(-getAmountToPan(), 0);
                }
            }
            else if (dragObject.location === "left") {
                if ((x - dragObject.xStart) > 10) {
                    panzoomPan(getAmountToPan(), 0);
                }
                if ((x - dragObject.xStart) < 10) {
                    panzoomPan(0, 0);
                }
            }
            else if (dragObject.location === "right") {
                if ((x - dragObject.xStart) > 10) {
                    panzoomPan(0, 0);
                }
                if ((x - dragObject.xStart) < 10) {
                    panzoomPan(-getAmountToPan(), 0);
                }
            }
        }
    });
};
var curryGetPanX = function (panzoom) {
    return function () {
        return panzoom.getPan().x;
    };
};
var curryPanzoomPan = function (panzoom) {
    return function (x, y) {
        panzoom.pan(x, y);
    };
};
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
//###########################################
//#############################################
//###############################################
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
