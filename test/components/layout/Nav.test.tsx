import * as React from "react";
import { mount } from "enzyme";
import { Nav, Menu, MenuItem } from "../../../lib/acrylic";

describe("<Nav />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<Nav>
					<Menu>
						<MenuItem>Item</MenuItem>
						<MenuItem>Item</MenuItem>
						<MenuItem>Item</MenuItem>
					</Menu>
				</Nav>
			)
		).toMatchSnapshot();
	});
});
