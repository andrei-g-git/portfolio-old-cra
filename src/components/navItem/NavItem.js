"use strict";
exports.__esModule = true;
var React = require("react");
require("./NavItem.scss");
function NavItem(props) {
    return (React.createElement("div", { className: testClassName(props.active), key: props.index, onClick: function () { return props.notifyParent(props.index); } }, props.name));
}
var testClassName = function (isActive) {
    var secondClass = "nav-item-inactive";
    if (isActive)
        secondClass = "nav-item-active";
    return "nav-item " + secondClass;
};
exports["default"] = NavItem;
