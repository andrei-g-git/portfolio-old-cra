export interface DragObject {
    dragging: boolean,
    mouseStart: number,
    previousMousePosition: number,
    initialOffset: number
};

export interface DragObjectPanzoom{
    xStart: number/*  | null */,
    location: String/*  | null */,
    left: number/*  | null */,
    center: number/*  | null */,
    right: number/*  | null */,
    
    //new
    farLeft: number,
    farRight: number
};

export interface PositionProperties{
    current: number,
    leftward: number,
    rightward: number      
}
export interface PanObject{
    start: number,
    location: String,
    left: PositionProperties,
    center: PositionProperties,
    right: PositionProperties, 
    farLeft: PositionProperties,
    farRight: PositionProperties    
}

export interface DimensionsObject {
    windowWidth: number
};
export type Pan = (element: HTMLElement | null, dragObject: DragObject, dimensionsObject: DimensionsObject) => (event: MouseEvent/* DragEvent */) => void;

export type ReturnsNumber = () => number; //not using