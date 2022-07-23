export interface DragObject {
    dragging: boolean,
    mouseStart: number,
    previousMousePosition: number,
    initialOffset: number
};

export interface DragObjectPanzoom{
    xStart: number,
    location: String,
    left: number,
    center: number,
    right: number,
    
    //new
    farLeft: number,
    farRight: number
};

export interface DimensionsObject {
    windowWidth: number
};
export type Pan = (element: HTMLElement | null, dragObject: DragObject, dimensionsObject: DimensionsObject) => (event: MouseEvent/* DragEvent */) => void;

export type ReturnsNumber = () => number; //not using