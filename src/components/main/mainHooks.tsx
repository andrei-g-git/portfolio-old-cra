import { useEffect } from "react";
import { NumberPayload } from "../../redux/interface/Payloads";
import { navbarItemList } from "../navbar/navbarItems";

export const useScrollByActiveNavItem = (props: any /* change */) => { //this doesn't work, useEffect has to be called inside the component
    useEffect(() => {
        let height: number = 0;
        switch(props.activeNavItem){
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
    },
        [props.activeNavItem, props.clickedNavItem] 
    );

};

export const scrollToActiveNavItem = (navIndex: number) => {
    let height: number = 0;
    switch(navIndex){
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

export const highlightNavItemByScrollHeight = (changeActiveNavitem: Function) => {
    document.addEventListener("scroll", () => {
        let height: number = window.scrollY;
        if(height >= 0 && height < 1080){
            changeActiveNavitem(0); //this assumes nav items are always ordered the right way, I have to change how I store the nav items
        }
        if(height >= 1080 && height < 2160){
            changeActiveNavitem(1);
        }
        if(height >= 2160 && height < 3240){
            changeActiveNavitem(2);
        }
        if(height >= 3240 && height < 4320){
            changeActiveNavitem(3);
        }
    });
};

export const useHighlightNavItemByScrollHeight = (changeActiveNavitem: Function) => {
    useEffect(() => {
        document.addEventListener("scroll", () => {
            let height: number = window.scrollY;
            if(height >= 0 && height < 1080){
                changeActiveNavitem(0); //this assumes nav items are always ordered the right way, I have to change how I store the nav items
            }
            if(height >= 1080 && height < 2160){
                changeActiveNavitem(1);
            }
            if(height >= 2160 && height < 3240){
                changeActiveNavitem(2);
            }
            if(height >= 3240 && height < 4320){
                changeActiveNavitem(3);
            }
        });
    }, 
        []
    )

};