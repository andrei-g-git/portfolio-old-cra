"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.withPageState = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
exports.withPageState = function (WrappedComponent) {
    return react_redux_1.connect(mapStateToProps, {})(function (props) {
        return (React.createElement(WrappedComponent, __assign({}, props)));
    });
};
var mapStateToProps = function (state) {
    return {
        page: state.ui.highlightedNavItem
    };
};
