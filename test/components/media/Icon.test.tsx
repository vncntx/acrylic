import * as React from "react";
import { mount } from "enzyme";
import { Icon } from "../../../lib/acrylic";

describe("<Icon />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<React.Fragment>
					<Icon src="icon.svg" />
					<Icon src="icon.svg" />
				</React.Fragment>
			)
		).toMatchSnapshot();
	});
});
