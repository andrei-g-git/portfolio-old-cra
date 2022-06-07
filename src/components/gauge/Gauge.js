"use strict";
exports.__esModule = true;
var React = require("react");
var utils_1 = require("../../js/utils");
require("./Gauge.scss");
function Gauge(props) {
    var maxWidth = utils_1.convertToPixels(props.maxWidth, "700px");
    return (React.createElement("div", { className: "gauge-container", id: "gauge-container-" + props.index, style: { width: maxWidth } },
        React.createElement("div", { className: "gauge-max-range", "data-testid": "gauge-max-range" }),
        React.createElement("div", { className: "gauge-value scale-horizontal-percent-" + props.proficiency, "data-testid": "gauge-value" }),
        React.createElement("div", { className: "gauge-nudge-container translate-horizontal-percent-" + props.proficiency, "data-testid": "gauge-nudge", id: "gauge-nudge-" + props.index },
            React.createElement("div", { className: "actual-nudge" }))));
}
exports["default"] = Gauge;
