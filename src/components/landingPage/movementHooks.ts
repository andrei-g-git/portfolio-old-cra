import { useEffect } from "react";
import { Pan, DragObject, DimensionsObject } from "../interface/Movement";
import { clamp, getElementByClassOrId } from "../../js/utils";


/*
    useHorizontalPanning
 */
export const useHorizontalPanning = (identifier: string) => {

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

