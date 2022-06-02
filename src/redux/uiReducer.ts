import {
    WHATEVER,
    CHARACTER_ANIMATION_CHANGED,
    ACTIVE_NAV_ITEM_CHANGED,
    JUST_CLICKED_NAV_ITEM   
} from "./actionTypes";
import {ReduxAction} from "./interface/ReduxAction";
import { NavItems } from "./uiEnums";

interface UiState{ //should be in the interfaces folder
    whatevs: number,
    characterAnimation: number,
    activeNavItem: number,
    clickedNavItem: boolean
}

const initialState: UiState = {
    whatevs: 123,
    characterAnimation: 0,
    activeNavItem: NavItems.HOME.index,
    clickedNavItem: false
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
            };
        case ACTIVE_NAV_ITEM_CHANGED:
            return{
                ...state,
                activeNavItem: action.payload
            };
        case JUST_CLICKED_NAV_ITEM:
            return{
                ...state,
                clickedNavItem: action.payload
            };
        default:
            return state;
    }
};