"use strict";
exports.__esModule = true;
exports.finishDispatchWrapper = void 0;
exports.finishDispatchWrapper = function (dispatch, action, actionArgument) {
    return new Promise(function (resolve) {
        dispatch(action(actionArgument));
        resolve("resolved...");
    });
};
