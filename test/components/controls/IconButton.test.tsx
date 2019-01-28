import * as React from "react";
import { mount } from "enzyme";
import { IconButton, Icon, Emblem } from "../../../lib/acrylic";

describe("<IconButton />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<React.Fragment>
					<IconButton>
						<Icon>{Emblem.Previous}</Icon>
					</IconButton>
					<IconButton>
						<Icon>{Emblem.Next}</Icon>
					</IconButton>
					<IconButton>
						<Icon>{0xe72c}</Icon>
					</IconButton>
				</React.Fragment>
			)
		).toMatchSnapshot();
	});
	it("Should support the 'click' event", () => {
		const spy = jest.fn();
		const btn = mount(
			<IconButton onClick={spy}>
				<Icon>{0xe72c}</Icon>
			</IconButton>
		);
		btn.simulate("click");
		expect(spy).toBeCalled();
	});
});
