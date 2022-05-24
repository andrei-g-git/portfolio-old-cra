import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { characterAnimationChanged } from '../../redux/actions';
import { useCharacterEntrance, getCharacterAnimationUri } from './animations';
import ShelfDoodad from '../shelfDoodad/ShelfDoodad';
import { animations } from './animations';
import "../landingPage/LandingPage.scss";

export const LandingPage = (props: any) => {

    useCharacterEntrance(props.changeCharacterAnimation);

    return (
        <div className="landing-page-container">
            <div className="landing-page-background"></div>
            <ShelfDoodad image={require("../../assets/img/testDoodad1.png")}
                animation={animations["lookingAtThing1"]}
                x="100px"
                y="200px"
            />
            <ShelfDoodad image={require("../../assets/img/testDoodad2.png")}
                animation={animations["lookingAtThing2"]}
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