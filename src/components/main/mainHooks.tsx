import { useEffect } from "react";
import { NumberPayload } from "../../redux/interface/Payloads";
import { navbarItemList } from "../navbar/navbarItems";
import { Pages } from "./Pages";
import { convertViewportHeightToNumber } from "../../js/utils";

export const useScrollByActiveNavItem = (props: any /* change */) => { //too coupled
    useEffect(() => {
        let height: number = 0;
        switch(props.selectedNavItem/* activeNavItem */){
            case 0:
                height = 0; //obviously these will have to be more dynamic
                break;
            case 1: 
                height = getPageHeight(Pages.ABOUT.name);//convertViewportHeightToNumber(Pages.HOME.height);//1080;
                break;
            case 2: 
                height = getPageHeight(Pages.PROJECTS.name);//convertViewportHeightToNumber(Pages.HOME.height) + convertViewportHeightToNumber(Pages.ABOUT.height);//2160;
                break;
            case 3: 
                height = getPageHeight(Pages.CONTACT.name);//convertViewportHeightToNumber(Pages.HOME.height) + convertViewportHeightToNumber(Pages.ABOUT.height) + convertViewportHeightToNumber(Pages.PROJECTS.height);//3240;
                break;
            default:
                height = 0;
                break;
        }

        //props.toggleAutoscrolling(true); //this is way too coupled, the function shouldn't have access to the props, just some values
            //it's also async-y because it's calling a redux dispatch so it won't happen instantly
        window.scrollTo({
            top: height,
            left: 0,
            behavior: "smooth"
        });

        // setTimeout(() => { //one of these days I should learn to code without fucking setTimeout()
        //     props.toggleAutoscrolling(false)
        // },
        //     900
        // );
    },
        [/* props.activeNavItem,  */props.selectedNavItem] 
    );

};

export const scrollToActiveNavItem = (selectedNavIndex: number) => {
    let height: number = 0;
    switch(selectedNavIndex){
        case 0:
            height = 0;//convertViewportHeightToNumber(Pages.HOME.height); 
            break;
        case 1: 
            height = getPageHeight(Pages.ABOUT.name);//convertViewportHeightToNumber(Pages.HOME.height); //if I change orders this is going to break
            break;
        case 2: 
            height = getPageHeight(Pages.PROJECTS.name);//convertViewportHeightToNumber(Pages.HOME.height) + convertViewportHeightToNumber(Pages.ABOUT.height);
            break;
        case 3: 
            height = getPageHeight(Pages.CONTACT.name);//convertViewportHeightToNumber(Pages.HOME.height) + convertViewportHeightToNumber(Pages.ABOUT.height) + convertViewportHeightToNumber(Pages.PROJECTS.height);
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
            const aboutHeight = getPageHeight(Pages.ABOUT.name);
            const projectsHeight = getPageHeight(Pages.PROJECTS.name);
            const contactHeight = getPageHeight(Pages.CONTACT.name);
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

export const getPageHeight = (name: string): number => {
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