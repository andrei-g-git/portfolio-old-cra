import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggledShowcaseModal } from '../../redux/actions';
import ProjectSimpleGallery from '../projectPics/ProjectSimpleGallery';
import { getDelayAndAppendToClassName } from './ExpandProjectController';
import "./ExpandProject.scss";

export const ExpandProject = (props: any) => {

    const [modalCloseClass, setPopupClass] = useState("");

    const {popupClass, delay} = getDelayAndAppendToClassName(0.4);

    return ( 
        props.visible ? 
            <div className={props.darkTheme? "theme-dark" : "theme-light"}>
                <div className="expand-project-container">
                    <div className={"expand-project-modal" + modalCloseClass}>

                        <ProjectSimpleGallery images={props.images} />

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
                            onClick={() => {
                                setPopupClass(popupClass); 
                                setTimeout(() => {
                                    props.closeModal(false,/*  delay */0);
                                    setPopupClass("");
                                },
                                    delay 
                                );
                            }}
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
        :
            null               
    );
};

const mapStateToProps = (state: any) => {
    return{
        visible: state.ui.showcasing,
        darkTheme: state.ui.darkTheme //delete, testing to see if the higher order redux component is interfering with this
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