"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var LandingPage_1 = require("../landingPage/LandingPage");
var NavBar_1 = require("../navbar/NavBar");
var actions_1 = require("../../redux/actions");
require("./Main.scss");
var react_1 = require("react");
function Main(props) {
    react_1.useEffect(function () {
        deleteThis();
    }, []);
    window.addEventListener("resize", function () {
        deleteThis();
    });
    return (React.createElement("div", { className: "main", id: "main" },
        React.createElement(LandingPage_1["default"], null),
        React.createElement(NavBar_1["default"], null),
        React.createElement("div", { style: {
                width: "100vw",
                height: "2000px",
                backgroundColor: "lightgray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            } }, "delete")));
}
var deleteThis = function () {
    var elemWidth = 1920;
    var windowWidth = window.innerWidth;
    var scrollNextX = (elemWidth - windowWidth) / 2;
    var landingPageArray = document.getElementsByClassName("landing-page-container");
    var landingPage = landingPageArray[0];
    landingPage.style.right = scrollNextX.toString() + "px";
    console.log("resizing");
};
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
