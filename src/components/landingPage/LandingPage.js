"use strict";
exports.__esModule = true;
exports.LandingPage = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../redux/actions");
var animations_1 = require("./animations");
var landingPageController_1 = require("./landingPageController");
var movementHooks_1 = require("./movementHooks");
var ShelfDoodad_1 = require("../shelfDoodad/ShelfDoodad");
var animations_2 = require("./animations");
require("../landingPage/LandingPage.scss");
//until I can get my own stuff to work properly
var panzoom_1 = require("@panzoom/panzoom");
var react_1 = require("react");
exports.LandingPage = function (props) {
    landingPageController_1.useCharacterEntrance(props.changeCharacterAnimation, animations_2.animations);
    movementHooks_1.useCenteredResizing("landing-page-container", 1920);
    //on mobile it enables panning despite being disabled in the main component's css
    movementHooks_1.useHorizontalPanning("landing-page-container"); //this adds more coupling to the library, should just call useEffect here and pass the element
    //^ this never actually worked, a curly brace formatting error prevented the overflow in main.css to be hidden
    react_1.useEffect(function () {
        var landingPage = document.getElementById("landing-page-container");
        if (landingPage) {
            var panzoom = panzoom_1["default"](landingPage, { disableYAxis: true });
            landingPage.addEventListener("drag", function () { return console.log("dragging"); });
        }
    }, []);
    return (React.createElement("div", { className: "landing-page-container", id: "landing-page-container", style: { height: props.height } },
        React.createElement("div", { className: "landing-page-background" }),
        React.createElement(ShelfDoodad_1["default"], { image: require("../../assets/img/testDoodad1.png"), index: 1, notifyClick: landingPageController_1.handleDoodadClick(props.changeCharacterAnimation, animations_2.animations), x: "100px", y: "200px" }),
        React.createElement(ShelfDoodad_1["default"], { image: require("../../assets/img/testDoodad2.png"), index: 2, notifyClick: landingPageController_1.handleDoodadClick(props.changeCharacterAnimation, animations_2.animations), x: "1600px", y: "200px" }),
        React.createElement("img", { className: "character", src: animations_1.getCharacterAnimationUri(props.characterAnimation, animations_2.animations, "../../") + "?" + Math.random().toString(), alt: "char" }),
        React.createElement("div", { className: "landing-page-foreground" })));
};
var mapStateToProps = function (state) {
    return {
        characterAnimation: state.ui.characterAnimation
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        changeCharacterAnimation: function (index) {
            dispatch(actions_1.characterAnimationChanged(index));
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.LandingPage);
