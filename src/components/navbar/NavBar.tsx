import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { navbarItemList } from './navbarItems';
import { activeNavItemChanged, justClickedNavItem } from '../../redux/actions'; //this would probably be more proper if it was injected as a prop
import NavItem from '../navItem/NavItem';
import "./NavBar.scss";


export const NavBar = (props: any /* CHANGE */) => {
	// const activeItemList = [true, false, false, false]; //this is really bad for obvious reasons ///
	// useEffect(() => {
	// 	activeItemList.forEach((item, index) => activeItemList[index] = false);
	// 	activeItemList[props.activeNavItem] = true;
	// 	console.log(activeItemList);
	// },
	// 	[props.activeNavItem]
	// );
	return (
		<div className="nav-bar">
				{
					navbarItemList.map((item, index) => 
						<NavItem index={index}
							name={item}
							active={props.activeNavItem === index ? true : false}
							notifyParent={props.changeActiveNavItem}
						/>
					)
				}				

		</div>
	)
}

const mapStateToProps = (state: any) => {
	return{
		activeNavItem: state.ui.activeNavItem
	};
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return{
		changeActiveNavItem: (navIndex: number) => {
			dispatch(activeNavItemChanged(navIndex));
			dispatch(justClickedNavItem(true));
			setTimeout(() => {
				dispatch(justClickedNavItem(false)); //band aid
			},
				50
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
