import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SkillGroup from '../skillGroup/SkillGroup';
import { skills } from '../../data/skills';
import { useReRenderWhenScrollToPage, useScrollCheck, useScrollDirection } from '../_universalHooks/uiHooks';
import { scrolled, scrollDirectionChanged } from '../../redux/actions';
import "./About.scss";

const About = (props: any) => {

	useScrollDirection(props.changeScrollDirection, props.toggleScrolling)

	let reRenderSkills = useReRenderWhenScrollToPage({
		page: props.page,
		scrolling: props.scrolling,
		scrollDirection: props.scrollDirection
	});

	return (
		<div className={props.darkTheme ? "theme-dark" : "theme-light"}>
			<div className="about-container" 
				style={{height: props.height, maxHeight: props.height}}
			>
				<div className="about-title">
					ABOUT
				</div>
				
				<div className="about-me-container"
					id="about-me-container"
				>
					<div className="about-me">
						<div className="about-avatar" />
						<p className="little-bit-about">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				<div className="skills-container">
					<div className="skills">
						<SkillGroup skills={skills} refill={reRenderSkills}/>
						
					</div>				
				</div>

			</div>

		</div>

	);
};

const mapStateToProps = (state: any) => {
	return{
		scrolling: state.ui.scrolling,
		scrollDirection: state.ui.scrollDirection,
		page: state.ui.highlightedNavItem,
		darkTheme: state.ui.darkTheme 
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return{
		toggleScrolling: (isScrolling: boolean) => {
			dispatch(scrolled(isScrolling));
		},
		changeScrollDirection: (directionIndex: number) => {
			dispatch(scrollDirectionChanged(directionIndex));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);