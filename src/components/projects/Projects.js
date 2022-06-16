"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var ShowcaseItem_1 = require("../showcaseItem/ShowcaseItem");
var showcaseItems_1 = require("./showcaseItems");
require("./Projects.scss");
var Projects = function (props) {
    return (React.createElement("div", { className: "projects-container", style: { height: "100vh", maxHeight: "100vh" } },
        React.createElement("div", { className: "projects-title" }, "PROJECTS"),
        React.createElement("div", { className: "showcase-container" }, showcaseItems_1.getShowcaseItems().map(function (item) {
            return React.createElement(ShowcaseItem_1["default"], { image: item.image, key: item.index });
        }))));
};
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = {};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Projects);
