"use strict";
exports.__esModule = true;
var React = require("react");
require("./ProjectSimpleGallery.scss");
function ProjectSimpleGallery(props) {
    return (React.createElement("div", null,
        React.createElement("div", { className: "gallery-container" }, props.images.map(function (image, index) {
            return React.createElement("img", { className: "gallery-pic", src: require("../../assets/img/" + image), alt: "screenshot", key: index });
        }))));
}
;
exports["default"] = ProjectSimpleGallery;
