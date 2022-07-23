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
            var panObject_1 = {};
            var absLimit_1 = (element.offsetWidth - window.innerWidth) / 2;
            populatePanObject(panning_1.amount, panObject_1, utils_1.clamp, absLimit_1);
            window.addEventListener("resize", function () {
                panning_1.amount = getHorizontalPanAmount(window.innerWidth, element ? element.offsetWidth : 0);
                populatePanObject(panning_1.amount, panObject_1, utils_1.clamp, absLimit_1);
            });
            panzoomStart(element, /* dragObject */ panObject_1, curryGetPanX(panzoom));
            panzoomEnd(element, curryDragBehaviorAtLocation(curryGetDragStart(panObject_1), curryGetPanX(panzoom), panObject_1, curryPanzoomPan(panzoom)));
        }
    }, []);
};
var populatePanObject = function (amountToPan, panObject, clamp, absLimit) {
    var farLeftPan = clamp(amountToPan * 2 + window.innerWidth / 2, -absLimit, absLimit);
    var farRightPan = clamp(-amountToPan * 2 - window.innerWidth / 2, -absLimit, absLimit);
    panObject.start = 0;
    panObject.location = "center";
    panObject.left = {
        current: amountToPan,
        leftward: farLeftPan,
        rightward: 0
    };
    panObject.center = {
        current: 0,
        leftward: amountToPan,
        rightward: -amountToPan
    };
    panObject.right = {
        current: -amountToPan,
        leftward: 0,
        rightward: farRightPan
    };
    panObject.farLeft = {
        current: farLeftPan,
        leftward: farLeftPan,
        rightward: amountToPan
    };
    panObject.farRight = {
        current: farRightPan,
        leftward: -amountToPan,
        rightward: farRightPan
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
//this is actually redundant too
var clampPanningBoudaries = function (panAmount, elementWidth, clamp) {
    var absLimit = (elementWidth - window.innerWidth) / 2;
    return clamp(panAmount, -absLimit, absLimit);
};
var curryGetDragStart = function (panObject) {
    return function () {
        return panObject.start;
    };
};
var curryDragBehaviorAtLocation = function (getDragStart, getPanX, panObject /* PanObject */, panzoomPan) {
    return function (location) {
        if (panObject.location === location) {
            if ((getPanX() - panObject.start) > 10) {
                panzoomPan(panObject[location].leftward, 0);
                console.log("end ", panObject[location], "     to ", panObject[location].leftward);
                return true;
            }
            else if ((getPanX() - panObject.start) < 10) {
                panzoomPan(panObject[location].rightward, 0);
                console.log("end ", panObject[location], "     to ", panObject[location].rightward);
                return true;
            }
        }
        return false;
    };
};
var panzoomStart = function (element, panObject /* PanObject */, getPanX) {
    element === null || element === void 0 ? void 0 : element.addEventListener("panzoomstart", function (event) {
        event.preventDefault();
        panObject.start = getPanX();
        var x = getPanX();
        if ((x > panObject.center.current - 5) && (x < panObject.center.current + 5)) {
            panObject.location = "center";
        }
        if ((x > panObject.left.current - 5) && (x < panObject.left.current + 5)) {
            panObject.location = "left";
        }
        if ((x > panObject.right.current - 5) && (x < panObject.right.current + 5)) {
            panObject.location = "right";
        }
        if ((x > panObject.farLeft.current - 5) && (x < panObject.farLeft.current + 5)) {
            panObject.location = "farLeft";
        }
        if ((x > panObject.farRight.current - 5) && (x < panObject.farRight.current + 5)) {
            panObject.location = "farRight";
        }
        console.log("start ", panObject.location);
    });
};
var panzoomEnd = function (element, dragBehaviorAtLocation) {
    element === null || element === void 0 ? void 0 : element.addEventListener("panzoomend", function (event) {
        event.preventDefault();
        var locations = [
            "center",
            "left",
            "right",
            "farLeft",
            "farRight",
        ];
        for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
            var location = locations_1[_i];
            var isDraggingFromHere = dragBehaviorAtLocation(location);
            if (isDraggingFromHere)
                break;
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
