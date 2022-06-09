import * as React from 'react';
import { 
    convertToPixels
} from "../../js/utils";
import "./Gauge.scss";

function Gauge(props: any) {

    let maxWidth: number | string = convertToPixels(props.maxWidth, "700px"); // think this could override the width passed in the skillgroup component

    return (
        <div className="gauge-container"
            id={`gauge-container-${props.index}`}
            style={{width: maxWidth}}
        >
            <div className="gauge-max-range" 
                data-testid="gauge-max-range"
            />
            <div className={`gauge-value scale-horizontal-percent-${props.proficiency}`}
                data-testid="gauge-value"
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

export default Gauge;