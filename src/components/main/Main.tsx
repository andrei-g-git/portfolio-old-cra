import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import LandingPage from '../landingPage/LandingPage';
import NavBar from '../navbar/NavBar';
import { activeNavItemChanged } from '../../redux/actions';
import { 
    useScrollByActiveNavItem, 
    scrollToActiveNavItem, 
    highlightNavItemByScrollHeight, 
    useHighlightNavItemByScrollHeight
} from './mainHooks';
import "./Main.scss";

//import {useEffect} from "react";

function Main(props: any) {

    // useEffect(() => {
    //     highlightNavItemByScrollHeight(props.changeActiveNavItem); //don't forget the cleanup
    // },
    //     []
    // );

    useHighlightNavItemByScrollHeight(props.changeActiveNavItem);

    useScrollByActiveNavItem(props); //doesn't work when useEffect must be triggered by prop changes outside the component
        //prob because the props aren't yet initialized

    // useEffect(() => { 
    //     scrollToActiveNavItem(props.activeNavItem)
    // },
    //     [props.activeNavItem, props.clickedNavItem] //I don't like this
    // );

    return (
        <div className="main" id="main">
            <LandingPage />
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
        activeNavItem: state.ui.activeNavItem,
        clickedNavItem: state.ui.clickedNavItem
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        changeActiveNavItem: (navIndex: number) => {
            dispatch(activeNavItemChanged(navIndex));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
