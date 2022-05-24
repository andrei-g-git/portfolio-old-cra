"use strict";
exports.__esModule = true;
exports.LandingPage = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../redux/actions");
var animations_1 = require("./animations");
var ShelfDoodad_1 = require("../shelfDoodad/ShelfDoodad");
var animations_2 = require("./animations");
require("../landingPage/LandingPage.scss");
exports.LandingPage = function (props) {
    animations_1.useCharacterEntrance(props.changeCharacterAnimation);
    return (React.createElement("div", { className: "landing-page-container" },
        React.createElement("div", { className: "landing-page-background" }),
        React.createElement(ShelfDoodad_1["default"], { image: require("../../assets/img/testDoodad1.png"), animation: animations_2.animations["lookingAtThing1"], x: "100px", y: "200px" }),
        React.createElement(ShelfDoodad_1["default"], { image: require("../../assets/img/testDoodad2.png"), animation: animations_2.animations["lookingAtThing2"], x: "1600px", y: "200px" }),
        React.createElement("img", { className: "character", src: animations_1.getCharacterAnimationUri(props.characterAnimation) + "?" + Math.random().toString(), alt: "char" })));
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
