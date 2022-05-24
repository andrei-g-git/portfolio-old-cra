import {
    WHATEVER,
    CHARACTER_ANIMATION_CHANGED
} from "./actionTypes";
import {ReduxAction} from "./interface/ReduxAction";

interface UiState{
   whatevs: number,
   characterAnimation: number 
}

const initialState: UiState = {
    whatevs: 123,
    characterAnimation: 0
};

export const uiReducer = (state: UiState = initialState, action: ReduxAction): UiState => {
    switch(action.type){
        case WHATEVER:
            return{
                ...state,
                whatevs: action.payload
            };
        case CHARACTER_ANIMATION_CHANGED:
            return{
                ...state,
                characterAnimation: action.payload
            }
        default:
            return state;
    }
};