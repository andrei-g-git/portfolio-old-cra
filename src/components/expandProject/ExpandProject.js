"use strict";
exports.__esModule = true;
exports.ExpandProject = void 0;
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var swiper_1 = require("swiper");
var react_2 = require("swiper/react");
var actions_1 = require("../../redux/actions");
var utils_1 = require("../../js/utils");
require("./ExpandProject.scss");
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
require("swiper/css/effect-creative");
swiper_1["default"].use([swiper_1.Navigation, swiper_1.Pagination, swiper_1.EffectCreative]);
exports.ExpandProject = function (props) {
    var _a = react_1.useState(false), waited = _a[0], setWaited = _a[1];
    var duration = 0.3;
    var _b = getClassSecondsAndTimeoutMiliseconds(utils_1.clamp(utils_1.calcFloatToDecimal(duration, 1), 0.3, 1)), suffix = _b.suffix, delay = _b.delay;
    var popupClass = "";
    react_1.useEffect(function () {
        var abc = 123;
        if ( /* ! props.visible */waited) {
            popupClass = " close-popup-" + suffix;
            console.log(suffix);
        }
    }, [/* props.visible */ waited] //this only triggers when visible changes to 'true' for some reason --- the reason was that conditional rendering was set in parent and the component was destroyed before it couls run this
    );
    // const x = window.scrollX; //doesn't work, visible doesn't change to false, maybe the component gets destroyed in it's parent before it gets the chance to run this
    // const y = window.scrollY;
    // window.addEventListener("scroll", () => {
    //     if(props.visible){
    //         window.scrollTo(x, y);
    //     }
    // });
    return (props.visible ?
        React.createElement("div", { className: props.darkTheme ? "theme-dark" : "theme-light" },
            React.createElement("div", { className: "expand-project-container" },
                React.createElement("div", { className: "expand-project-modal" + popupClass },
                    React.createElement("div", { className: "expand-project-content" },
                        React.createElement(react_2.Swiper, { modules: [swiper_1.Navigation, swiper_1.Pagination, swiper_1.EffectCreative], 
                            //spaceBetween={0}
                            //slidesPerView={3}
                            navigation: true, pagination: true, effect: "creative", centeredSlides: true, creativeEffect: {
                                prev: {
                                    translate: [0.01, 0, 0],
                                    scale: 0.7
                                },
                                next: {
                                    translate: ['100%', 0, 0],
                                    scale: 1
                                }
                            }, speed: 400, breakpoints: {
                                425: {
                                    width: 425,
                                    slidesPerView: 1
                                },
                                768: {},
                                1024: {
                                    width: 700,
                                    slidesPerView: 3
                                }
                            } }, props.images.map(function (image, index) {
                            return React.createElement(react_2.SwiperSlide, { key: index },
                                React.createElement("img", { className: "expand-project-pic", src: require("../../assets/img/" + image), alt: "screenshot" }));
                        }))),
                    React.createElement("h3", { className: "expand-project-title" }, props.title),
                    React.createElement("p", { className: "expand-project-description" }, props.description),
                    React.createElement("div", { className: "expand-project-skills" }, props.logos.map(function (logo, index) {
                        return React.createElement("div", { className: "expand-project-logo-and-name", key: index },
                            React.createElement("img", { className: "expand-project-skill-logo", src: require("../../assets/img/" + logo), alt: props.frameworks[index] + "logo" }),
                            React.createElement("div", { className: "expand-project-framework-name" }, props.frameworks[index]));
                    })),
                    React.createElement("button", { style: { fontSize: "xl" }, onClick: function () {
                            setTimeout(function () {
                                props.closeModal(false, /*  delay */ 0);
                                setWaited(true);
                                setTimeout(function () {
                                    setWaited(false);
                                }, 20);
                            }, delay);
                        } }, "X"),
                    React.createElement("button", { onClick: function () { return props.openSite(); } }, "GO TO SITE"),
                    React.createElement("button", { onClick: function () { return props.openGit(); } }, "GIT HUB"))))
        :
            null);
};
var getClassSecondsAndTimeoutMiliseconds = function (seconds) {
    if (seconds >= 1)
        seconds = Math.floor(seconds);
    var rawSuffix = seconds.toString();
    var suffix = rawSuffix;
    if (rawSuffix.includes(".")) {
        suffix = rawSuffix.replace(".", "");
        suffix += "s";
    }
    var milliseconds = seconds * 1000;
    return {
        suffix: suffix,
        delay: milliseconds
    };
};
var mapStateToProps = function (state) {
    return {
        visible: state.ui.showcasing,
        darkTheme: state.ui.darkTheme //delete, testing to see if the higher order redux component is interfering with this
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        closeModal: function (isVisible, delay) {
            setTimeout(function () {
                dispatch(actions_1.toggledShowcaseModal(isVisible));
            }, delay);
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.ExpandProject);
