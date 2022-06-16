"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var ShowcaseItem_1 = require("../showcaseItem/ShowcaseItem");
var ShowcaseOverlay_1 = require("../showcaseOverlay/ShowcaseOverlay");
var showcaseItems_1 = require("./showcaseItems");
var withState_1 = require("../_higherOrderComponents/withState");
var actions_1 = require("../../redux/actions");
require("./Projects.scss");
var ShowcaseOverlayWithThemeState = withState_1.withThemeState(ShowcaseOverlay_1["default"]);
var Projects = function (props) {
    return (React.createElement("div", { className: "projects-container", style: { height: "100vh", maxHeight: "100vh" } },
        React.createElement("div", { className: "projects-title" }, "PROJECTS"),
        React.createElement("div", { className: "showcase-container" }, showcaseItems_1.getShowcaseItems().map(function (item) {
            return React.createElement(ShowcaseItem_1["default"], { image: item.image, key: item.index },
                React.createElement(ShowcaseOverlayWithThemeState, { index: item.index, title: item.name, description: item.description, notifyParent: curryStoreSelectedProject(props.selectProject, props.toggleModal), key: item.index }));
        }))));
};
var curryStoreSelectedProject = function (selectedShowcaseItemCallback, toggledCallback) {
    return function (index) {
        selectedShowcaseItemCallback(index);
        toggledCallback(true);
    };
};
var mapStateToProps = function (state) {
    // return{
    // 	selectedProject: state.ui.selectedProject
    // };
};
var mapDispatchToProps = function (dispatch) {
    return {
        selectProject: function (index) {
            dispatch(actions_1.selectedShowcaseItem(index));
        },
        toggleModal: function (isVisible) {
            dispatch(actions_1.toggledShowcaseModal(isVisible));
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Projects);
