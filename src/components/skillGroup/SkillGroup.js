"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var Skill_1 = require("../skill/Skill");
var Gauge_1 = require("../gauge/Gauge");
var SkillGroup = function (props) {
    react_1.useEffect(function () {
    }, [props.page]);
    return (React.createElement("div", { className: "skill-group-container", defaultValue: props.page }, props.skills.map(function (skill, index) {
        return React.createElement(Skill_1["default"], { name: skill.name, icon: require("../../assets/img/" + skill.icon), index: index, key: index },
            React.createElement(Gauge_1["default"], { proficiency: skill.proficiency, maxWidth: 550, index: index }));
    })));
};
var mapStateToProps = function (state) {
    return {
        page: state.ui.highlightedNavItem
    };
};
var mapDispatchToProps = {};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SkillGroup);
