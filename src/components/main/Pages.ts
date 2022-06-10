export class Pages { // should probably use a map, it's ordered and getting values by string isn't that bad...
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
    static get PROJECTS(){
        return {
            index: 2,
            name: "projects",//"portfolio",
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
            Pages.PROJECTS.name,
            Pages.CONTACT.name ///////
        ];
    }
}