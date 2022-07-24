import { useEffect } from "react";
import { Pages } from "./Pages";
import { convertViewportHeightToNumber } from "../../js/utils";
//import { ScreenType } from "../../js/navigation"; //there's no way I can test any of this if I keep adding non-injectable resources

export const useScrollByActiveNavItem = (props: any /* change */) => { //too coupled
    useEffect(() => {
        let height: number = 0;
        //const screenType = new ScreenType(480);
        switch(props.selectedNavItem){
            case 0:
                height = 0;
                break;
            case 1: 
                //height = getPageHeight(Pages.ABOUT.name);
                height = getPageHeightResponsive(Pages.ABOUT.name, 480);
                break;
            case 2: 
                //height = getPageHeight(Pages.PROJECTS.name);
                height = getPageHeightResponsive(Pages.PROJECTS.name, 480);
                break;
            case 3: 
                //height = getPageHeight(Pages.CONTACT.name);
                height = getPageHeightResponsive(Pages.CONTACT.name, 480);
                break;
            default:
                height = 0;
                break;
        }

        window.scrollTo({
            top: height,
            left: 0,
            behavior: "smooth"
        });
    },
        [props.selectedNavItem] 
    );

};

export const scrollToActiveNavItem = (selectedNavIndex: number) => {
    let height: number = 0;
    switch(selectedNavIndex){
        case 0:
            height = 0;
            break;
        case 1: 
            //height = getPageHeight(Pages.ABOUT.name);
            height = getPageHeightResponsive(Pages.ABOUT.name, 480);
            break;
        case 2: 
            //height = getPageHeight(Pages.PROJECTS.name);
            height = getPageHeightResponsive(Pages.PROJECTS.name, 480);
            break;
        case 3: 
            //height = getPageHeight(Pages.CONTACT.name);
            height = getPageHeightResponsive(Pages.CONTACT.name, 480);
            break;
        default:
            height = 0;
            break;
    }

    window.scrollTo({
        top: height,
        left: 0,
        behavior: "smooth"
    });
};

export const useHighlightNavItemByScrollHeight = (highlightNavItem: Function) => {
    useEffect(() => {
        document.addEventListener("scroll", () => changeActiveNavItemByScrollPosition(highlightNavItem));
        return() => {
            document.removeEventListener("scroll", () => changeActiveNavItemByScrollPosition(highlightNavItem));
        };
    }, 
        []
    );        
};

const changeActiveNavItemByScrollPosition = (highlightNavItem: Function): void => { //this should factor in scroll direction - if down then the height si the height, if up then the height should at most be the height + 1/2
            let height: number = window.scrollY;
            //const aboutHeight = getPageHeight(Pages.ABOUT.name);
            const aboutHeight = getPageHeightResponsive(Pages.ABOUT.name, 480);
            //const projectsHeight = getPageHeight(Pages.PROJECTS.name);
            const projectsHeight = getPageHeightResponsive(Pages.PROJECTS.name, 480);
            //const contactHeight = getPageHeight(Pages.CONTACT.name);
            const contactHeight = getPageHeightResponsive(Pages.CONTACT.name, 480);

            if(height >= 0 && height < 1080/2){ 
                highlightNavItem(0); //this assumes nav items are always ordered the right way, I have to change how I store the nav items
            }
            if(height >= aboutHeight && height < 3 * aboutHeight / 2){  //height - height/2 --- halfway through the page
                highlightNavItem(1);
            }
            if(height >= projectsHeight && height < 3 * projectsHeight / 2){
                highlightNavItem(2);
            }
            if(height >= contactHeight && height < 3 * contactHeight / 2){
                highlightNavItem(3);
            }        
};

export const getPageHeight = (name: string): number => { //DRY!!
    switch(name){
        case Pages.HOME.name: 
            return 0;
        case Pages.ABOUT.name:
            return convertViewportHeightToNumber(Pages.HOME.height);
        case Pages.PROJECTS.name:
            return convertViewportHeightToNumber(Pages.HOME.height) + convertViewportHeightToNumber(Pages.ABOUT.height);
        case Pages.CONTACT.name:
            return convertViewportHeightToNumber(Pages.HOME.height) + convertViewportHeightToNumber(Pages.ABOUT.height) + convertViewportHeightToNumber(Pages.PROJECTS.height);
        default:
            return 0;
    }
}

export const getPageHeightResponsive = (name: string, mobileBreakpoint: number): number => {//DRY!!
    let homeH = Pages.HOME.height;
    let aboutH = Pages.ABOUT.height;
    let projectsH = Pages.PROJECTS.height;
    if(window.innerWidth <= mobileBreakpoint){
        homeH = Pages.HOME.mobileHeight;
        aboutH = Pages.ABOUT.mobileHeight;
        projectsH = Pages.PROJECTS.mobileHeight;        
    }

    switch(name){
        case Pages.HOME.name: 
            return 0;
        case Pages.ABOUT.name:
            return convertViewportHeightToNumber(homeH);
        case Pages.PROJECTS.name:
            return convertViewportHeightToNumber(homeH) + convertViewportHeightToNumber(aboutH);
        case Pages.CONTACT.name:
            return convertViewportHeightToNumber(homeH) + convertViewportHeightToNumber(aboutH) + convertViewportHeightToNumber(projectsH);
        default:
            return 0;
    }
}

export const getPageVh = (name: string, mobileBreakpoint: number): String => {//DRY!!
    let homeVh = Pages.HOME.height;
    let aboutVh = Pages.ABOUT.height;
    let projectsVh = Pages.PROJECTS.height;
    let contactVh = Pages.CONTACT.height;
    if(window.innerWidth <= mobileBreakpoint){
        homeVh = Pages.HOME.mobileHeight;
        aboutVh = Pages.ABOUT.mobileHeight;
        projectsVh = /* "2000px"; */Pages.PROJECTS.mobileHeight;       
        contactVh = Pages.CONTACT.mobileHeight; 
    }

    console.log("window type mobile:   ", window.innerWidth <= mobileBreakpoint)

    switch(name){
        case Pages.HOME.name: 
            return homeVh;
        case Pages.ABOUT.name:
            return aboutVh;
        case Pages.PROJECTS.name: console.log("projects page vh: ", projectsVh)
            return projectsVh;
        case Pages.CONTACT.name:
            return contactVh;
        default:
            return "100vh";
    }    
}