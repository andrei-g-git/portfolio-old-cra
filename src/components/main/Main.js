"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var LandingPage_1 = require("../landingPage/LandingPage");
var actions_1 = require("../../redux/actions");
require("./Main.scss");
function Main(props) {
    return (React.createElement("div", { className: "main" },
        React.createElement(LandingPage_1["default"], null)));
}
var mapStateToProps = function (state) {
    return {
        blah: state.ui.whatevs
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        handleClick: function (value) {
            dispatch(actions_1.whatever(value));
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Main);
