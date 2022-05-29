import { getAnimationByDoodadNumber, getAnimationByName } from './animations';
import { animations } from './animations';

export const handleDoodadClick = (changeAnimation: Function, animationsObject: any) => { //this is testable even though the called functions aren't injected, maybe it imports the whole file in the test and functions like getAnimationByDoodadNumber are available behind the scenes...
    return (index: number) => {                                     //so this is testable even if it isn't functional programing per se
        const anim = getAnimationByDoodadNumber(index);
        changeAnimation(anim);
        setTimeout(() => {
            changeAnimation(getAnimationByName("idling", animations));
        },
/*             animationsObject[
                animationsObject.idling.preceedingAnimation
            ]
                .duration */   //no, the preceeding animation is set in the animations object, but at runtime it doesn't have to be that. in this case it would be one of the look-sideways animations
            1500                
        );

        return anim;
    };
};