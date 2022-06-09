"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var SkillGroup_1 = require("../skillGroup/SkillGroup");
var skills_1 = require("../../data/skills");
require("./About.scss");
/*
    I should have a state where it's appropriate for the skill gauges to re-animate, when I pass the landingPage downward ot the portfolio page upward
    I need a scrolling and scrollingDown bool state
    A scroll listner will update both

    var timer = null;
    window.addEventListener('scroll', function() {
        if(timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            // do something
        }, 150);
    }, false);

    A hook runs every time the highlightednavitem changes and if it's value mathces the landingPage or portfolio elements it will preform the above checks
    If true then the gauges must re-render
    It probabaly doesn't hur to re-render the whole page since it would cause less headaches with props ... Or I can just have a counter prop or some shit...
*/
var About = function (props) {
    return (React.createElement("div", { className: "about-container", style: { height: props.height } },
        React.createElement("div", { className: "about-me-container", id: "about-me-container" },
            React.createElement("div", { className: "about-me" },
                React.createElement("div", { className: "about-avatar" }),
                React.createElement("p", { className: "little-bit-about" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),
        React.createElement("div", { className: "skills-container" },
            React.createElement("div", { className: "skills" },
                React.createElement(SkillGroup_1["default"], { skills: skills_1.skills })))));
};
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = {};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(About);
