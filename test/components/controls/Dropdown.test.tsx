import * as React from "react";
import { mount } from "enzyme";
import { Dropdown, Button, Menu, MenuItem } from "../../../lib/acrylic";

describe("<Dropdown />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<Dropdown>
					<Button>Dropdown</Button>
					<Menu>
						<MenuItem>Cut</MenuItem>
						<MenuItem>Copy</MenuItem>
						<MenuItem>Paste</MenuItem>
						<MenuItem>Undo</MenuItem>
						<MenuItem disabled>Redo</MenuItem>
					</Menu>
				</Dropdown>
			)
		).toMatchSnapshot();
	});
	it("Should show/hide the menu when clicked", () => {
		const dropdown = mount(
			<Dropdown>
				<Button>Dropdown</Button>
				<Menu />
			</Dropdown>
		);
		expect(
			dropdown
				.find(Menu)
				.parent()
				.hasClass("acr-hidden")
		).toBe(true);
		dropdown.find(Button).simulate("focus");
		expect(
			dropdown
				.find(Menu)
				.parent()
				.hasClass("acr-hidden")
		).toBe(false);
		dropdown.find(Button).simulate("focus");
		expect(
			dropdown
				.find(Menu)
				.parent()
				.hasClass("acr-hidden")
		).toBe(true);
	});
});
