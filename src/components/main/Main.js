"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var react_1 = require("react");
var LandingPage_1 = require("../landingPage/LandingPage");
var NavBar_1 = require("../navbar/NavBar");
var About_1 = require("../about/About");
var actions_1 = require("../../redux/actions");
var Projects_1 = require("../projects/Projects");
var Contact_1 = require("../contact/Contact");
var mainHooks_1 = require("./mainHooks");
require("./Main.scss");
function Main(props) {
    mainHooks_1.useHighlightNavItemByScrollHeight(props.highlightNavItem);
    react_1.useEffect(function () {
        mainHooks_1.scrollToActiveNavItem(props.selectedNavItem);
    }, [props.clickedNavItem]);
    // window.addEventListener("scroll", () => {
    //     if(props.showcasing){
    //         const x = window.scrollX;
    //         const y = window.scrollY;
    //         window.scrollTo(x, y);
    //     }
    // });
    return (React.createElement("div", { className: "main", id: "main" },
        React.createElement(LandingPage_1["default"], { height: "100vh" }),
        " ",
        React.createElement(NavBar_1["default"], null),
        React.createElement(About_1["default"], { height: "100vh" }),
        React.createElement(Projects_1["default"], { height: "100vh" }),
        React.createElement(Contact_1["default"], { height: "100vh" })));
}
var mapStateToProps = function (state) {
    return {
        clickedNavItem: state.ui.clickedNavItem,
        autoScrolling: state.ui.autoScrolling,
        selectedNavItem: state.ui.selectedNavItem,
        showcasing: state.ui.showcasing
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        toggleAutoscrolling: function (isAutoScrolling) {
            dispatch(actions_1.switchedAutoscroll(isAutoScrolling));
        },
        highlightNavItem: function (navIndex) {
            dispatch(actions_1.navItemHighlighted(navIndex));
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Main);
