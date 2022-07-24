export const scrollHome = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};

export const scrollToHeight = (height: number, isSmooth: boolean) => {
    if(height >= 0){
        window.scrollTo({
            top: height,
            left: 0,
            behavior: isSmooth? "smooth" : "auto"
        });
    }
};

export class ScreenType{
    mobile: number;
    constructor(mobileWidth: number){
        this.mobile = mobileWidth;
    }

    forMobile = (window: Window): boolean => {
        return window.innerHeight <= this.mobile;
    }    
}

export class PortHeight{ //nope, I need to pass names, too, constructor would be way to complicated
    desktopHeights: string[];
    mobileHeights: string[];
    constructor(desktopHeights: string[], mobileHeights: string[]){
        this.desktopHeights = desktopHeights;
        this.mobileHeights = mobileHeights;
    }

    getPageHeightResponsive = (name: string, mobileBreakpoint: number): number => { //nope not using
        let heights = this.desktopHeights;
        if(window.innerWidth <= mobileBreakpoint){
            heights = this.mobileHeights;
        }
        const numericHeights = heights.map(height => this.convertViewportHeightToNumber(height));

        return this.determineHeight(name, heights);
    }

    determineHeight(name: string, heights: String[]): number{ //nope not using
        return 123;
    }        

    convertViewportHeightToNumber = (viewportValue: string): number => {
        let pixelNumericValue: number = 0;
        if(viewportValue.length > 0 && viewportValue.includes("vh")){
            const viewportPercent = parseInt(viewportValue.replace("vh", ""))/100; 
            pixelNumericValue = window.innerHeight * viewportPercent; //maybe I should pass the innerHeight as a value
        }
        return pixelNumericValue;
    };
}