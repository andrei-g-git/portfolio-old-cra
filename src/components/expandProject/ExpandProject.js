"use strict";
exports.__esModule = true;
exports.ExpandProject = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../redux/actions");
require("./ExpandProject.scss");
exports.ExpandProject = function (props) {
    return (React.createElement("div", { className: "expand-project-container" },
        React.createElement("div", { className: "expand-project-modal" },
            React.createElement("button", { style: { fontSize: "xl" }, onClick: function () { return props.closeModal(false); } }, "X"),
            React.createElement("button", { onClick: function () { return props.notifyParent(); } }, "GO TO SITE"))));
};
var mapStateToProps = function (state) {
    return {
        visible: state.ui.showcasing
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        closeModal: function (isVisible) {
            dispatch(actions_1.toggledShowcaseModal(isVisible));
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.ExpandProject);
