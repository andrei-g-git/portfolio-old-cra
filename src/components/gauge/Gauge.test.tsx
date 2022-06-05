import * as React from "react";
import { render, cleanup, screen} from "@testing-library/react";
import Gauge from "./Gauge";

afterEach(cleanup);

describe("<Gauge/>", () => {
    it("implements correct width style", () => {
        render(<Gauge width={200} maxWidth={400}/>)

        const maxGauge = screen.getByTestId("gauge-max-range");
        expect(maxGauge).toHaveStyle("width: 400px");

        const gaugeValue = screen.getByTestId("gauge-value");
        expect(gaugeValue).toHaveStyle("width: 200px");

        const gaugeNudge = screen.getByTestId("gauge-nudge");
        expect(gaugeNudge).toHaveStyle("left: 200px");
    });
});