export class Pages { ///
    static get HOME(){
        return {
            index: 0,
            name: "home",
            height: "100vh"
        };
    }
    static get ABOUT(){
        return {
            index: 1,
            name: "about",
            height: "100vh"
        };
    }
    static get PORTFOLIO(){
        return {
            index: 2,
            name: "portfolio",
            height: "100vh"
        };
    }
    static get CONTACT(){
        return {
            index: 3,
            name: "contact",
            height: "100vh"
        };
    }

    static getNavItems(): String[]{
        return [
            Pages.HOME.name,
            Pages.ABOUT.name,
            Pages.PORTFOLIO.name,
            Pages.CONTACT.name ///////
        ];
    }
}