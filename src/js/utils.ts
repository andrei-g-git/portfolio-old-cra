export const clamp = (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max);
}; 

export const getElementByClassOrId = (identifier: string): HTMLElement | null => {
    let element: HTMLElement | null = (document.getElementsByClassName(identifier) as HTMLCollectionOf<HTMLElement>)[0];
    if(! element) element = document.getElementById(identifier);  
    return element;  
};

export const convertViewportHeightToNumber = (viewportValue: string): number => {
    let pixelNumericValue: number = 0;
    if(viewportValue.length > 0 && viewportValue.includes("vh")){
        const viewportPercent = parseInt(viewportValue.replace("vh", ""))/100; 
        pixelNumericValue = window.innerHeight * viewportPercent; //maybe I should pass the innerHeight as a value
    }

    return pixelNumericValue;
}