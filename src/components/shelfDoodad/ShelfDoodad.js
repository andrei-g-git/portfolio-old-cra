"use strict";
exports.__esModule = true;
exports.ShelfDoodad = void 0;
var React = require("react");
require("./ShelfDoodad.scss");
exports.ShelfDoodad = function (props) {
    return (React.createElement("div", { className: "doodad-container", onClick: function () { return props.notifyClick(props.index); }, style: {
            left: props.x,
            top: props.y,
            pointerEvents: "all"
        } },
        React.createElement("img", { className: "shelf-doodad", src: props.image, alt: "shelf \\n item" })));
};
exports["default"] = exports.ShelfDoodad;
