"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("@testing-library/react");
var Gauge_1 = require("./Gauge");
afterEach(react_1.cleanup);
describe("<Gauge/>", function () {
    it("implements correct width style", function () {
        react_1.render(React.createElement(Gauge_1["default"], { width: 200, maxWidth: 400 }));
        var maxGauge = react_1.screen.getByTestId("gauge-max-range");
        expect(maxGauge).toHaveStyle("width: 400px");
        var gaugeValue = react_1.screen.getByTestId("gauge-value");
        expect(gaugeValue).toHaveStyle("width: 200px");
        var gaugeNudge = react_1.screen.getByTestId("gauge-nudge");
        expect(gaugeNudge).toHaveStyle("left: 200px");
    });
});
