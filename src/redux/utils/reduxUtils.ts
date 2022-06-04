import { Dispatch } from "redux";

export const finishDispatchWrapper = (dispatch: Dispatch, action: Function, actionArgument: any): any => {
    return new Promise<string>((resolve) => {
        dispatch(action(actionArgument));
        resolve("resolved...");
    });
};

