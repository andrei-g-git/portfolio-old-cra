"use strict";
exports.__esModule = true;
var React = require("react");
require("./ShowcaseOverlay.scss");
function ShowcaseOverlay(props) {
    return (React.createElement("div", { className: props.darkTheme ? "theme-dark" : "theme-light" },
        React.createElement("div", { className: "showcase-overlay-container" },
            React.createElement("h3", { className: "showcase-title" }, props.title),
            React.createElement("p", { className: "showcase-description" }, props.description),
            React.createElement("div", { className: "showcase-button", onClick: function () { props.notifyParent(props.index); } }, "EXPAND"))));
}
exports["default"] = ShowcaseOverlay;
