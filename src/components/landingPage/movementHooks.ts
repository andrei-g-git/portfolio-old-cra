import { useEffect } from "react";
import { Pan, DragObject, DimensionsObject, PanObject } from "../interface/Movement";
import { clamp, getElementByClassOrId } from "../../js/utils";
import Panzoom, { PanzoomObject } from "@panzoom/panzoom";

/*
    useHorizontalPanning //
 */

let test: PanzoomObject;

export const useHorizontalPanningPANZOOM = (identifier: string, maxWidth: number): void => {
    useEffect(() => {
        let element: HTMLElement | null = (document.getElementsByClassName(identifier) as HTMLCollectionOf<HTMLElement>)[0];
        if(element){

            const panzoom = Panzoom(element, {disableYAxis: true, disableZoom: true, touchAction: "pan-y", animate: true, duration: 150});

            test = panzoom;

            const panning = {
                amount: getHorizontalPanAmount(window.innerWidth, element.offsetWidth)
            };

            const panObject = {}; 

            populatePanObject(
                panning.amount, 
                panObject, 
                clamp, 
                getAbsPanLimit(element)
            );

            window.addEventListener("resize", () => {
                panning.amount = getHorizontalPanAmount(window.innerWidth, element ? element.offsetWidth : 0);

                populatePanObject(
                    panning.amount, 
                    panObject, 
                    clamp, 
                    getAbsPanLimit(element)
                );
            });

            panzoomStart(element, /* dragObject */panObject, curryGetPanX(panzoom));

            panzoomEnd(
                element, 
                curryDragBehaviorAtLocation(
                    curryGetDragStart(panObject),
                    curryGetPanX(panzoom),
                    panObject,
                    curryPanzoomPan(panzoom)
                )
            );
        }
    },
        []
    )
};


const getAbsPanLimit = (element: HTMLElement | null): number => {
    return (element!.offsetWidth - window.innerWidth)/2;
};

//this makes no sense. when I remove the clamping, recompile, add the clamp back and recompile, the pan bug resolves itself
//but if I do it that while pressing ctrl+C and npm starting instead of watching, then the bug is present. The code is the exact same...
//I get a "compilation failed" error on the bottom bar of VScode but the program runs just fine
//in chrome debugging the bug reverts only after F5, so I guess the debugger session is tied with the previous dev server run...
const populatePanObject = (amountToPan: number, panObject: any, clamp: Function, absLimit: number): any => {
    const farLeftPan = clamp(amountToPan * 2 + window.innerWidth/2, -absLimit, absLimit);
    const farRightPan = clamp( - amountToPan * 2 - window.innerWidth/2, -absLimit, absLimit); 

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
        rightward: -amountToPan,                    
    };
    panObject.right = {
        current: -amountToPan,
        leftward: 0,
        rightward: farRightPan,
    }; 
    panObject.farLeft = {
        current: farLeftPan,
        leftward: farLeftPan,
        rightward: amountToPan
    };
    panObject.farRight = {
        current: farRightPan,
        leftward: -amountToPan,
        rightward: farRightPan, //there's a problem with this, it pans to right position instead of farRight
    };
};

const getHorizontalPanAmount = (windowInnerWidth: number, elementWidth: number): number => {
    const viewportWidth = windowInnerWidth;
    const offsetToStillSeePartOfCharacter = viewportWidth/2;
    let amountToPan = viewportWidth - offsetToStillSeePartOfCharacter;    
    const max = (elementWidth - windowInnerWidth)/2;
    amountToPan = clamp(amountToPan, 0, max); //redundant, already clamping when final pan coordinates to panObject
    return amountToPan;
};

const curryGetDragStart = (panObject: /* PanObject */any): Function => {
    return (): number => {
        return panObject.start;
    }
}

const curryDragBehaviorAtLocation = (getDragStart: Function, getPanX: Function, panObject: any/* PanObject */, panzoomPan: Function): Function => {
    return (location: keyof PanObject): boolean => {
        if(panObject.location === location){
            if((/* getPanX() */ test.getPan().x - panObject.start) > 10) {
                panzoomPan(panObject[location].leftward, 0);         console.log("end ", panObject[location].current, "     to ", panObject[location].leftward, "x: ", getPanX(), "s: ", panObject.start)
                return true;
            } else if((/* getPanX() */ test.getPan().x - panObject.start) < 10) {
                panzoomPan(panObject[location].rightward, 0);        console.log("end ", panObject[location].current, "     to ", panObject[location].rightward, "x: ", getPanX(), "s: ", panObject.start)
                return true;
            }          
        }

        return false;    
    }

}

const panzoomStart = (element: HTMLElement | null, panObject: any/* PanObject */, getPanX: Function): void => {
    element?.addEventListener("panzoomstart", (event) => {
        event.preventDefault();
        panObject.start = getPanX();
    
        const x = getPanX();
        if((x > panObject.center.current - 5) && (x < panObject.center.current + 5)){
            panObject.location = "center";
        }
        if((x > panObject.left.current - 5) && (x < panObject.left.current + 5)){
            panObject.location = "left";
        }
        if((x > panObject.right.current - 5) && (x < panObject.right.current + 5)){
            panObject.location = "right";
        }    
        if((x > panObject.farLeft.current - 5) && (x < panObject.farLeft.current + 5)){
            panObject.location = "farLeft";
        }
        if((x > panObject.farRight.current - 5) && (x < panObject.farRight.current + 5)){
            panObject.location = "farRight";
        }

        console.log("start ", panObject.location, "  val:  ", x);
    });
};

const panzoomEnd = (
    element: HTMLElement | null, 
    dragBehaviorAtLocation: Function
): void => {
    element?.addEventListener("panzoomend", (event) => {
        event.preventDefault();

        const locations = [
            "center",
            "left",
            "right",
            "farLeft",
            "farRight",
        ];

        for(let location of locations) {
            const isDraggingFromHere = dragBehaviorAtLocation(location);
            if(isDraggingFromHere) break;
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






