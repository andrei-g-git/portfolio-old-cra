import { useEffect } from "react";
import { Pan, DragObject, DragObjectPanzoom, DimensionsObject, ReturnsNumber } from "../interface/Movement";
import { clamp, getElementByClassOrId } from "../../js/utils";
import Panzoom, { PanzoomObject } from "@panzoom/panzoom";

/*
    useHorizontalPanning
 */
export const useHorizontalPanningPANZOOM = (identifier: string, maxWidth: number): void => {
    useEffect(() => {
        let element: HTMLElement | null = (document.getElementsByClassName(identifier) as HTMLCollectionOf<HTMLElement>)[0];
        if(element){

            const panzoom = Panzoom(element, {disableYAxis: true, disableZoom: true, touchAction: "pan-y", animate: true, duration: 150});

            const panning = {
                amount: getHorizontalPanAmount(window.innerWidth, element.offsetWidth)
            };

            const dragObject: DragObjectPanzoom = {
                xStart: 0,
                location: "center", //should be enum, strings suck,
                left: panning.amount,
                center: 0,
                right: -panning.amount,
            };

            window.addEventListener("resize", () => {
                panning.amount = getHorizontalPanAmount(window.innerWidth, element ? element.offsetWidth : 0);
                dragObject.left = panning.amount;
                dragObject.right = -panning.amount;
            });

            panzoomStart(element, dragObject, curryGetPanX(panzoom));

            panzoomEnd(
                element, 
                dragObject, 
                curryGetAmountToPan(panning),
                curryGetPanX(panzoom), 
                curryPanzoomPan(panzoom)
            );
        }
    },
        []
    )
};

const curryGetAmountToPan = (panning: {amount: number}): Function => {
    return () => {
        return panning.amount;
    };
}

const getHorizontalPanAmount = (windowInnerWidth: number, elementWidth: number): number => {
    const viewportWidth = windowInnerWidth;
    const offsetToStillSeePartOfCharacter = viewportWidth/2;
    let amountToPan = viewportWidth - offsetToStillSeePartOfCharacter;    
    const max = (elementWidth - windowInnerWidth)/2;
    amountToPan = clamp(amountToPan, 0, max);
    return amountToPan;
};

const panzoomStart = (element: HTMLElement | null, dragObject: DragObjectPanzoom, getPanX: Function): void => {
    element?.addEventListener("panzoomstart", (event) => {
        event.preventDefault();
        dragObject.xStart = getPanX();
    
        const x = getPanX();
        if((x > dragObject.center - 5) && (x < dragObject.center + 5)){
            dragObject.location = "center";
        }
        if((x > dragObject.left - 5) && (x < dragObject.left + 5)){
            dragObject.location = "left";
        }
        if((x > dragObject.right - 5) && (x < dragObject.right + 5)){
            dragObject.location = "right";
        }    
    });
};

const panzoomEnd = (
    element: HTMLElement | null, 
    dragObject: DragObjectPanzoom, 
    getAmountToPan: Function,
    getPanX: Function, 
    panzoomPan: Function
): void => {
    element?.addEventListener("panzoomend", (event) => {
        event.preventDefault();
        const x = getPanX();

        if(Math.abs((x - dragObject.xStart)) > 10){
            if(dragObject.location === "center"){ 
                if((x - dragObject.xStart) > 10) {
                    panzoomPan(getAmountToPan(), 0);
                }
                if((x - dragObject.xStart) < 10) {
                    panzoomPan( - getAmountToPan(), 0);
                }                        
            }else if(dragObject.location === "left"){
                if((x - dragObject.xStart) > 10) {
                    panzoomPan(getAmountToPan(), 0);
                }
                if((x - dragObject.xStart) < 10) { 
                    panzoomPan(0, 0);
                }                        
            }else if(dragObject.location === "right"){
                if((x - dragObject.xStart) > 10) {
                    panzoomPan(0, 0);
                }
                if((x - dragObject.xStart) < 10) {
                    panzoomPan( - getAmountToPan(), 0);
                }                        
            }    
        }
    });
};

