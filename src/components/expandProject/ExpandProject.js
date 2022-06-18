"use strict";
exports.__esModule = true;
exports.ExpandProject = void 0;
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../redux/actions");
var utils_1 = require("../../js/utils");
require("./ExpandProject.scss");
exports.ExpandProject = function (props) {
    var _a = getClassSecondsAndTimeoutMiliseconds(utils_1.clamp(utils_1.calcFloatToDecimal(0.3, 1), 0.3, 1)), suffix = _a.suffix, delay = _a.delay;
    var popupClass = "";
    react_1.useEffect(function () {
        var abc = 123;
        if (!props.visible) {
            popupClass = " close-popup-" + suffix;
            console.log(suffix);
        }
    }, [props.visible] //this only triggers when visible changes to 'true' for some reason
    );
    return (React.createElement("div", { className: props.darkTheme ? "theme-dark" : "theme-light" },
        React.createElement("div", { className: "expand-project-container" },
            React.createElement("div", { className: "expand-project-modal" + popupClass },
                React.createElement("button", { style: { fontSize: "xl" }, onClick: function () { return props.closeModal(false, delay); } }, "X"),
                React.createElement("button", { onClick: function () { return props.notifyParent(); } }, "GO TO SITE")))));
};
var getClassSecondsAndTimeoutMiliseconds = function (seconds) {
    if (seconds >= 1)
        seconds = Math.floor(seconds);
    var rawSuffix = seconds.toString();
    var suffix = rawSuffix;
    if (rawSuffix.includes(".")) {
        suffix = rawSuffix.replace(".", "");
        suffix += "s";
    }
    var milliseconds = seconds * 1000;
    return {
        suffix: suffix,
        delay: milliseconds
    };
};
var mapStateToProps = function (state) {
    return {
        visible: state.ui.showcasing
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        closeModal: function (isVisible, delay) {
            setTimeout(function () {
                dispatch(actions_1.toggledShowcaseModal(isVisible));
            }, delay);
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.ExpandProject);
