import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggledShowcaseModal } from '../../redux/actions';
import ProjectSimpleGallery from '../projectPics/ProjectSimpleGallery';
import { useClosePopupClass } from './hooksExpandProject';
import "./ExpandProject.scss";

export const ExpandProject = (props: any) => {

    const [waitedObject, setWaited] = useState({waited: false});

    const {popupClass, delay} =  useClosePopupClass(0.9, waitedObject);


    // const x = window.scrollX; //doesn't work, visible doesn't change to false, maybe the component gets destroyed in it's parent before it gets the chance to run this
    // const y = window.scrollY;
    // window.addEventListener("scroll", () => {
    //     if(props.visible){
    //         window.scrollTo(x, y);
    //     }
    // });

    return (
        props.visible ? 
            <div className={props.darkTheme? "theme-dark" : "theme-light"}>
                <div className="expand-project-container">
                    <div className={"expand-project-modal" + popupClass}>{/* props.visible? "" : ` close-popup-${suffix}`}> */}

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
                                setTimeout(() => {
                                    props.closeModal(false,/*  delay */0);
                                    setWaited(waitedObject => ({waited: true}));//true);
                                    setTimeout(() => {
                                        setWaited(waitedObject => ({waited: false}));//false);
                                    }, 
                                        20
                                    )
                                },
                                    delay
                                )
                                

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