const curryGetPanX = (panzoom: PanzoomObject): Function => {
    return () => {
        return panzoom.getPan().x;
    }
};

const curryPanzoomPan = (panzoom: PanzoomObject): Function => {
    return (x: number, y: number) => {
        panzoom.pan(x, y);
    };
};

/* 
    useCenteredResizing
*/

export const useCenteredResizing = (element: string, maxElementWidth: number) => {
    useEffect(() => {
        resizeCentered(element, maxElementWidth);
    },
        []
    );

    window.addEventListener("resize", () => {   
        resizeCentered(element, maxElementWidth);
    });
};

export const resizeCentered = (identifier: string, maxElementWidth: number) => {
    const element = getElementByClassOrId(identifier);
    const windowWidth = window.innerWidth;
    const offset = (maxElementWidth - windowWidth) / 2;
    if(element) element.style.right = offset + "px";
};










//###########################################
//#############################################
//###############################################
//on hold... using panzoom library for now    
export const useHorizontalPanning_onhold = (identifier: string) => {

    useEffect(() => {
        let element: HTMLElement | null = (document.getElementsByClassName(identifier) as HTMLCollectionOf<HTMLElement>)[0];
        if(! element) element = document.getElementById(identifier);
        panHorizontally(
            element,
            startPanning,
            pan,
            stopPanning
        );
    },
        []
    )
};

const panHorizontally = (
    element: HTMLElement | null,
    startPanning: Pan,
    pan: Pan,
    stopPanning: (dragObject: DragObject) => () => void   
) => {

    const dragObject = {
        dragging: false,
        mouseStart: 0,
        previousMousePosition: 0,
        initialOffset: 0
    };

    const dimensionsObject = {
        windowWidth: 0
    };

    if(element){
        element.addEventListener("dragstart", startPanning(element, dragObject, dimensionsObject));
        element.addEventListener("drag", pan(element, dragObject, dimensionsObject));
        element.addEventListener("dragend", stopPanning(dragObject));        
    }

};

const startPanning = (
    element: HTMLElement | null, 
    dragObject: DragObject,
    dimensionsObject: DimensionsObject
) => {
    return (event: MouseEvent/* DragEvent */) => { //actually a /* DragEvent */ but I want to make this more universal
        console.log("started panning")
        const o = dragObject;
        o.mouseStart = event.clientX;
        if(element) o.initialOffset = element.offsetLeft;
        o.dragging = true;  
        
        dimensionsObject.windowWidth = window.innerWidth; //I could prob get away with calling this in the pan function, not sure how slow it is though
    }
};

const pan = (
    element: HTMLElement | null,
    dragObject: DragObject,
    dimensionsObject: DimensionsObject
) => {
    return (event: MouseEvent/* DragEvent */) => {
        event.preventDefault();
        const o = dragObject;
        let mouseNow = event.clientX;
        if(mouseNow === 0) mouseNow = o.previousMousePosition;
        const mouseDelta = o.mouseStart - mouseNow;
        if(o.dragging){
            o.previousMousePosition = event.clientX;
            if(element){ 
                const windowWidth = dimensionsObject.windowWidth;
                let offset = o.initialOffset + mouseDelta;
                let width = /* 1920; */ element.offsetWidth;
                const max = 0;
                const min = -width + windowWidth;

                offset = clamp(offset, min, max);
                element.style.left = offset + "px"; 

                console.log(offset);
            }   
        }         
    }
}

const stopPanning = (
    //document: Document,
    dragObject: DragObject
) => {
    return () => {
        dragObject.dragging = false;
        // document.removeEventListener("dragstart", startPanning); so these return callbacks but aren't callbacks - and they return anonymous callbacks
        // document.removeEventListener("drag", pan);                                       which I don't know if they have constant references
    }                                                                                   //if I don't clean up there may be mem leaks, hopefully only on old browsers like IE7
};                                                                                  //if there are leaks I should just make the curried callbacks non-anonymous






