import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { 
    convertToPixels,
    calcPercentIncrement10 
} from "../../js/utils";
import "./Gauge.scss";

function Gauge(props: any) {
    let restartAnimation = true ;//false;

    // useEffect(() => {
    //     restartAnimation = true;
    //     setTimeout(() => {
    //         restartAnimation = false;
    //     }, 
    //         50
    //     );
    // },
    //     props.page
    // );

    let maxWidth: number | string = convertToPixels(props.maxWidth, "700px");

    return (
        <div className="gauge-container"
            id={`gauge-container-${props.index}`}
            style={{width: maxWidth}}
        >
            <div className="gauge-max-range" 
                data-testid="gauge-max-range"
                //style={{width: maxWidth}}
            />
            <div className={`gauge-value${addAnimationClass(restartAnimation, `scale-horizontal-percent-${props.proficiency}`)}`}//scale-horizontal-percent-${props.proficiency}`}
                data-testid="gauge-value"
                //style={{width: width}}
            />

            <div className={`gauge-nudge-container translate-horizontal-percent-${props.proficiency}`}
                data-testid = "gauge-nudge"
                id={`gauge-nudge-${props.index}`}
            >
                <div className="actual-nudge" />
            </div>

        </div>
    );
}

const addAnimationClass = (restartAnimation: boolean, secondClass: string): string => {
    let animationClass = "";
    if(restartAnimation) animationClass = " " + secondClass;
    return animationClass;
};

const mapStateToProps = (state: any) => {
    return {
        page: state.ui.highlightedNavItem   
    }
};

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Gauge);