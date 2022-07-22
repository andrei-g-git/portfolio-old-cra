import * as React from 'react'; 
import "./Skill.scss";

function Skill(props: any) {
	return (
		<div className="skill-container"
			id={`gauge-container-${props.index}`}
		>
			<div className="skill-icon-and-name">
				<img className="skill-icon"
					src={props.icon}
					alt="icon"
				/>
				<p className="skill-name">
					{props.name}
				</p>				
			</div>


			{props.children}
		</div>
	)
}

export default Skill;