"use strict";
exports.__esModule = true;
exports.getAnimationByDoodadNumber = exports.getAnimationByName = exports.animations = exports.getCharacterAnimationUri = exports.useCharacterEntrance = void 0;
var react_1 = require("react");
exports.useCharacterEntrance = function (animationAction) {
    react_1.useEffect(function () {
        setTimeout(function () {
            animationAction(exports.animations[ /* "leaning" */"turning"]);
            setTimeout(function () {
                animationAction(exports.animations[ /* "idling" */"restingArms"]);
            }, 500);
        }, 2200);
    }, []);
};
exports.getCharacterAnimationUri = function (index) {
    switch (index) {
        case 0:
            //return require("../../assets/img/testChar1.gif");
            return require("../../assets/img/walking-left.gif");
        case 1:
            //return require("../../assets/img/testCharIdle1.gif");
            return require("../../assets/img/turn-forward.gif");
        case 2:
            //return require("../../assets/img/actualIdle1.gif");   
            return require("../../assets/img/rest-arms.gif");
        case 3:
            return require("../../assets/img/testlookatthing1.gif");
        case 4:
            return require("../../assets/img/testlookatthing2.gif");
        default:
            return "nope";
    }
    ;
};
exports.animations = {
    walkingIn: 0,
    turning: 1,
    //leaning: 1,
    //idling: 2,
    restingArms: 2,
    lookingAtThing1: 3,
    lookingAtThing2: 4
};
exports.getAnimationByName = function (name) {
    switch (name) {
        case "walkingIn":
            return 0;
        //case "leaning":
        case "turning":
            return 1;
        //case "idling":
        case "restingArms":
            return 2;
        case "lookingAtThing1":
            return 3;
        case "lookingAtThing2":
            return 4;
        default:
            return 0;
    }
};
exports.getAnimationByDoodadNumber = function (index) {
    switch (index) {
        case 1:
            return 3;
        case 2:
            return 4;
        default:
            return 3;
    }
};
