import {
    WHATEVER,
    CHARACTER_ANIMATION_CHANGED,
    ACTIVE_NAV_ITEM_CHANGED,
    JUST_CLICKED_NAV_ITEM  ,
    SWITCHED_AUTOSCROLL,
    NAV_ITEM_SELECTED,
    NAV_ITEM_HIGHLIGHTED 
} from "./actionTypes";
import {ReduxAction} from "./interface/ReduxAction";
//import { NavItems } from "../components/navbar/navItems";
import { Pages } from "../components/main/Pages";

interface UiState{ //should be in the interfaces folder
    whatevs: number,
    characterAnimation: number,
    activeNavItem: number,
    clickedNavItem: boolean,
    autoScrolling: boolean,
    selectedNavItem: number,
    highlightedNavItem: number
}

const initialState: UiState = {
    whatevs: 123,
    characterAnimation: 0,
    activeNavItem: Pages.HOME.index,
    clickedNavItem: false,
    autoScrolling: false,
    selectedNavItem: 0,
    highlightedNavItem: 0
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
        case SWITCHED_AUTOSCROLL:
            return{
                ...state,
                autoScrolling: action.payload
            };
        case NAV_ITEM_SELECTED:
            return{
                ...state,
                selectedNavItem: action.payload
            };
        case NAV_ITEM_HIGHLIGHTED:
            return{
                ...state,
                highlightedNavItem: action.payload
            };            
        default:
            return state;
    }
};