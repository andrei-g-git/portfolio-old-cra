import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { useEffect } from 'react';
//import stickybits from "stickybits";
//import { StickyContainer/* , Sticky */} from "react-sticky";
import LandingPage from '../landingPage/LandingPage';
import NavBar from '../navbar/NavBar';
import About from '../about/About';
import { 
    activeNavItemChanged,
    switchedAutoscroll,
    navItemSelected,
    navItemHighlighted 
} from '../../redux/actions';
import Contact from '../contact/Contact';
import { 
    useScrollByActiveNavItem, 
    scrollToActiveNavItem,
    useHighlightNavItemByScrollHeight
} from './mainHooks';
import "./Main.scss";



function Main(props: any) {

    useHighlightNavItemByScrollHeight(props.highlightNavItem);

    useEffect(() => {
        scrollToActiveNavItem(props.selectedNavItem);
    },
        [props.clickedNavItem]
    );

    //stickybits("nav-bar", {verticalPosition: 'bottom'}); //position: sticky isn't working anymore (has absolute position, top, and overflow removed from parent, still doens't work)

    return (
        <div className="main" id="main">
            <LandingPage height="100vh"/> {/* heights are stored in the Pages class */}
            {/* <StickyContainer> */}
                <NavBar />
            {/* </StickyContainer> */}
            
            <About height="100vh"/>

            <div className="portfolio-container" style={{height: "100vh", width: "100vw", backgroundColor: "pink"}} />

            <Contact height="100vh" />
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        //activeNavItem: state.ui.activeNavItem,
        clickedNavItem: state.ui.clickedNavItem, 
        autoScrolling: state.ui.autoScrolling,
        selectedNavItem: state.ui.selectedNavItem
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        // changeActiveNavItem: (navIndex: number) => {
        //     dispatch(activeNavItemChanged(navIndex));
        // },
        toggleAutoscrolling: (isAutoScrolling: boolean) => {
            dispatch(switchedAutoscroll(isAutoScrolling));
        },
        highlightNavItem: (navIndex: number) => {
            dispatch(navItemHighlighted(navIndex));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
