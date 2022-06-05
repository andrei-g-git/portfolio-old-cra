"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var react_transition_group_1 = require("react-transition-group");
var utils_1 = require("../../js/utils");
require("./Gauge.scss");
function Gauge(props) {
    // useEffect(() => {
    //     // const gaugeContainer = document.getElementById(`gauge-container-${props.index}`);
    //     // if(gaugeContainer) gaugeContainer.setAttribute("style", `--gauge-fill-x: ${props.width}`);
    //     setTimeout(() => {
    //         const gaugeNudge = document.getElementById(`gauge-nudge-${props.index}`);
    //         if(gaugeNudge){
    //             gaugeNudge.focus();
    //         } 
    //     }, 
    //         50
    //     )
    //     // setTimeout(() => {
    //     //     const gaugeNudge = document.getElementById(`gauge-nudge-${props.index}`);
    //     //     const abc = 123;
    //     // }, 
    //     //     1000
    //     // )
    // },
    //     []
    // )
    var maxWidth = utils_1.convertToPixels(props.maxWidth, "700px");
    var width = utils_1.convertToPixels(props.width, "0px");
    var blah = "450px";
    //////////
    var defaultStyle = {
        left: "0px",
        transitionDuration: "3s",
        transitionTimingFunction: "ease-in-out"
    };
    var transitionStyle = {
        entering: { transform: "translateX(0px)" },
        entered: { transform: "translateX(0px)" },
        exiting: { transform: "translateX(450px})" },
        exited: { transform: "translateX(450px})" }
    };
    /////////////
    return (React.createElement("div", { className: "gauge-container", id: "gauge-container-" + props.index, style: {} },
        React.createElement("div", { className: "gauge-max-range", "data-testid": "gauge-max-range", style: { width: maxWidth } }),
        React.createElement("div", { className: "gauge-value", "data-testid": "gauge-value", style: { width: width } }),
        React.createElement(react_transition_group_1.Transition, { "in": false, timeout: 3000 }, function (state) { return (React.createElement("div", { className: "gauge-nudge", "data-testid": "gauge-nudge", id: "gauge-nudge-" + props.index, 
            //style={{left: width}}
            // style={{
            //     left: "0px",
            //     transform: `translateX(450px})`,
            //     transitionDuration: "3s",
            //     transitionTimingFunction: "ease-in-out"
            // }}
            style: __assign(__assign({}, defaultStyle), transitionStyle) })); })));
}
exports["default"] = Gauge;
