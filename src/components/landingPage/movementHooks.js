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
            var dragObject = {
                xStart: 0,
                location: "center",
                left: panning_1.amount,
                center: 0,
                right: -panning_1.amount,
                //new
                farLeft: panning_1.amount * 2 + window.innerWidth / 2,
                farRight: -panning_1.amount * 2 - window.innerWidth / 2
            };
            // const panObject: any/* PanObject */ = {
            //     start: 0,
            //     location: "center",
            //     left: {
            //         current: panning.amount,
            //         leftward: panning.amount * 2 + window.innerWidth/2,
            //         rightward: 0
            //     },
            //     center: {
            //         current: 0,
            //         leftward: panning.amount,
            //         rightward: -panning.amount,                    
            //     },
            //     right: {
            //         current: -panning.amount,
            //         leftward: 0,
            //         rightward: - panning.amount * 2 - window.innerWidth/2
            //     }, 
            //     farLeft: {
            //         current: panning.amount * 2 + window.innerWidth/2,
            //         leftward: panning.amount * 2 + window.innerWidth/2,
            //         rightward: panning.amount
            //     },
            //     farRight: {
            //         current: - panning.amount * 2 - window.innerWidth/2,
            //         leftward: -panning.amount,
            //         rightward: - panning.amount * 2 - window.innerWidth/2 
            //     }
            // };
            var panObject_1 = {};
            var populatePanObject_1 = function (amountToPan, panObject) {
                panObject.start = 0;
                panObject.location = "center";
                panObject.left = {
                    current: amountToPan,
                    leftward: amountToPan * 2 + window.innerWidth / 2,
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
                    rightward: -amountToPan * 2 - window.innerWidth / 2
                };
                panObject.farLeft = {
                    current: amountToPan * 2 + window.innerWidth / 2,
                    leftward: amountToPan * 2 + window.innerWidth / 2,
                    rightward: amountToPan
                };
                panObject.farRight = {
                    current: -amountToPan * 2 - window.innerWidth / 2,
                    leftward: -amountToPan,
                    rightward: -amountToPan * 2 - window.innerWidth / 2
                };
            };
            populatePanObject_1(panning_1.amount, panObject_1);
            window.addEventListener("resize", function () {
                panning_1.amount = getHorizontalPanAmount(window.innerWidth, element ? element.offsetWidth : 0);
                // dragObject.left = panning.amount;
                // dragObject.right = -panning.amount;
                // //new
                // dragObject.farLeft = panning.amount * 2 + window.innerWidth/2;
                // dragObject.farRight = - panning.amount * 2 - window.innerWidth/2;
                populatePanObject_1(panning_1.amount, panObject_1);
            });
            panzoomStart(element, /* dragObject */ panObject_1, curryGetPanX(panzoom));
            panzoomEnd(element, dragObject, curryGetAmountToPan(panning_1), curryGetPanX(panzoom), curryPanzoomPan(panzoom), curryDragBehaviorAtLocation(curryGetDragStart(panObject_1), curryGetPanX(panzoom), panObject_1, curryPanzoomPan(panzoom)));
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
//    ###    NEED TO ADD 2 MORE LOCATIONS     ###
//    ###    clamping should only depend on not going ove the edge
//    ###    try to replace as much of the branching with an object with comprehensive properties, maybe some of them would be functions
//    ###    figure out if there's an equation to all this to not need any branching
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
// const curryDragBehaviorAtLocation = (dragStart: number, dragObject: DragObjectPanzoom, panzoomPan: Function): Function => {
//     return (location: string, leftRelativeLocation: keyof DragObjectPanzoom, rightRelativeLocation: keyof DragObjectPanzoom, currentX: number): void => {
//         if((currentX - dragStart) > 10) {
//             panzoomPan(dragObject[leftRelativeLocation], 0);
//         }
//         if((currentX - dragStart) < 10) {
//             panzoomPan(dragObject[rightRelativeLocation], 0);
//         }         
//     }
// }
var panzoomStart = function (element, /* dragObject: DragObjectPanzoom */ panObject /* PanObject */, getPanX) {
    element === null || element === void 0 ? void 0 : element.addEventListener("panzoomstart", function (event) {
        event.preventDefault();
        //dragObject.xStart = getPanX();
        panObject.start = getPanX();
        var x = getPanX();
        if ((x > /* dragObject.center */ panObject.center.current - 5) && (x < /* dragObject.center */ panObject.center.current + 5)) {
            //dragObject.location = "center";
            panObject.location = "center";
        }
        if ((x > /* dragObject.left */ panObject.left.current - 5) && (x < /* dragObject.left */ panObject.left.current + 5)) {
            //dragObject.location = "left";
            panObject.location = "left";
        }
        if ((x > /* dragObject.right */ panObject.right.current - 5) && (x < /* dragObject.right */ panObject.right.current + 5)) {
            //dragObject.location = "right";
            panObject.location = "right";
        }
        //new
        if ((x > /* dragObject.farLeft */ panObject.farLeft.current - 5) && (x < /* dragObject.farLeft */ panObject.farLeft.current + 5)) {
            //dragObject.location = "farLeft";
            panObject.location = "farLeft";
        }
        if ((x > /* dragObject.farRight */ panObject.farRight.current - 5) && (x < /* dragObject.farRight */ panObject.farRight.current + 5)) {
            //dragObject.location = "farRight";
            panObject.location = "farRight";
        }
        console.log("start ", panObject.location);
    });
};
var panzoomEnd = function (element, dragObject, getAmountToPan, getPanX, panzoomPan, dragBehaviorAtLocation) {
    element === null || element === void 0 ? void 0 : element.addEventListener("panzoomend", function (event) {
        event.preventDefault();
        var x = getPanX();
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
        // if(Math.abs((x - dragObject.xStart)) > 10){ //???
        //     if(dragObject.location === "center"){ 
        //         if((x - dragObject.xStart) > 10) {
        //             panzoomPan(getAmountToPan(), 0);
        //         }
        //         if((x - dragObject.xStart) < 10) {
        //             panzoomPan( - getAmountToPan(), 0);
        //         }                        
        //     }else if(dragObject.location === "left"){
        //         if((x - dragObject.xStart) > 10) {
        //             panzoomPan(getAmountToPan() * 2 + window.innerWidth/2, 0);
        //         }
        //         if((x - dragObject.xStart) < 10) { 
        //             panzoomPan(0, 0);
        //         }                        
        //     }else if(dragObject.location === "right"){
        //         if((x - dragObject.xStart) > 10) {
        //             panzoomPan(0, 0);
        //         }
        //         if((x - dragObject.xStart) < 10) {
        //             panzoomPan( - getAmountToPan() * 2 - window.innerWidth/2, 0);
        //         }                        
        //     }  
        //     //new
        //      else if(dragObject.location === "farLeft"){
        //         if((x - dragObject.xStart) > 10) {
        //             panzoomPan(getAmountToPan() * 2 + window.innerWidth/2, 0);                   
        //         }
        //         if((x - dragObject.xStart) < 10) {
        //            //panzoomPan(0, 0); //these aren't relative
        //            panzoomPan(getAmountToPan(), 0);
        //         }                        
        //     }else if(dragObject.location === "farRight"){
        //         if((x - dragObject.xStart) > 10) {
        //             //panzoomPan(0, 0);
        //             panzoomPan( - getAmountToPan(), 0);
        //         }
        //         if((x - dragObject.xStart) < 10) {
        //             panzoomPan( - getAmountToPan() - window.innerWidth/2, 0);
        //         }                        
        //     }            
        // }
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
