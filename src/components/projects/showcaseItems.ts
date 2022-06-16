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

export const getShowcaseItems = (): {index: number, name: string, url: string, image: string}[] => {
    return [
        {
            index: 0,
            name: "gamestore",
            url: "https://wikipedia.org",
            image: "work-gamestore1.png"
        },
        {
            index: 1,
            name: "motorhead",
            url: "duckduckgo.com",
            image: "work-motorhead1.png"
        },
        {
            index: 2,
            name: "invoice",
            url: "startpage.com",
            image: "work-invoice1.png"
        },
        {
            index: 3,
            name: "standin",
            url: "piped.kavin.rocks",
            image: "work-standin1.png"
        }        
    ];
};