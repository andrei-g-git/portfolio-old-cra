import * as React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SkillGroup from '../skillGroup/SkillGroup';
import { skills } from '../../data/skills';
import { useScrollCheck, useScrollDirection } from '../_universalHooks/uiHooks';
import { scrolled, scrollDirectionChanged } from '../../redux/actions';
import { Scrolling } from '../../js/uiEnums';
import { Pages } from '../main/Pages';
import "./About.scss";


/* 
	I should have a state where it's appropriate for the skill gauges to re-animate, when I pass the landingPage downward ot the portfolio page upward
	I need a scrolling and scrollingDown bool state
	A scroll listner will update both

	var timer = null;
	window.addEventListener('scroll', function() {
		if(timer !== null) {
			clearTimeout(timer);        
		}
		timer = setTimeout(function() {
			// do something
		}, 150);
	}, false);

	A hook runs every time the highlightednavitem changes and if it's value mathces the landingPage or portfolio elements it will preform the above checks
	If true then the gauges must re-render
	It probabaly doesn't hur to re-render the whole page since it would cause less headaches with props ... Or I can just have a counter prop or some shit... 
*/
const About = (props: any) => {

	//useScrollCheck(props.toggleScrolling);
	useScrollDirection(props.changeScrollDirection, props.toggleScrolling)

	const [reRenderSkills, setReRenderSkills] = useState(false);

	useEffect(() => {
		if(props.scrolling){
			if((props.scrollDirection === Scrolling.DOWN && props.page === Pages.ABOUT.index) || 
				(props.scrollDirection === Scrolling.UP && props.page === Pages.PORTFOLIO.index)
			){
				setReRenderSkills(true);
			} else {
				setReRenderSkills(false);
			}
		}
	}, 
		[props.page]
	)

	return (
		<div className="about-container" 
			style={{height: props.height}}
		>
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
	);
};

const mapStateToProps = (state: any) => {
	return{
		scrolling: state.ui.scrolling,
		scrollDirection: state.ui.scrollDirection,
		page: state.ui.highlightedNavItem 
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