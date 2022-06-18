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
    index: number, 
    name: string, 
    description: string, 
    longDescription: string,
    frameworks: string[],
    frameworkLogos: string[],
    url: string, 
    git: string,
    image: string, 
    images: string[]
}

export const getShowcaseItems = (): ShowcaseObject[] => {
    return [
        {
            index: 0,
            name: "gamestore",
            description: "a game store client with server side",
            longDescription : `
                Et ligula ullamcorper malesuada proin libero nunc consequat. Ut lectus arcu bibendum at varius vel pharetra. Arcu risus quis varius quam quisque id. Amet aliquam id diam maecenas ultricies mi eget mauris. At consectetur lorem donec massa sapien faucibus. Vel orci porta non pulvinar neque. Consequat nisl vel pretium lectus quam id leo in. Vitae congue eu consequat ac felis. Pharetra vel turpis nunc eget lorem dolor. Aliquet nec ullamcorper sit amet risus nullam eget. Sed felis eget velit aliquet.
            `,
            frameworks: [
                "react", "bootstrap", "sass", "redux", "expressJS", "swiperjs" 
            ],
            frameworkLogos: [
                "skill-react.png",
                "skill-bootstrap.png",
                "skill-sass.png",
                "skill-redux.png",
                "skill-nodejs.png",
                "skill-swiperjs.png",
            ],
            url: "https://wikipedia.org",
            git: "https://github.com/andrei-g-git/game-store",
            image: "work-gamestore1.png",
            images: [
                "work-gamestore2.png",
                "work-gamestore3.png",
                "work-gamestore4.png",
            ]
        },
        {
            index: 1,
            name: "motorhead",
            description: "motorhead fan page, blah blah blah blah blah",
            longDescription : `
                Et ligula ullamcorper malesuada proin libero nunc consequat. Ut lectus arcu bibendum at varius vel pharetra. Arcu risus quis varius quam quisque id. Amet aliquam id diam maecenas ultricies mi eget mauris. At consectetur lorem donec massa sapien faucibus. Vel orci porta non pulvinar neque. Consequat nisl vel pretium lectus quam id leo in. Vitae congue eu consequat ac felis. Pharetra vel turpis nunc eget lorem dolor. Aliquet nec ullamcorper sit amet risus nullam eget. Sed felis eget velit aliquet.
            `,
            frameworks: [

            ],
            frameworkLogos: [

            ],
            url: "duckduckgo.com",
            git: "https://github.com/andrei-g-git/motorhead-fan-site",
            image: "work-motorhead1.png",
            images: [
                "awefawef", " ", "awefawef"
            ]
        },
        {
            index: 2,
            name: "invoice",
            description: "invoice management client for businesses, express backend",
            longDescription : `
                Et ligula ullamcorper malesuada proin libero nunc consequat. Ut lectus arcu bibendum at varius vel pharetra. Arcu risus quis varius quam quisque id. Amet aliquam id diam maecenas ultricies mi eget mauris. At consectetur lorem donec massa sapien faucibus. Vel orci porta non pulvinar neque. Consequat nisl vel pretium lectus quam id leo in. Vitae congue eu consequat ac felis. Pharetra vel turpis nunc eget lorem dolor. Aliquet nec ullamcorper sit amet risus nullam eget. Sed felis eget velit aliquet.
            `,
            frameworks: [

            ],
            frameworkLogos: [

            ],
            url: "startpage.com",
            git: "https://github.com/andrei-g-git/invoice-master",
            image: "work-invoice1.png",
            images: [
                "awefawef", " ", "awefawef"
            ]
        },
        {
            index: 3,
            name: "standin",
            description: "a browser extension featuring popup and context menu functionality",
            longDescription : `
                Et ligula ullamcorper malesuada proin libero nunc consequat. Ut lectus arcu bibendum at varius vel pharetra. Arcu risus quis varius quam quisque id. Amet aliquam id diam maecenas ultricies mi eget mauris. At consectetur lorem donec massa sapien faucibus. Vel orci porta non pulvinar neque. Consequat nisl vel pretium lectus quam id leo in. Vitae congue eu consequat ac felis. Pharetra vel turpis nunc eget lorem dolor. Aliquet nec ullamcorper sit amet risus nullam eget. Sed felis eget velit aliquet.
            `,
            frameworks: [

            ],
            frameworkLogos: [

            ],
            url: "piped.kavin.rocks",
            git: "https://github.com/andrei-g-git/standin",
            image: "work-standin1.png",
            images: [
                "awefawef", " ", "awefawef"
            ]
        }        
    ];
};