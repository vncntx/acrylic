import * as React from "react";
import { shallow } from "enzyme";
import { Label } from "../../../lib/acrylic";

describe("<Label />", () => {
	it("Should match the latest snapshots", () => {
		expect(shallow(<Label>Label</Label>)).toMatchSnapshot();
	});
});
