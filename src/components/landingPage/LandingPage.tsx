import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { characterAnimationChanged } from '../../redux/actions';
import { 
    useCharacterEntrance, 
    getCharacterAnimationUri
} from './animations';
import { handleDoodadClick } from './landingPageController';
import ShelfDoodad from '../shelfDoodad/ShelfDoodad';
import "../landingPage/LandingPage.scss";

import { useEffect } from 'react';

export const LandingPage = (props: any) => { //make this thing pannable horizontally rather than using the scrollbar

    useCharacterEntrance(props.changeCharacterAnimation);

    useEffect(() => {
        deletePanning();
    }, [])

    return (
        <div className="landing-page-container">

            <div className="landing-page-background"></div>

            <ShelfDoodad image={require("../../assets/img/testDoodad1.png")}
                index={1}
                notifyClick={handleDoodadClick(props.changeCharacterAnimation)}
                x="100px"
                y="200px"
            />
            <ShelfDoodad image={require("../../assets/img/testDoodad2.png")}
                index={2}
                notifyClick={handleDoodadClick(props.changeCharacterAnimation)}
                x="1600px"
                y="200px"
            />
            <img className="character" 
                src={getCharacterAnimationUri(props.characterAnimation) + "?" + Math.random().toString()} //browsers cache media, non-looping gifs are preserved as their end animation even on page reload
                alt="char"
            />
        </div>

    );
}

const mapStateToProps = (state: any) => {
    return{
        characterAnimation: state.ui.characterAnimation
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        changeCharacterAnimation: (index: number) => {
            dispatch(characterAnimationChanged(index));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);










const deletePanning = () => {
    // let element: HTMLElement | null | undefined = null;
    // let x_element = 0;
    // let x_cursor_start = 0;

    let mouseStartX = 0;
    let dragging = false;
    let initialOffsetX = 0;
    let previousMouseX = 0;

    let landingPage = (document.getElementsByClassName("landing-page-container") as HTMLCollectionOf<HTMLElement>)[0];


    const startDragging = (event: any) => {
        mouseStartX = event.clientX;
        if(landingPage) initialOffsetX = landingPage.offsetLeft;
        dragging = true;
    }

    const dragOn = (event: any) => {
        event.preventDefault();
        let mX = event.clientX;
        if(mX === 0) mX = previousMouseX;
        const mouseMoveX = mouseStartX - mX;
        if(dragging){
            previousMouseX = event.clientX;
            landingPage.style.left = (initialOffsetX + mouseMoveX) + "px"; //this happens every loop
            console.log(mouseMoveX + "   and mouse x is:  " + mX); //cursor moves to x = 0 at dragend
        }        
    }

    const stopDragging = (event: any) => {
        dragging = false; //probably redundant if it's not in mouse listner
        document.removeEventListener("dragstart", startDragging)
        document.removeEventListener("drag", dragOn)
    }


    
    landingPage.addEventListener("dragstart", startDragging);

    landingPage.addEventListener("drag", dragOn);

    landingPage.addEventListener("dragend", stopDragging);

/*     landingPage.addEventListener("dragstart", (event) => {
        element = landingPage;
        x_element = event.clientX - landingPage.offsetLeft;
        x_cursor_start = event.clientX;
        console.log("mouse x:   " + event.clientX)
    });
    landingPage.addEventListener("drag", (event) => {
        var x_cursor = event.clientX;
        if (element !== null && element != undefined) {
          element.style.left = (x_cursor - x_element) + 'px'; //after dropping it subtracts value equal to the position of the mouse in the viewport every time --- I think it's actually that the mouse x value reverts to 0
          
            console.log(element.style.left+' - '+element.style.top);
      
        }
    });
    landingPage.addEventListener("dragend", (event) => {
        if (element !== null && element != undefined) {
            element.style.left = (landingPage.getBoundingClientRect().x - (x_cursor_start - event.clientX)) + "px";
            element = null;
        }
    }); */




}


