import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import LandingPage from '../landingPage/LandingPage';
import NavBar from '../navbar/NavBar';
import { 
    activeNavItemChanged,
    switchedAutoscroll,
    navItemSelected,
    navItemHighlighted 
} from '../../redux/actions';
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

    return (
        <div className="main" id="main">
            <LandingPage height="100vh"/>
            <NavBar />
            <div style={{
                width: "100vw",
                height: "2000px",
                backgroundColor: "lightgray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }} >
                delete
            </div>

        {/*   <PageBelowNavbar />
            <YetAnotherPage />
            <Footer /> */}
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
