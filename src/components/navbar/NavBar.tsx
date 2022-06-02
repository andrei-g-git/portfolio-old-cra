import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { navbarItemList } from './navbarItems';
import { activeNavItemChanged, justClickedNavItem } from '../../redux/actions'; //this would probably be more proper if it was injected as a prop
import "./NavBar.scss";


export const NavBar = (props: any /* CHANGE */) => {
	return (
		<div className="nav-bar">
				{
					navbarItemList.map((item, index) => 
						<div className="nav-item"
							key={index} //this is fine, the list is immutable
							onClick={() => props.changeActiveNavItem(index)}
						>
							{item}
						</div>
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
