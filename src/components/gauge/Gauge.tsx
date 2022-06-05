import * as React from 'react';
import { useEffect } from 'react';
import { Transition } from 'react-transition-group';
import { convertToPixels } from "../../js/utils";
import "./Gauge.scss";

function Gauge(props: any) {

    // useEffect(() => {
    //     // const gaugeContainer = document.getElementById(`gauge-container-${props.index}`);
    //     // if(gaugeContainer) gaugeContainer.setAttribute("style", `--gauge-fill-x: ${props.width}`);

    //     setTimeout(() => {
    //         const gaugeNudge = document.getElementById(`gauge-nudge-${props.index}`);
    //         if(gaugeNudge){
    //             gaugeNudge.focus();
    //         } 
    //     }, 
    //         50
    //     )

    //     // setTimeout(() => {
    //     //     const gaugeNudge = document.getElementById(`gauge-nudge-${props.index}`);
    //     //     const abc = 123;
    //     // }, 
    //     //     1000
    //     // )

        
    // },
    //     []
    // )
    let maxWidth: number | string = convertToPixels(props.maxWidth, "700px");
    let width: number | string = convertToPixels(props.width, "0px");

    const blah = "450px"

    //////////

    const defaultStyle = {
        left: "0px",
        transitionDuration: "3s",
        transitionTimingFunction: "ease-in-out"
    }
    const transitionStyle = {
        entering: {transform: `translateX(0px)`},
        entered: {transform: `translateX(0px)`},
        exiting: {transform: `translateX(450px})`},
        exited: {transform: `translateX(450px})`}
    }
    /////////////

    return (
        <div className="gauge-container"
            id={`gauge-container-${props.index}`}
            style={{}}
        >
            <div className="gauge-max-range" 
                data-testid="gauge-max-range"
                style={{width: maxWidth}}
            />
            <div className="gauge-value" 
                data-testid="gauge-value"
                style={{width: width}}
            />

<Transition in={false} timeout={3000}>
    {state => (
            <div className="gauge-nudge" 
                data-testid="gauge-nudge"
                id={`gauge-nudge-${props.index}`}
                //style={{left: width}}
                // style={{
                //     left: "0px",
                //     transform: `translateX(450px})`,
                //     transitionDuration: "3s",
                //     transitionTimingFunction: "ease-in-out"
                // }}
                style={{
                    ...defaultStyle,
                    ...transitionStyle
                }}
            />     
     
    )}
</Transition>

        </div>
    );
}

export default Gauge;