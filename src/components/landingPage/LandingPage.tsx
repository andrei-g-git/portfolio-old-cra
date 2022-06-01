import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { characterAnimationChanged } from '../../redux/actions';
import { 
    //useCharacterEntrance, 
    getCharacterAnimationUri
} from './animations';
import { 
    handleDoodadClick, 
    useCharacterEntrance 
} from './landingPageController';
import { 
    useHorizontalPanning, 
    useCenteredResizing 
} from './movementHooks';
import ShelfDoodad from '../shelfDoodad/ShelfDoodad';
import { animations } from './animations';
import "../landingPage/LandingPage.scss";

export const LandingPage = (props: any) => { //make this thing pannable horizontally rather than using the scrollbar

    useCharacterEntrance(props.changeCharacterAnimation, animations);

    useCenteredResizing("landing-page-container", 1920);

    useHorizontalPanning("landing-page-container"); //this adds more coupling to the library, should just call useEffect here and pass the element

    return (
        <div className="landing-page-container">

            <div className="landing-page-background"></div>

            <ShelfDoodad image={require("../../assets/img/testDoodad1.png")}
                index={1}
                notifyClick={handleDoodadClick(props.changeCharacterAnimation, animations)}
                x="100px"
                y="200px"
            />
            <ShelfDoodad image={require("../../assets/img/testDoodad2.png")}
                index={2}
                notifyClick={handleDoodadClick(props.changeCharacterAnimation, animations)}
                x="1600px"
                y="200px"
            />
            <img className="character" 
                src={getCharacterAnimationUri(props.characterAnimation, animations, "../../") + "?" + Math.random().toString()} //browsers cache media, non-looping gifs are preserved as their end animation even on page reload
                alt="char"
            />

            <div className="landing-page-foreground"></div>

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


