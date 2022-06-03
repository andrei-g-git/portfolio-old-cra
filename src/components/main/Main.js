"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var LandingPage_1 = require("../landingPage/LandingPage");
var NavBar_1 = require("../navbar/NavBar");
var actions_1 = require("../../redux/actions");
var mainHooks_1 = require("./mainHooks");
require("./Main.scss");
//import {useEffect} from "react";
function Main(props) {
    // useEffect(() => {
    //     highlightNavItemByScrollHeight(props.changeActiveNavItem); //don't forget the cleanup
    // },
    //     []
    // );
    mainHooks_1.useHighlightNavItemByScrollHeight(props.changeActiveNavItem);
    mainHooks_1.useScrollByActiveNavItem(props); //doesn't work when useEffect must be triggered by prop changes outside the component
    //prob because the props aren't yet initialized
    // useEffect(() => { 
    //     scrollToActiveNavItem(props.activeNavItem)
    // },
    //     [props.activeNavItem, props.clickedNavItem] //I don't like this
    // );
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
var mapStateToProps = function (state) {
    return {
        activeNavItem: state.ui.activeNavItem,
        clickedNavItem: state.ui.clickedNavItem
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        changeActiveNavItem: function (navIndex) {
            dispatch(actions_1.activeNavItemChanged(navIndex));
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Main);
