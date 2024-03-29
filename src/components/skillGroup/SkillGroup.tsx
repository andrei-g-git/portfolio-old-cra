import * as React from 'react';
import { useEffect } from 'react';
import Skill from '../skill/Skill';
import Gauge from '../gauge/Gauge';
import { SkillData } from '../../data/dataTypes';
import { withPageState } from '../_higherOrderComponents/withState';

const SkillGroup = (props: any) => {

    useEffect(() => {
        console.log(props.refill)
    },
        [props.refill]
    );

    const GaugeWithPageState = withPageState(Gauge);   

    return (
        <div className="skill-group-container" defaultValue={props.page}>
            {
                props.skills.map((skill: SkillData, index: number) => 
                    <Skill name={skill.name}
                        icon={require(`../../assets/img/${skill.icon}`)} //need to hardcode part of the path with require since I'm using webpack
                        index={index}
                        key={index}
                    >
                        <GaugeWithPageState proficiency={skill.proficiency} 
                            maxWidth={350} 
                            index={index}
                        />
                    </Skill>
                )
            }
        </div>
    );
};

export default SkillGroup;