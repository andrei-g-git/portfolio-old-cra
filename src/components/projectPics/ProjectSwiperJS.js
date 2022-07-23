"use strict";
exports.__esModule = true;
var React = require("react");
var swiper_1 = require("swiper");
var react_1 = require("swiper/react");
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
require("swiper/css/effect-creative");
require("./ProjectSwiperJS.scss");
swiper_1["default"].use([swiper_1.Navigation, swiper_1.Pagination, swiper_1.EffectCreative]);
function ProjectSwiperJS(props) {
    return (React.createElement("div", { className: "swiper-container" //coresponds to expand-project-content in the parent component
     },
        React.createElement(react_1.Swiper, { modules: [swiper_1.Navigation, swiper_1.Pagination, swiper_1.EffectCreative], 
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
                    slidesPerView: 1
                }
            } }, props.images.map(function (image, index) {
            return React.createElement(react_1.SwiperSlide, { key: index },
                React.createElement("img", { className: "expand-project-pic" //needs styling
                    , src: require("../../assets/img/" + image), alt: "screenshot" }));
        }))));
}
;
exports["default"] = ProjectSwiperJS;
