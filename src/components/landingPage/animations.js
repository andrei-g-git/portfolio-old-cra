"use strict";
exports.__esModule = true;
exports.animations = exports.getCharacterAnimationUri = exports.useCharacterEntrance = void 0;
var react_1 = require("react");
exports.useCharacterEntrance = function (animationAction) {
    react_1.useEffect(function () {
        setTimeout(function () {
            animationAction(exports.animations["leaning"]);
            setTimeout(function () {
                animationAction(exports.animations["idling"]);
            }, 750);
        }, 1800);
    }, []);
};
exports.getCharacterAnimationUri = function (index) {
    switch (index) {
        case 0:
            return require("../../assets/img/testChar1.gif"); // + "?" + Math.random().toString();
        case 1:
            return require("../../assets/img/testCharIdle1.gif"); // + "?" + Math.random().toString();     
        case 2:
            return require("../../assets/img/actualIdle1.gif");
        default:
            return "nope";
    }
    ;
};
exports.animations = {
    walkingIn: 0,
    leaning: 1,
    idling: 2,
    lookingAtThing1: 3,
    lookingAtThing2: 4
};
