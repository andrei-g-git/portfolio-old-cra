"use strict";
exports.__esModule = true;
exports.handleDoodadClick = void 0;
var animations_1 = require("./animations");
var animations_2 = require("./animations");
exports.handleDoodadClick = function (changeAnimation, animationsObject) {
    return function (index) {
        var anim = animations_1.getAnimationByDoodadNumber(index);
        changeAnimation(anim);
        setTimeout(function () {
            changeAnimation(animations_1.getAnimationByName("idling", animations_2.animations));
        }, 
        /*             animationsObject[
                        animationsObject.idling.preceedingAnimation
                    ]
                        .duration */ //no, the preceeding animation is set in the animations object, but at runtime it doesn't have to be that. in this case it would be one of the look-sideways animations
        1500);
        return anim;
    };
};
