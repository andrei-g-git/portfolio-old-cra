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

        // console.log(JSON.stringify(animationsObject))
        // console.log(beforeRestingArms)
        // console.log(beforeTurning)
        // console.log(beforeIdling)
        
        setTimeout(() => {
            animationAction(animationsObject["turning"].index);
    
            setTimeout(() => {
                animationAction(animationsObject["restingArms"].index);
                
                setTimeout(() => {
                    animationAction(animationsObject["idling"].index)
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