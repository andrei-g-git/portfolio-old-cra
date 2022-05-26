// export type Pan = (event: MouseEvent) => void;

// export type StartPan = (element: HTMLElement, dragging: boolean, mouseStart: number, initialOffset: number) => Pan;

// export type Panning = (element: HTMLElement, dragging: boolean, mouseStart: number, initialOffset: number, previousMousePosition: number) => Pan;

export interface DragObject {
    dragging: boolean,
    mouseStart: number,
    previousMousePosition: number,
    initialOffset: number
};

export type Pan = (element: HTMLElement | null, dragObject: DragObject) => (event: MouseEvent) => void;