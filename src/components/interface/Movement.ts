export interface DragObject {
    dragging: boolean,
    mouseStart: number,
    previousMousePosition: number,
    initialOffset: number
};

export type Pan = (element: HTMLElement | null, dragObject: DragObject) => (event: MouseEvent) => void;