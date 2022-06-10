"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var react_1 = require("react");
//import stickybits from "stickybits";
//import { StickyContainer/* , Sticky */} from "react-sticky";
var LandingPage_1 = require("../landingPage/LandingPage");
var NavBar_1 = require("../navbar/NavBar");
var About_1 = require("../about/About");
var actions_1 = require("../../redux/actions");
var Contact_1 = require("../contact/Contact");
var mainHooks_1 = require("./mainHooks");
require("./Main.scss");
function Main(props) {
    mainHooks_1.useHighlightNavItemByScrollHeight(props.highlightNavItem);
    react_1.useEffect(function () {
        mainHooks_1.scrollToActiveNavItem(props.selectedNavItem);
    }, [props.clickedNavItem]);
    //stickybits("nav-bar", {verticalPosition: 'bottom'}); //position: sticky isn't working anymore (has absolute position, top, and overflow removed from parent, still doens't work)
    return (React.createElement("div", { className: "main", id: "main" },
        React.createElement(LandingPage_1["default"], { height: "100vh" }),
        " ",
        React.createElement(NavBar_1["default"], null),
        React.createElement(About_1["default"], { height: "100vh" }),
        React.createElement("div", { className: "portfolio-container", style: { height: "100vh", width: "100vw", backgroundColor: "pink" } }),
        React.createElement(Contact_1["default"], { height: "100vh" })));
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
