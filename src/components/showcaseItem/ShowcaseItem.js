"use strict";
exports.__esModule = true;
var React = require("react");
require("./ShowcaseItem.scss");
function ShowcaseItem(props) {
    return (React.createElement("div", { className: "showcase-item-container" },
        React.createElement("div", { className: "showcase-pic", style: {
                backgroundImage: "url(" + require("../../assets/img/" + props.image) + ")"
            } }),
        props.children));
}
exports["default"] = ShowcaseItem;
