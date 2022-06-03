import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import LandingPage from '../landingPage/LandingPage';
import NavBar from '../navbar/NavBar';
import { useScrollByActiveNavItem, scrollToActiveNavItem } from './mainHooks';
import "./Main.scss";

//import {useEffect} from "react";

function Main(props: any) {

    //useScrollByActiveNavItem(props.activeNavItem); //doesn't work when useEffect must be triggered by prop changes outside the component
        //prob because the props aren't yet initialized
    useEffect(() => { //fuck this doesn't work when you click on the same nav item because the state doens't change...
        scrollToActiveNavItem(props.activeNavItem)
    },
        [props.activeNavItem, props.clickedNavItem] //I don't like this
    );

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
        handleClick: (value: number) => {
            //dispatch(whatever(value))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
