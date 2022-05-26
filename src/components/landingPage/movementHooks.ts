import { Pan, DragObject } from "../interface/Movement";
import { useEffect } from "react";

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
    }
    if(element){
        element.addEventListener("dragstart", startPanning(element, dragObject));
        element.addEventListener("drag", pan(element, dragObject));
        element.addEventListener("dragend", stopPanning(dragObject));        
    }

};

const startPanning = (
    element: HTMLElement | null, 
    dragObject: DragObject
) => {
    return (event: MouseEvent) => { //actually a DragEvent but I want to make this more universal
        const o = dragObject;
        o.mouseStart = event.clientX;
        if(element) o.initialOffset = element.offsetLeft;
        o.dragging = true;        
    }
};

const pan = (
    element: HTMLElement | null,
    dragObject: DragObject
) => {
    return (event: MouseEvent) => {
        event.preventDefault();
        const o = dragObject;
        let mouseNow = event.clientX;
        if(mouseNow === 0) mouseNow = o.previousMousePosition;
        const mouseDelta = o.mouseStart - mouseNow;
        if(o.dragging){
            o.previousMousePosition = event.clientX;
            if(element) element.style.left = (o.initialOffset + mouseDelta) + "px"; 
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

