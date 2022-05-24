import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {uiReducer} from "./uiReducer";

function makeStore(){
    const allReducers = combineReducers({
        ui: uiReducer
    });

    return (
        createStore(
            allReducers,
            composeWithDevTools()
        )
    );
}

export {
    makeStore
}