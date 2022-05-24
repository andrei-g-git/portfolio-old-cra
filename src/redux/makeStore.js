"use strict";
exports.__esModule = true;
exports.makeStore = void 0;
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var uiReducer_1 = require("./uiReducer");
function makeStore() {
    var allReducers = redux_1.combineReducers({
        ui: uiReducer_1.uiReducer
    });
    return (redux_1.createStore(allReducers, redux_devtools_extension_1.composeWithDevTools()));
}
exports.makeStore = makeStore;
