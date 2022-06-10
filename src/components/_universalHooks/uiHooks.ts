import { useEffect, useState } from "react";
import { Scrolling } from "../../js/uiEnums";
import { Pages } from "../main/Pages";
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
};

export const useReRenderWhenScrollToPage = (uncouplePropObject: {page: number, scrolling: boolean, scrollDirection: number}): boolean => {
	const [reRenderSkills, setReRenderSkills] = useState(false);

    const {page, scrolling, scrollDirection} = uncouplePropObject;

	useEffect(() => {
		if(scrolling){
			if((scrollDirection === Scrolling.DOWN && page === Pages.ABOUT.index) || 
				(scrollDirection === Scrolling.UP && page === Pages.PROJECTS.index)
			){
				setReRenderSkills(true);
			} else {
				setReRenderSkills(false);
			}
		}
	}, 
		[page]
	);

    return reRenderSkills;
};