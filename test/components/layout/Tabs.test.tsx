import * as React from "react";
import { mount } from "enzyme";
import { Tabs, Tab } from "../../../lib/acrylic";

describe("<Tabs />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<Tabs>
					<Tab>Tab 1</Tab>
					<Tab>Tab 2</Tab>
					<Tab>Tab 3</Tab>
				</Tabs>
			)
		).toMatchSnapshot();
	});
	describe("onTabChange", () => {
		it("Should be called when a tab is changed", () => {
			const spy = jest.fn();
			const tabs = mount(
				<Tabs onTabChange={spy}>
					<Tab>Tab 1</Tab>
					<Tab>Tab 2</Tab>
					<Tab>Tab 3</Tab>
				</Tabs>
			);

			tabs
				.find(Tab)
				.at(0)
				.simulate("click");

			expect(spy).toBeCalledWith(0);
		});
	});
});
