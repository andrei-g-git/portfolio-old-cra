"use strict";
exports.__esModule = true;
exports.getAnimationByDoodadNumber = exports.getAnimationByName = exports.getCharacterAnimationUri = exports.useCharacterEntrance = exports.animations = void 0;
var react_1 = require("react");
exports.animations /* ForRealThisTime */ = {
    walkingIn: {
        index: 0,
        path: "assets/img/walking-left.gif",
        duration: 2200,
        preceedingAnimation: ""
    },
    turning: {
        index: 1,
        path: "assets/img/turn-forward.gif",
        duration: 500,
        preceedingAnimation: "walkingIn"
    },
    restingArms: {
        index: 2,
        path: "assets/img/rest-arms.gif",
        duration: 500,
        preceedingAnimation: "turning"
    },
    idling: {
        index: 3,
        path: "assets/img/idling.gif",
        duration: 2000,
        preceedingAnimation: "restingArms"
    },
    lookingAtThing1: {
        index: 4,
        path: "assets/img/looking-left-1.gif",
        duration: 1500,
        preceedingAnimation: "idling"
    },
    lookingAtThing2: {
        index: 5,
        path: "assets/img/looking-right-1.gif",
        duration: 1500,
        preceedingAnimation: "idling"
    }
};
exports.useCharacterEntrance = function (animationAction, animationsObject) {
    react_1.useEffect(function () {
        var beforeRestingArms = animationsObject.restingArms.preceedingAnimation;
        var beforeTurning = animationsObject.turning.preceedingAnimation;
        var beforeIdling = animationsObject.idling.preceedingAnimation;
        setTimeout(function () {
            animationAction(exports.animations["turning"].index);
            setTimeout(function () {
                animationAction(exports.animations["restingArms"].index);
                setTimeout(function () {
                    animationAction(exports.animations["idling"].index);
                }, animationsObject[beforeIdling]
                    .duration);
            }, animationsObject[beforeRestingArms]
                .duration);
        }, animationsObject[beforeTurning]
            .duration);
    }, []);
};
exports.getCharacterAnimationUri = function (index, animationsObject, relativePathPrefix) {
    // switch(index){
    //     case 0:
    //         return require("../../assets/img/walking-left.gif");
    //     case 1:
    //         return require("../../assets/img/turn-forward.gif");
    //     case 2:
    //         return require("../../assets/img/rest-arms.gif");
    //     case 3:
    //         return require("../../assets/img/idling.gif");
    //     case 4:
    //         return require("../../assets/img/looking-left-1.gif");    
    //     case 5:
    //         return require("../../assets/img/looking-right-1.gif");            
    //     default: 
    //         return "nope"
    // };
    var path = ""; //relativePathPrefix;
    for (var _i = 0, _a = Object.entries(animationsObject); _i < _a.length; _i++) {
        var _b = _a[_i], name = _b[0], animation = _b[1];
        if (animation.index === index) {
            path += animation.path;
            break;
        }
    }
    return require("../../" + path); //if I concat the relative suffix dynamically it returns a cannot find module error ... luckily I'm only running animations in the same tsx file so ../../will work for now
};
// export const animations = {
//     walkingIn: 0,
//     turning: 1,
//     restingArms: 2,
//     idling: 3,
//     lookingAtThing1: 4,
//     lookingAtThing2: 5  
// };
exports.getAnimationByName = function (name, animationsObject) {
    // switch(name){
    //     case "walkingIn":
    //         return 0;
    //     case "turning":
    //         return 1;
    //     case "restingArms":
    //         return 2;
    //     case "idling":
    //         return 3;
    //     case "lookingAtThing1":
    //         return 4;
    //     case "lookingAtThing2":
    //         return 5;     
    //     default: 
    //         return 0;                                                                   
    // }
    return animationsObject[name].index;
};
exports.getAnimationByDoodadNumber = function (index) {
    switch (index) {
        case 1:
            return 4;
        case 2:
            return 5;
        default:
            return 4;
    }
};
