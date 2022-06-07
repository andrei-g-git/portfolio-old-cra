import * as React from 'react';
import { connect } from 'react-redux';
import Gauge from '../gauge/Gauge';
import Skill from '../skill/Skill';
import SkillGroup from '../skillGroup/SkillGroup';
import { skills } from '../../data/skills';
import "./About.scss";

const About = (props: any) => {
	return (
		<div className="about-container" 
			style={{height: props.height}}
		>
			<div className="about-me-container">
				<div className="about-me">
					<div className="about-avatar" />
					<p className="little-bit-about">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
			<div className="skills-container">
				<div className="skills">
					<SkillGroup skills={skills} />
					
				</div>				
			</div>

		</div>
	);
};

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(About)