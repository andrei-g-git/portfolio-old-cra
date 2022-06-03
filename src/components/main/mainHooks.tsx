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

        window.scrollTo(0, height);
    },
        [props.activeNavItem] 
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

// export const highlightNavItemByScrollHeight = (changeActiveNavitem: NumberPayload, navItems: String[]) => {
//     const height
// };