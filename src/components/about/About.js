"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var SkillGroup_1 = require("../skillGroup/SkillGroup");
var skills_1 = require("../../data/skills");
var uiHooks_1 = require("../_universalHooks/uiHooks");
var actions_1 = require("../../redux/actions");
require("./About.scss");
var About = function (props) {
    uiHooks_1.useScrollDirection(props.changeScrollDirection, props.toggleScrolling);
    var reRenderSkills = uiHooks_1.useReRenderWhenScrollToPage({
        page: props.page,
        scrolling: props.scrolling,
        scrollDirection: props.scrollDirection
    });
    return (React.createElement("div", { className: props.darkTheme ? "theme-dark" : "theme-light" },
        React.createElement("div", { className: "about-container", style: { height: props.height, maxHeight: props.height } },
            React.createElement("div", { className: "about-title" }, "ABOUT"),
            React.createElement("div", { className: "about-me-container", id: "about-me-container" },
                React.createElement("div", { className: "about-me" },
                    React.createElement("div", { className: "about-avatar" }),
                    React.createElement("p", { className: "little-bit-about" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),
            React.createElement("div", { className: "skills-container" },
                React.createElement("div", { className: "skills" },
                    React.createElement(SkillGroup_1["default"], { skills: skills_1.skills, refill: reRenderSkills }))))));
};
var mapStateToProps = function (state) {
    return {
        scrolling: state.ui.scrolling,
        scrollDirection: state.ui.scrollDirection,
        page: state.ui.highlightedNavItem,
        darkTheme: state.ui.darkTheme
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        toggleScrolling: function (isScrolling) {
            dispatch(actions_1.scrolled(isScrolling));
        },
        changeScrollDirection: function (directionIndex) {
            dispatch(actions_1.scrollDirectionChanged(directionIndex));
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(About);
