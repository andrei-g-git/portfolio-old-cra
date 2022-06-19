import * as React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SwiperCore, { Navigation, Pagination, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { toggledShowcaseModal } from '../../redux/actions';
import { calcFloatToDecimal, clamp } from '../../js/utils';
import "./ExpandProject.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

SwiperCore.use([Navigation, Pagination, EffectCreative]);

export const ExpandProject = (props: any) => {

    const [waited, setWaited] = useState(false);

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
        if(/* ! props.visible */waited){
            popupClass = ` close-popup-${suffix}`; 
            console.log(suffix);
        } 
        
    }, 
        [/* props.visible */waited] //this only triggers when visible changes to 'true' for some reason --- the reason was that conditional rendering was set in parent and the component was destroyed before it couls run this
    );

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

{/*                         <div className="expand-project-content">
                            {
                                props.images.map((image: string, index: number) => 
                                    <img className="expand-project-pic"
                                        src={require("../../assets/img/" + image)}
                                        alt="screenshot"
                                        key={index}
                                    />
                                )
                            }
                        </div> */}

                        <div className="expand-project-content">
                            <Swiper 
                                modules={[Navigation, Pagination, EffectCreative]}
                                //spaceBetween={0}
                                //slidesPerView={3}
                                navigation
                                pagination
                                effect="creative"
                                centeredSlides={true}
                                creativeEffect={{
                                    prev: {
                                        translate: [0.01, 0, 0],
                                        scale: 0.7
                                    },
                                    next: {
                                        translate: ['100%', 0, 0],
                                        scale: 1
                                    },
                                }}
                                speed={400}
                                breakpoints={{
                                    425: {
                                        width: 425,
                                        slidesPerView: 1
                                    },
                                    768: {
                               
                                    },
                                    1024: {
                                        width: 700,
                                        slidesPerView: 3
                                    }
                                }}
                            >
                                {
                                    props.images.map((image: string, index: number) => 
                                        <SwiperSlide key={index}>
                                            <img className="expand-project-pic"
                                                src={require("../../assets/img/" + image)}
                                                alt="screenshot"
                                                //key={index}
                                            />                                        
                                        </SwiperSlide>

                                    )                                   
                                }
                            </Swiper>
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
                            onClick={() => {
                                setTimeout(() => {
                                    props.closeModal(false,/*  delay */0);
                                    setWaited(true);
                                    setTimeout(() => {
                                        setWaited(false);
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