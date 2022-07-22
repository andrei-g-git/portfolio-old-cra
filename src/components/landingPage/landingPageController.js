"use strict";
exports.__esModule = true;
exports.useCharacterEntrance = exports.handleDoodadClick = void 0;
var animations_1 = require("./animations");
var animations_2 = require("./animations");
var react_1 = require("react");
exports.handleDoodadClick = function (changeAnimation, animationsObject) {
    return function (index) {
        var anim = animations_1.getAnimationByDoodadNumber(index);
        changeAnimation(anim);
        setTimeout(function () {
            changeAnimation(animations_1.getAnimationByName("idling", animations_2.animations));
        }, 
        //don't use the animationObject's duration, the preceeding animation is set in the animations object, but at runtime it doesn't have to be that. in this case it would be one of the look-sideways animations
        1500);
        return anim;
    };
};
exports.useCharacterEntrance = function (animationAction, animationsObject) {
    react_1.useEffect(function () {
        var beforeRestingArms = animationsObject.restingArms.preceedingAnimation;
        var beforeTurning = animationsObject.turning.preceedingAnimation;
        var beforeIdling = animationsObject.idling.preceedingAnimation;
        setTimeout(function () {
            animationAction(animationsObject["turning"].index);
            setTimeout(function () {
                animationAction(animationsObject["restingArms"].index);
                setTimeout(function () {
                    animationAction(animationsObject["idling"].index);
                }, animationsObject[beforeIdling]
                    .duration);
            }, animationsObject[beforeRestingArms]
                .duration);
        }, animationsObject[beforeTurning]
            .duration);
    }, []);
};
