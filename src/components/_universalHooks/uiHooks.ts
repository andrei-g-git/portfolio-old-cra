import { useEffect } from "react";
import { Scrolling } from "../../js/uiEnums";
import { toggleWithTimer } from "../../js/utils";

export const useScrollCheck = (toggleScrolling: Function) => {

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        window.addEventListener("scroll", () => {

            // toggleScrolling(true);
            // if(timer !== null) {
            //     clearTimeout(timer);        
            // }
            // timer = setTimeout(() => {
            //     toggleScrolling(false);
            // }, 
            //     150
            // );

            timer = toggleWithTimer(timer, 150, toggleScrolling, true);
        });
    },
        []
    );
}

export const useScrollDirection = (changeScrollDirection: Function, toggleScrolling: Function) => {

    useEffect(() => {
        var lastScrollTop = 0;

        let timer: any = null;

        window.addEventListener("scroll", () => { 
            var scrollTop= window.pageYOffset || document.documentElement.scrollTop; 
            if (scrollTop> lastScrollTop){
                changeScrollDirection(Scrolling.DOWN);
            } else {
                changeScrollDirection(Scrolling.UP);
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

            //
            toggleScrolling(true);
            if(timer !== null) {
                clearTimeout(timer);        
            }
            timer = setTimeout(() => {
                toggleScrolling(false);
                changeScrollDirection(Scrolling.NONE);
            }, 
                150
            );
        });


    }, 
        []
    )
}