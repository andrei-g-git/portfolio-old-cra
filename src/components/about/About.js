"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
require("./About.scss");
var About = function (props) {
    return (React.createElement("div", { className: "about-container", style: { height: props.height } },
        React.createElement("div", { className: "about-me" },
            React.createElement("div", { className: "about-avatar" }),
            React.createElement("p", { className: "little-bit-about" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),
        React.createElement("div", { className: "skills" })));
};
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = {};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(About);
