import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { navbarItemList } from './navbarItems';
import { 
	activeNavItemChanged, 
	justClickedNavItem,
	navItemSelected
} from '../../redux/actions'; //this would probably be more proper if it was injected as a prop
//import { finishDispatchWrapper } from '../../redux/utils/reduxUtils';
import { NavItems } from './navItems';
import NavItem from '../navItem/NavItem';
import "./NavBar.scss";


export const NavBar = (props: any /* CHANGE */) => {

	return (
		<div className="nav-bar">
				{
					NavItems.getNavItems().map((item, index) => 
						<NavItem index={index}
							name={item.toUpperCase()}
							active={props.highlightedNavItem === index ? true : false}
							notifyParent={props.selectedNavItem}
						/>
					)
				}				

		</div>
	)
}

const mapStateToProps = (state: any) => {
	return{
		activeNavItem: state.ui.activeNavItem,
		highlightedNavItem: state.ui.highlightedNavItem
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
