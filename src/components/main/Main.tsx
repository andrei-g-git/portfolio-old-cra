import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import LandingPage from '../landingPage/LandingPage';
import NavBar from '../navbar/NavBar';
import {whatever} from "../../redux/actions";
import "./Main.scss";

import {panzoom} from "../../js/delete.js";

function Main(props: any) {

    window.addEventListener("resize", () => { //this is root level or window level, doesn't matter if it's in this component

        const elemWidth = 1920;
        const windowWidth = window.innerWidth;

        const scrollNextX = (elemWidth - windowWidth) / 2;
        //window.scrollTo(scrollNextX, 0);
        let landingPageArray = document.getElementsByClassName("landing-page-container") as HTMLCollectionOf<HTMLElement>;
        let landingPage = landingPageArray[0];
        //landingPage.style.left = "-" + scrollNextX.toString() + "px";
        landingPage.scrollLeft = -scrollNextX;
    });

    return (
        <div className="main" id="main">
            <LandingPage />
            <NavBar />
            <div style={{
                width: "100%",
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
        blah: state.ui.whatevs
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        handleClick: (value: number) => {
            dispatch(whatever(value))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);