"use strict";
exports.__esModule = true;
exports.NavBar = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var navbarItems_1 = require("./navbarItems");
var actions_1 = require("../../redux/actions"); //this would probably be more proper if it was injected as a prop
var NavItem_1 = require("../navItem/NavItem");
require("./NavBar.scss");
exports.NavBar = function (props /* CHANGE */) {
    // const activeItemList = [true, false, false, false]; //this is really bad for obvious reasons ///
    // useEffect(() => {
    // 	activeItemList.forEach((item, index) => activeItemList[index] = false);
    // 	activeItemList[props.activeNavItem] = true;
    // 	console.log(activeItemList);
    // },
    // 	[props.activeNavItem]
    // );
    return (React.createElement("div", { className: "nav-bar" }, navbarItems_1.navbarItemList.map(function (item, index) {
        return React.createElement(NavItem_1["default"], { index: index, name: item, active: props.activeNavItem === index ? true : false, notifyParent: props.changeActiveNavItem });
    })));
};
var mapStateToProps = function (state) {
    return {
        activeNavItem: state.ui.activeNavItem
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        changeActiveNavItem: function (navIndex) {
            dispatch(actions_1.activeNavItemChanged(navIndex));
            dispatch(actions_1.justClickedNavItem(true));
            setTimeout(function () {
                dispatch(actions_1.justClickedNavItem(false)); //band aid
            }, 50);
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.NavBar);
