export const clamp = (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max);
}; 

export const getElementByClassOrId = (identifier: string): HTMLElement | null => {
    let element: HTMLElement | null = (document.getElementsByClassName(identifier) as HTMLCollectionOf<HTMLElement>)[0];
    if(! element) element = document.getElementById(identifier);  
    return element;  
};