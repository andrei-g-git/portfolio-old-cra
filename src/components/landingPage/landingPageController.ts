import { getAnimationByDoodadNumber, getAnimationByName } from './animations';
import { animations } from './animations';
import { useEffect } from 'react';

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

export const useCharacterEntrance = (animationAction: Function, animationsObject: any) => { 
    useEffect(() => {
        const beforeRestingArms: string = animationsObject.restingArms.preceedingAnimation;
        const beforeTurning: string = animationsObject.turning.preceedingAnimation;
        const beforeIdling: string = animationsObject.idling.preceedingAnimation;
        setTimeout(() => {
            animationAction(animations["turning"].index);
    
            setTimeout(() => {
                animationAction(animations["restingArms"].index);
                
                setTimeout(() => {
                    animationAction(animations["idling"].index)
                }, 
                    animationsObject[beforeIdling]
                        .duration
                );
            },
                animationsObject[beforeRestingArms]
                    .duration
            );
        },
            animationsObject[beforeTurning]
                .duration
        );
    },
        []
    );
};