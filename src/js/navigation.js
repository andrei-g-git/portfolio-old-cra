"use strict";
exports.__esModule = true;
exports.PortHeight = exports.ScreenType = exports.scrollToHeight = exports.scrollHome = void 0;
exports.scrollHome = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};
exports.scrollToHeight = function (height, isSmooth) {
    if (height >= 0) {
        window.scrollTo({
            top: height,
            left: 0,
            behavior: isSmooth ? "smooth" : "auto"
        });
    }
};
var ScreenType = /** @class */ (function () {
    function ScreenType(mobileWidth) {
        var _this = this;
        this.forMobile = function (window) {
            return window.innerHeight <= _this.mobile;
        };
        this.mobile = mobileWidth;
    }
    return ScreenType;
}());
exports.ScreenType = ScreenType;
var PortHeight = /** @class */ (function () {
    function PortHeight(desktopHeights, mobileHeights) {
        var _this = this;
        this.getPageHeightResponsive = function (name, mobileBreakpoint) {
            var heights = _this.desktopHeights;
            if (window.innerWidth <= mobileBreakpoint) {
                heights = _this.mobileHeights;
            }
            var numericHeights = heights.map(function (height) { return _this.convertViewportHeightToNumber(height); });
            return _this.determineHeight(name, heights);
        };
        this.convertViewportHeightToNumber = function (viewportValue) {
            var pixelNumericValue = 0;
            if (viewportValue.length > 0 && viewportValue.includes("vh")) {
                var viewportPercent = parseInt(viewportValue.replace("vh", "")) / 100;
                pixelNumericValue = window.innerHeight * viewportPercent; //maybe I should pass the innerHeight as a value
            }
            return pixelNumericValue;
        };
        this.desktopHeights = desktopHeights;
        this.mobileHeights = mobileHeights;
    }
    PortHeight.prototype.determineHeight = function (name, heights) {
        return 123;
    };
    return PortHeight;
}());
exports.PortHeight = PortHeight;
