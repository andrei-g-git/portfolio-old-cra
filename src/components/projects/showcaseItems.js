"use strict";
exports.__esModule = true;
exports.getShowcaseItems = exports.Showcase = void 0;
var Showcase = /** @class */ (function () {
    function Showcase() {
    }
    Object.defineProperty(Showcase, "GAMESTORE", {
        get: function () {
            return {
                index: 0,
                name: "gamestore",
                url: "https://wikipedia.org"
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Showcase, "MOTORHEAD", {
        get: function () {
            return {
                index: 1,
                name: "motorhead",
                url: "duckduckgo.com"
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Showcase, "INVOICE", {
        get: function () {
            return {
                index: 2,
                name: "invoice",
                url: "startpage.com"
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Showcase, "STANDIN", {
        get: function () {
            return {
                index: 3,
                name: "standin",
                url: "piped.kavin.rocks"
            };
        },
        enumerable: false,
        configurable: true
    });
    return Showcase;
}());
exports.Showcase = Showcase;
// export const getShowcaseImagePaths = (): Map<string, string> => {
//     const imagePaths: Map<string, string> = new Map();
//     imagePaths.set
//     return ["awefawef"]
// }
exports.getShowcaseItems = function () {
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
