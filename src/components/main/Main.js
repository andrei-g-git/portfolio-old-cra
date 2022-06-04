"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var react_1 = require("react");
var LandingPage_1 = require("../landingPage/LandingPage");
var NavBar_1 = require("../navbar/NavBar");
var actions_1 = require("../../redux/actions");
var mainHooks_1 = require("./mainHooks");
require("./Main.scss");
function Main(props) {
    mainHooks_1.useHighlightNavItemByScrollHeight(props.highlightNavItem);
    react_1.useEffect(function () {
        mainHooks_1.scrollToActiveNavItem(props.selectedNavItem);
    }, [props.clickedNavItem]);
    return (React.createElement("div", { className: "main", id: "main" },
        React.createElement(LandingPage_1["default"], { height: "100vh" }),
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
        //activeNavItem: state.ui.activeNavItem,
        clickedNavItem: state.ui.clickedNavItem,
        autoScrolling: state.ui.autoScrolling,
        selectedNavItem: state.ui.selectedNavItem
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        // changeActiveNavItem: (navIndex: number) => {
        //     dispatch(activeNavItemChanged(navIndex));
        // },
        toggleAutoscrolling: function (isAutoScrolling) {
            dispatch(actions_1.switchedAutoscroll(isAutoScrolling));
        },
        highlightNavItem: function (navIndex) {
            dispatch(actions_1.navItemHighlighted(navIndex));
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Main);
