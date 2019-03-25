import * as React from "react";
import { mount } from "enzyme";
import { Breadcrumb, Crumb } from "../../../lib/acrylic";

describe("<Breadcrumb />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<Breadcrumb>
					<Crumb>Item</Crumb>
					<Crumb>Item</Crumb>
					<Crumb>Item</Crumb>
				</Breadcrumb>
			)
		).toMatchSnapshot();
	});
});
