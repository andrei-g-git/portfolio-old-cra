"use strict";
exports.__esModule = true;
exports.handleDoodadClick = void 0;
var animations_1 = require("./animations");
exports.handleDoodadClick = function (changeAnimation) {
    return function (index) {
        var anim = animations_1.getAnimationByDoodadNumber(index);
        changeAnimation(anim);
        setTimeout(function () {
            changeAnimation(animations_1.getAnimationByName("idling"));
        }, 1500);
        return anim;
    };
};
