"use strict";
exports.__esModule = true;
exports.NavBar = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../redux/actions"); //this would probably be more proper if it was injected as a prop
var Pages_1 = require("../main/Pages");
var NavItem_1 = require("../navItem/NavItem");
require("./NavBar.scss");
var Sticky = require("sticky-js");
exports.NavBar = function (props /* CHANGE */) {
    var sticky = new Sticky(".nav-bar"); //position: sticky doesn't work even after removeing overflow from parent
    return (React.createElement("div", { className: "nav-bar", id: "nav-bar" },
        Pages_1.Pages.getNavItems().map(function (item, index) {
            return React.createElement(NavItem_1["default"], { index: index, name: item.toUpperCase(), active: props.highlightedNavItem === index ? true : false, notifyParent: props.selectedNavItem });
        }),
        React.createElement("button", { onClick: function () { return props.themeToggle(!props.darkTheme); } }, "T")));
};
var mapStateToProps = function (state) {
    return {
        activeNavItem: state.ui.activeNavItem,
        highlightedNavItem: state.ui.highlightedNavItem,
        darkTheme: state.ui.darkTheme
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        selectedNavItem: function (navIndex) {
            dispatch(actions_1.navItemSelected(navIndex));
            dispatch(actions_1.justClickedNavItem(true));
            setTimeout(function () {
                dispatch(actions_1.justClickedNavItem(false)); //band aid
            }, 10);
        },
        themeToggle: function (isDark) {
            dispatch(actions_1.toggledTheme(isDark));
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.NavBar);
