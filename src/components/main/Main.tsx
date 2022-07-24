import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import LandingPage from '../landingPage/LandingPage';
import NavBar from '../navbar/NavBar';
import About from '../about/About';
import { 
    switchedAutoscroll,
    navItemHighlighted 
} from '../../redux/actions';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import { 
    useScrollByActiveNavItem, 
    scrollToActiveNavItem,
    useHighlightNavItemByScrollHeight
} from './mainHooks';
import {withThemeState} from '../_higherOrderComponents/withState';
import "./Main.scss";

const ProjectsThemed = withThemeState(Projects);

function Main(props: any) {

    useHighlightNavItemByScrollHeight(props.highlightNavItem);

    useEffect(() => {
        scrollToActiveNavItem(props.selectedNavItem);
    },
        [props.clickedNavItem]
    );

    return (
        <div className="main" id="main">
            <LandingPage height="100vh"/> {/* heights are stored in the Pages class */}

            <NavBar />

            <About height="100vh"/>

            <ProjectsThemed height="100vh"/>

            <Contact height="100vh" />
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        clickedNavItem: state.ui.clickedNavItem, 
        autoScrolling: state.ui.autoScrolling,
        selectedNavItem: state.ui.selectedNavItem,
        showcasing: state.ui.showcasing 
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        toggleAutoscrolling: (isAutoScrolling: boolean) => {
            dispatch(switchedAutoscroll(isAutoScrolling));
        },
        highlightNavItem: (navIndex: number) => {
            dispatch(navItemHighlighted(navIndex));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
