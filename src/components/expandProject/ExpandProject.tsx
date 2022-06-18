import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggledShowcaseModal } from '../../redux/actions';
import { calcFloatToDecimal, clamp } from '../../js/utils';
import "./ExpandProject.scss";

export const ExpandProject = (props: any) => {

    const duration = 0.3;
    const {suffix, delay} = getClassSecondsAndTimeoutMiliseconds(
        clamp(
            calcFloatToDecimal(duration, 1),
            0.3,
            1
        )
    );

    let popupClass = "";
    useEffect(() => {
        const abc = 123;
        if(! props.visible){
            popupClass = ` close-popup-${suffix}`; 
            console.log(suffix);
        } 
        
    }, 
        [props.visible] //this only triggers when visible changes to 'true' for some reason
    );

    return (
        <div className={props.darkTheme? "theme-dark" : "theme-light"}>
            <div className="expand-project-container">
                <div className={"expand-project-modal" + popupClass}>{/* props.visible? "" : ` close-popup-${suffix}`}> */}

                    <div className="expand-project-content">
                        {
                            props.images.map((image: string, index: number) => 
                                <img className="expand-project-pic"
                                    src={require("../../assets/img/" + image)}
                                    alt="screenshot"
                                    key={index}
                                />
                            )
                        }
                    </div>

                    <h3 className="expand-project-title">
                        {props.title}
                    </h3>

                    <p className="expand-project-description">
                        {props.description}
                    </p>
                    
                    <div className="expand-project-skills">
                        {
                            props.logos.map((logo: string, index: number) => 
                                <div className="expand-project-logo-and-name"
                                    key={index}
                                >
                                    <img className="expand-project-skill-logo"
                                        src={require("../../assets/img/" + logo)}
                                        alt={props.frameworks[index] + "logo"}
                                    />
                                    <div className="expand-project-framework-name">
                                        {props.frameworks[index]}
                                    </div>
                                </div>

                            )
                        }
                    </div>


                    <button
                        style={{fontSize: "xl"}}
                        onClick={() => props.closeModal(false, delay)}
                    >
                        X
                    </button>

                    <button
                        onClick={() => props.openSite()}
                    >
                        GO TO SITE
                    </button>

                    <button
                        onClick={() => props.openGit()}
                    >
                        GIT HUB
                    </button>

                </div>
            </div>
        </div>

    );
};

const getClassSecondsAndTimeoutMiliseconds = (seconds: number): {suffix: string, delay: number} => {
    if(seconds >= 1) seconds = Math.floor(seconds);
    const rawSuffix = seconds.toString();
    let suffix = rawSuffix;
    if(rawSuffix.includes(".")) {
        suffix = rawSuffix.replace(".", "");
        suffix += "s";
    }
    const milliseconds = seconds * 1000;

    return{
        suffix: suffix,
        delay: milliseconds
    };
};

const mapStateToProps = (state: any) => {
    return{
        visible: state.ui.showcasing
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        closeModal: (isVisible: boolean, delay: number) => {
            setTimeout(() => {
                dispatch(toggledShowcaseModal(isVisible));
            },
                delay
            );
            
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpandProject);