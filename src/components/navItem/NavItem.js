"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
require("./NavItem.scss");
function NavItem(props) {
    var activityClass = "nav-item-inactive";
    react_1.useEffect(function () {
        props.active ?
            activityClass = "nav-item-active"
            :
                activityClass = "nav-item-inactive";
    }, [props.active]);
    return (React.createElement("div", { className: "nav-item" + " " + props.active ? "nav-item-active" : "nav-item-inactive", key: props.index, onClick: function () { return props.notifyParent(props.index); } }, props.name));
}
exports["default"] = NavItem;
