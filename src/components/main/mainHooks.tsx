import { useEffect } from "react";
import { NumberPayload } from "../../redux/interface/Payloads";
import { navbarItemList } from "../navbar/navbarItems";

export const useScrollByActiveNavItem = (props: any /* change */) => { //too coupled
    useEffect(() => {
        let height: number = 0;
        switch(props.selectedNavItem/* activeNavItem */){
            case 0:
                height = 0; //obviously these will have to be more dynamic
                break;
            case 1: 
                height = 1080;
                break;
            case 2: 
                height = 2160;
                break;
            case 3: 
                height = 3240;
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
            height = 0; //obviously these will have to be more dynamic
            break;
        case 1: 
            height = 1080;
            break;
        case 2: 
            height = 2160;
            break;
        case 3: 
            height = 3240;
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

const changeActiveNavItemByScrollPosition = (highlightNavItem: Function): void => {
            let height: number = window.scrollY;
            if(height >= 0 && height < 1080/2){ 
                highlightNavItem(0); //this assumes nav items are always ordered the right way, I have to change how I store the nav items
            }
            if(height >= 1080 && height < 2160 - 1080/2){
                highlightNavItem(1);
            }
            if(height >= 2160 && height < 3240 - 1080/2){
                highlightNavItem(2);
            }
            if(height >= 3240 && height < 4320 - 1080/2){
                highlightNavItem(3);
            }        
};