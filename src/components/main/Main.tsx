import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import LandingPage from '../landingPage/LandingPage';
import {whatever} from "../../redux/actions";
import "./Main.scss";

function Main(props: any) {

  return (
    <div className="main">
        <LandingPage />
{/*         <Navbar />
        <PageBelowNavbar />
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