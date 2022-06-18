"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var ShowcaseItem_1 = require("../showcaseItem/ShowcaseItem");
var ShowcaseOverlay_1 = require("../showcaseOverlay/ShowcaseOverlay");
var ExpandProject_1 = require("../expandProject/ExpandProject");
var showcaseItems_1 = require("./showcaseItems");
var withState_1 = require("../_higherOrderComponents/withState");
var actions_1 = require("../../redux/actions");
require("./Projects.scss");
var ShowcaseOverlayWithThemeState = withState_1.withThemeState(ShowcaseOverlay_1["default"]);
var ExpandProjectWithThemeState = withState_1.withThemeState(ExpandProject_1["default"]);
var Projects = function (props) {
    var upperClass = "projects-container";
    if (props.showcasing)
        upperClass += " blur-projects"; //ternary statement in the tsx doesn't work for some reason
    return (React.createElement("div", { className: upperClass, style: { height: "100vh", maxHeight: "100vh" } },
        React.createElement("div", { className: "projects-title" }, "PROJECTS"),
        React.createElement("div", { className: "showcase-container" }, showcaseItems_1.getShowcaseItems().map(function (item) {
            return React.createElement(ShowcaseItem_1["default"], { image: item.image, key: item.index },
                React.createElement(ShowcaseOverlayWithThemeState, { index: item.index, title: item.name, description: item.description, notifyParent: curryStoreSelectedProject(props.selectProject, props.toggleModal), key: item.index }));
        })),
        props.showcasing ?
            React.createElement(ExpandProjectWithThemeState, { notifyParent: curryOpenProjectUrl(showcaseItems_1.getShowcaseItems(), props.selectedProject) })
            :
                null));
};
var curryStoreSelectedProject = function (selectedShowcaseItemCallback, toggledCallback) {
    return function (index) {
        selectedShowcaseItemCallback(index);
        toggledCallback(true);
    };
};
var curryOpenProjectUrl = function (showcaseItems, index) {
    return function () {
        var url = showcaseItems[index].url;
        window.open(url, "_blank");
    };
};
var mapStateToProps = function (state) {
    return {
        showcasing: state.ui.showcasing,
        selectedProject: state.ui.selectedProject
    };
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
