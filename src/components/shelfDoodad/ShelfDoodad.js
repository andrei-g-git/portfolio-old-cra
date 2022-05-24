"use strict";
exports.__esModule = true;
exports.ShelfDoodad = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../redux/actions");
require("./ShelfDoodad.scss");
/*
props:
    image
    animation
    position x
    position y
    maybe dimensions?

*/
exports.ShelfDoodad = function (props) {
    return (React.createElement("div", { className: "doodad-container", onClick: function () { handleClick(props.changeCharacterAnimation, props.animation); }, style: {
            left: props.x,
            top: props.y,
            pointerEvents: "all"
        } },
        React.createElement("img", { className: "shelf-doodad", src: props.image, alt: "shelf \\n item" })));
};
var handleClick = function (changeAnimation, animation) {
    changeAnimation(animation);
};
var bloodyHell = function () {
    console.log("come on");
};
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return {
        changeCharacterAnimation: function (index) {
            dispatch(actions_1.characterAnimationChanged(index));
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.ShelfDoodad);
