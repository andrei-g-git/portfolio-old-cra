"use strict";
exports.__esModule = true;
exports.JUST_CLICKED_NAV_ITEM = exports.ACTIVE_NAV_ITEM_CHANGED = exports.CHARACTER_ANIMATION_CHANGED = exports.WHATEVER = void 0;
exports.WHATEVER = "WHATEVER";
exports.CHARACTER_ANIMATION_CHANGED = "CHARACTER_ANIMATION_CHANGED";
exports.ACTIVE_NAV_ITEM_CHANGED = "ACTIVE_NAV_ITEM_CHANGED";
exports.JUST_CLICKED_NAV_ITEM = "JUST_CLICKED_NAV_ITEM"; //band aid, useEffect only triggers when the active item index changes, so if I'm at 'About' and scroll a bit in the same page, clicking about won't scroll to the page's 0, 0 because the state hasn't changed 
