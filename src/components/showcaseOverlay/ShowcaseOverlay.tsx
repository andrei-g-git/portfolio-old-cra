import * as React from 'react';
import "./ShowcaseOverlay.scss";

function ShowcaseOverlay(props: any) { //switch dark/light theme

    let isHovering = false;

    return (
        <div className={props.darkTheme ? "theme-dark" : "theme-light"}>
            <div className="showcase-overlay-container"//{"showcase-overlay-container" + " " + isHovering? "visible" : ""}
                onMouseOver={() => {isHovering = true}}
            >
                <h3 className="showcase-title">
                    {props.title}
                </h3>

                <p className="showcase-description">
                    {props.description}
                </p>

                <div className="showcase-button"
                    onClick={() => {props.notifyParent(props.index)}}
                >
                    EXPAND
                </div>
            </div>
        </div>
    );
}

export default ShowcaseOverlay;