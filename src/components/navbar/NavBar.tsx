import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { 
	justClickedNavItem,
	navItemSelected,
	toggledTheme
} from '../../redux/actions'; //this would probably be more proper if it was injected as a prop
import { Pages } from "../main/Pages";
import NavItem from '../navItem/NavItem';
import "./NavBar.scss";

const Sticky = require("sticky-js");

export const NavBar = (props: any /* CHANGE */) => {

	const sticky = new Sticky(".nav-bar"); //position: sticky doesn't work even after removeing overflow from parent

	return (
		<div className="nav-bar"
			id="nav-bar"
		>
				{
					Pages.getNavItems().map((item, index) => 
						<NavItem index={index}
							name={item.toUpperCase()}
							active={props.highlightedNavItem === index ? true : false}
							notifyParent={props.selectedNavItem}
						/>
					)
				}		

				<button onClick={() => props.themeToggle(! props.darkTheme)}>T</button>		

		</div>
	)
}

const mapStateToProps = (state: any) => {
	return{
		activeNavItem: state.ui.activeNavItem,
		highlightedNavItem: state.ui.highlightedNavItem,
		darkTheme: state.ui.darkTheme
	};
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return{
		selectedNavItem: (navIndex: number) => {
			dispatch(navItemSelected(navIndex));
			// finishDispatchWrapper(dispatch, justClickedNavItem, true) //this seems to happen too fast, the change isn't registering
			// 	.then(
			// 		dispatch(justClickedNavItem(false))
			// 	)
			dispatch(justClickedNavItem(true));
			setTimeout(() => {
				dispatch(justClickedNavItem(false)); //band aid
			},
				10
			);			
		},
		themeToggle: (isDark: boolean) => {
			dispatch(toggledTheme(isDark));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
