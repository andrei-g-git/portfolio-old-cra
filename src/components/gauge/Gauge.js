"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var utils_1 = require("../../js/utils");
require("./Gauge.scss");
function Gauge(props) {
    var restartAnimation = true; //false;
    // useEffect(() => {
    //     restartAnimation = true;
    //     setTimeout(() => {
    //         restartAnimation = false;
    //     }, 
    //         50
    //     );
    // },
    //     props.page
    // );
    var maxWidth = utils_1.convertToPixels(props.maxWidth, "700px");
    return (React.createElement("div", { className: "gauge-container", id: "gauge-container-" + props.index, style: { width: maxWidth } },
        React.createElement("div", { className: "gauge-max-range", "data-testid": "gauge-max-range" }),
        React.createElement("div", { className: "gauge-value" + addAnimationClass(restartAnimation, "scale-horizontal-percent-" + props.proficiency), "data-testid": "gauge-value" }),
        React.createElement("div", { className: "gauge-nudge-container translate-horizontal-percent-" + props.proficiency, "data-testid": "gauge-nudge", id: "gauge-nudge-" + props.index },
            React.createElement("div", { className: "actual-nudge" }))));
}
var addAnimationClass = function (restartAnimation, secondClass) {
    var animationClass = "";
    if (restartAnimation)
        animationClass = " " + secondClass;
    return animationClass;
};
var mapStateToProps = function (state) {
    return {
        page: state.ui.highlightedNavItem
    };
};
var mapDispatchToProps = {};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Gauge);
