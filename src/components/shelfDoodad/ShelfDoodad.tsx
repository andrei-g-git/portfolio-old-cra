import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { characterAnimationChanged } from '../../redux/actions';
import "./ShelfDoodad.scss";

/* 
props: 
    image
    animation
    position x
    position y
    maybe dimensions?

*/
export const ShelfDoodad = (props: any) => {
    return (
        <div className="doodad-container"
            onClick={() => { handleClick(props.changeCharacterAnimation, props.animation)}}
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

const handleClick = (changeAnimation: Function, animation: number) => {
    changeAnimation(animation);
}

const bloodyHell = () => {
    console.log("come on")
}

const mapStateToProps = (state: any) => { //need?
    return{
        
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        changeCharacterAnimation: (index: number) => {
            dispatch(characterAnimationChanged(index));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelfDoodad);