import { Interface } from "readline";

export class Showcase{
    static get GAMESTORE(){
        return{
            index: 0,
            name: "gamestore",
            url: "https://wikipedia.org"
        };
    }

    static get MOTORHEAD(){
        return{
            index: 1,
            name: "motorhead",
            url: "duckduckgo.com"
        };
    }

    static get INVOICE(){
        return{
            index: 2,
            name: "invoice",
            url: "startpage.com"
        };
    }

    static get STANDIN(){
        return{
            index: 3,
            name: "standin",
            url: "piped.kavin.rocks"
        };
    }
}

// export const getShowcaseImagePaths = (): Map<string, string> => {
//     const imagePaths: Map<string, string> = new Map();
//     imagePaths.set
//     return ["awefawef"]
// }

export interface ShowcaseObject{
    index: number, name: string, description: string, url: string, image: string
}

export const getShowcaseItems = (): /* {index: number, name: string, description: string, url: string, image: string} */ShowcaseObject[] => {
    return [
        {
            index: 0,
            name: "gamestore",
            description: "a game store client with server side",
            url: "https://wikipedia.org",
            image: "work-gamestore1.png"
        },
        {
            index: 1,
            name: "motorhead",
            description: "motorhead fan page, blah blah blah blah blah",
            url: "duckduckgo.com",
            image: "work-motorhead1.png"
        },
        {
            index: 2,
            name: "invoice",
            description: "invoice management client for businesses, express backend",
            url: "startpage.com",
            image: "work-invoice1.png"
        },
        {
            index: 3,
            name: "standin",
            description: "a browser extension featuring popup and context menu functionality",
            url: "piped.kavin.rocks",
            image: "work-standin1.png"
        }        
    ];
};