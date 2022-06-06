import * as React from 'react';
import { 
    convertToPixels,
    calcPercentIncrement10 
} from "../../js/utils";
import "./Gauge.scss";

function Gauge(props: any) {

    let maxWidth: number | string = convertToPixels(props.maxWidth, "700px");
    let width: number | string = convertToPixels(props.width, "0px");
    const percentTranslateX = calcPercentIncrement10(parseInt(width), parseInt(maxWidth));

    return (
        <div className="gauge-container"
            id={`gauge-container-${props.index}`}
            style={{width: maxWidth}}
        >
            <div className="gauge-max-range" 
                data-testid="gauge-max-range"
                //style={{width: maxWidth}}
            />
            <div className={`gauge-value scale-horizontal-percent-${percentTranslateX}`}
                data-testid="gauge-value"
                //style={{width: width}}
            />

            <div className={`gauge-nudge-container translate-horizontal-percent-${percentTranslateX}`}
                data-testid = "gauge-nudge"
                id={`gauge-nudge-${props.index}`}
            >
                <div className="actual-nudge" />
            </div>

        </div>
    );
}

export default Gauge;