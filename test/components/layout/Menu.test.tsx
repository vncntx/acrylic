import * as React from "react";
import { mount } from "enzyme";
import { Menu, MenuItem, MenuHeading, SubMenu } from "../../../lib/acrylic";

describe("<Menu />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<Menu>
					<MenuItem>Item</MenuItem>
					<MenuItem>Item</MenuItem>
					<MenuItem disabled>Item</MenuItem>
					<SubMenu>
						<MenuHeading>More</MenuHeading>
						<MenuItem>Item</MenuItem>
						<MenuItem>Item</MenuItem>
					</SubMenu>
					<MenuItem>Item</MenuItem>
				</Menu>
			)
		).toMatchSnapshot();
	});
});

describe("<SubMenu />", () => {
	it("Should open/close when the heading is clicked", () => {
		const sub = mount(
			<SubMenu>
				<MenuHeading>More</MenuHeading>
				<MenuItem>Item</MenuItem>
				<MenuItem>Item</MenuItem>
			</SubMenu>
		);
		expect(sub.find(".acr-closed")).toHaveLength(1);
		sub.find(MenuHeading).simulate("click");
		expect(sub.find(".acr-closed")).toHaveLength(0);
		sub.find(MenuHeading).simulate("click");
		expect(sub.find(".acr-closed")).toHaveLength(1);
	});
});
