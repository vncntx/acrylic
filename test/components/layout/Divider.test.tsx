import * as React from "react";
import { mount } from "enzyme";
import { Divider } from "../../../lib/acrylic";

describe("<Divider />", () => {
	it("Should match the latest snapshots", () => {
		expect(mount(<Divider />)).toMatchSnapshot();
	});
});
