import * as React from 'react';
import "./ShelfDoodad.scss";

export const ShelfDoodad = (props: any) => {
    return (
        <div className="doodad-container"
            onClick={() => props.notifyClick(props.index)}
            style={{
                left: props.x,
                top: props.y,
                pointerEvents: "all"
            }}
        >
            <img className="shelf-doodad"
                src={props.image}
                alt="shelf \n item" 
            />       
        </div>

    )
}

export default ShelfDoodad;