import * as React from "react";
import { mount } from "enzyme";
import { Icon, Emblem } from "../../../lib/acrylic";

describe("<Icon />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<React.Fragment>
					<Icon>{Emblem.Accept}</Icon>
					<Icon>{Emblem.Backspace}</Icon>
					<Icon>{Emblem.Calculator}</Icon>
					<Icon src="image.svg" />
				</React.Fragment>
			)
		).toMatchSnapshot();
	});
});
