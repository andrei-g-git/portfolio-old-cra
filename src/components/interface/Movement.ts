export interface DragObject {
    dragging: boolean,
    mouseStart: number,
    previousMousePosition: number,
    initialOffset: number
};
export interface DimensionsObject {
    windowWidth: number
};
export type Pan = (element: HTMLElement | null, dragObject: DragObject, dimensionsObject: DimensionsObject) => (event: MouseEvent) => void;