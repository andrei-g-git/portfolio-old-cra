"use strict";
exports.__esModule = true;
exports.LandingPage = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../redux/actions");
var animations_1 = require("./animations");
var landingPageController_1 = require("./landingPageController");
var ShelfDoodad_1 = require("../shelfDoodad/ShelfDoodad");
require("../landingPage/LandingPage.scss");
var react_1 = require("react");
exports.LandingPage = function (props) {
    animations_1.useCharacterEntrance(props.changeCharacterAnimation);
    react_1.useEffect(function () {
        deletePanning();
    }, []);
    return (React.createElement("div", { className: "landing-page-container" },
        React.createElement("div", { className: "landing-page-background" }),
        React.createElement(ShelfDoodad_1["default"], { image: require("../../assets/img/testDoodad1.png"), index: 1, notifyClick: landingPageController_1.handleDoodadClick(props.changeCharacterAnimation), x: "100px", y: "200px" }),
        React.createElement(ShelfDoodad_1["default"], { image: require("../../assets/img/testDoodad2.png"), index: 2, notifyClick: landingPageController_1.handleDoodadClick(props.changeCharacterAnimation), x: "1600px", y: "200px" }),
        React.createElement("img", { className: "character", src: animations_1.getCharacterAnimationUri(props.characterAnimation) + "?" + Math.random().toString(), alt: "char" })));
};
var mapStateToProps = function (state) {
    return {
        characterAnimation: state.ui.characterAnimation
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        changeCharacterAnimation: function (index) {
            dispatch(actions_1.characterAnimationChanged(index));
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.LandingPage);
var deletePanning = function () {
    // let element: HTMLElement | null | undefined = null;
    // let x_element = 0;
    // let x_cursor_start = 0;
    var mouseStartX = 0;
    var dragging = false;
    var initialOffsetX = 0;
    var previousMouseX = 0;
    var landingPage = document.getElementsByClassName("landing-page-container")[0];
    var startDragging = function (event) {
        mouseStartX = event.clientX;
        if (landingPage)
            initialOffsetX = landingPage.offsetLeft;
        dragging = true;
    };
    var dragOn = function (event) {
        event.preventDefault();
        var mX = event.clientX;
        if (mX === 0)
            mX = previousMouseX;
        var mouseMoveX = mouseStartX - mX;
        if (dragging) {
            previousMouseX = event.clientX;
            landingPage.style.left = (initialOffsetX + mouseMoveX) + "px"; //this happens every loop
            console.log(mouseMoveX + "   and mouse x is:  " + mX); //cursor moves to x = 0 at dragend
        }
    };
    var stopDragging = function (event) {
        dragging = false; //probably redundant if it's not in mouse listner
        document.removeEventListener("dragstart", startDragging);
        document.removeEventListener("drag", dragOn);
    };
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
};
