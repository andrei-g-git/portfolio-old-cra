import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Skill from '../skill/Skill';
import Gauge from '../gauge/Gauge';
import { SkillData } from '../../data/dataTypes';

const SkillGroup = (props: any) => {

    useEffect(() => {

    },
        [props.page]
    );

    

    return (
        <div className="skill-group-container" defaultValue={props.page}>
            {
                props.skills.map((skill: SkillData, index: number) => 
                    <Skill name={skill.name}
                        icon={require(`../../assets/img/${skill.icon}`)} //need to hardcode part of the path with require since I'm using webpack
                        index={index}
                        key={index}
                    >
                        <Gauge proficiency={skill.proficiency} 
                            maxWidth={550} 
                            index={index}
                        />
                    </Skill>
                )
            }
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        page: state.ui.highlightedNavItem   
    }
};

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SkillGroup)