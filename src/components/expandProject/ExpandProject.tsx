import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggledShowcaseModal } from '../../redux/actions';
import { calcFloatToDecimal, clamp } from '../../js/utils';
import "./ExpandProject.scss";

export const ExpandProject = (props: any) => {

    const {suffix, delay} = getClassSecondsAndTimeoutMiliseconds(
        clamp(
            calcFloatToDecimal(0.3, 1),
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
                    <button
                        style={{fontSize: "xl"}}
                        onClick={() => props.closeModal(false, delay)}
                    >
                        X
                    </button>

                    <button
                        onClick={() => props.notifyParent()}
                    >
                        GO TO SITE
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