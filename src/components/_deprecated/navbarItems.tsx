import { NavItems } from "../../redux/uiEnums"; //not using ###

export const navbarItemList: String[] = [];
navbarItemList[NavItems.HOME.index] = NavItems.HOME.name.toUpperCase();
navbarItemList[NavItems.ABOUT.index] = NavItems.ABOUT.name.toUpperCase();
navbarItemList[NavItems.PORTFOLIO.index] = NavItems.PORTFOLIO.name.toUpperCase();
navbarItemList[NavItems.CONTACT.index] = NavItems.CONTACT.name.toUpperCase();