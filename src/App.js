"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var makeStore_1 = require("./redux/makeStore");
var Main_1 = require("./components/main/Main");
var store = makeStore_1.makeStore();
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement(Main_1["default"], null)))));
}
exports["default"] = App;
