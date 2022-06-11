"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
require("./Projects.scss");
var Projects = function (props) {
    return (React.createElement("div", { className: "projects-container", style: { height: "100vh", maxHeight: "100vh" } },
        React.createElement("div", { className: "projects-title" }, "PROJECTS")));
};
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = {};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Projects);
