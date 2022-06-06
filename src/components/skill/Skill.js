"use strict";
exports.__esModule = true;
var React = require("react"); //consider adding the * as for TS
require("./Skill.scss");
function Skill(props) {
    return (React.createElement("div", { className: "skill-container", id: "gauge-container-" + props.index },
        React.createElement("div", { className: "skill-icon-and-name" },
            React.createElement("img", { className: "skill-icon", src: props.icon, alt: "icon" }),
            React.createElement("p", { className: "skill-name" }, props.name)),
        props.children));
}
exports["default"] = Skill;
