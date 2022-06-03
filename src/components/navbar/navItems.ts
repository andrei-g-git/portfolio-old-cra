export class NavItems {
    static get HOME(){
        return {
            index: 0,
            name: "home"
        };
    }
    static get ABOUT(){
        return {
            index: 1,
            name: "about"
        };
    }
    static get PORTFOLIO(){
        return {
            index: 2,
            name: "portfolio"
        };
    }
    static get CONTACT(){
        return {
            index: 3,
            name: "contact"
        };
    }

    static getNavItems(): String[]{
        return [
            NavItems.HOME.name,
            NavItems.ABOUT.name,
            NavItems.PORTFOLIO.name,
            NavItems.CONTACT.name
        ];
    }
}