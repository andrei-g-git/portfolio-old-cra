"use strict";
exports.__esModule = true;
exports.ExpandProject = void 0;
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../redux/actions");
var ProjectSimpleGallery_1 = require("../projectPics/ProjectSimpleGallery");
var ExpandProjectController_1 = require("./ExpandProjectController");
require("./ExpandProject.scss");
exports.ExpandProject = function (props) {
    var _a = react_1.useState(""), modalCloseClass = _a[0], setPopupClass = _a[1];
    var _b = ExpandProjectController_1.getDelayAndAppendToClassName(0.4), popupClass = _b.popupClass, delay = _b.delay;
    return (props.visible ?
        React.createElement("div", { className: props.darkTheme ? "theme-dark" : "theme-light" },
            React.createElement("div", { className: "expand-project-container" },
                React.createElement("div", { className: "expand-project-modal" + modalCloseClass },
                    React.createElement(ProjectSimpleGallery_1["default"], { images: props.images }),
                    React.createElement("h3", { className: "expand-project-title" }, props.title),
                    React.createElement("p", { className: "expand-project-description" }, props.description),
                    React.createElement("div", { className: "expand-project-skills" }, props.logos.map(function (logo, index) {
                        return React.createElement("div", { className: "expand-project-logo-and-name", key: index },
                            React.createElement("img", { className: "expand-project-skill-logo", src: require("../../assets/img/" + logo), alt: props.frameworks[index] + "logo" }),
                            React.createElement("div", { className: "expand-project-framework-name" }, props.frameworks[index]));
                    })),
                    React.createElement("button", { style: { fontSize: "xl" }, onClick: function () {
                            setPopupClass(popupClass);
                            setTimeout(function () {
                                props.closeModal(false, /*  delay */ 0);
                                setPopupClass("");
                            }, delay);
                        } }, "X"),
                    React.createElement("button", { onClick: function () { return props.openSite(); } }, "GO TO SITE"),
                    React.createElement("button", { onClick: function () { return props.openGit(); } }, "GIT HUB"))))
        :
            null);
};
var mapStateToProps = function (state) {
    return {
        visible: state.ui.showcasing,
        darkTheme: state.ui.darkTheme //delete, testing to see if the higher order redux component is interfering with this
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
