export const WHATEVER: string = "WHATEVER";

export const CHARACTER_ANIMATION_CHANGED = "CHARACTER_ANIMATION_CHANGED";
export const ACTIVE_NAV_ITEM_CHANGED = "ACTIVE_NAV_ITEM_CHANGED";
export const JUST_CLICKED_NAV_ITEM = "JUST_CLICKED_NAV_ITEM"; //band aid, useEffect only triggers when the active item index changes, so if I'm at 'About' and scroll a bit in the same page, clicking about won't scroll to the page's 0, 0 because the state hasn't changed 