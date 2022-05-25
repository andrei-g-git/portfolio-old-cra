import { useCharacterEntrance, getCharacterAnimationUri, getAnimationByDoodadNumber, getAnimationByName } from './animations';

export const handleDoodadClick = (changeAnimation: Function) => { //this is testable even though the called functions aren't injected, maybe it imports the whole file in the test and functions like getAnimationByDoodadNumber are available behind the scenes...
    return (index: number) => {                                     //so this is testable even if it isn't functional programing per se
        const anim = getAnimationByDoodadNumber(index);
        changeAnimation(anim);
        setTimeout(() => {
            changeAnimation(getAnimationByName("idling"));
        },
            1000
        );

        return anim;
    };
};