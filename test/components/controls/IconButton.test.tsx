import * as React from "react";
import { mount } from "enzyme";
import { IconButton, Icon } from "../../../lib/acrylic";

describe("<IconButton />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<React.Fragment>
					<IconButton>
						<Icon src="icon.svg" />
					</IconButton>
					<IconButton>
						<Icon src="icon.svg" />
					</IconButton>
					<IconButton>
						<Icon src="icon.svg" />
					</IconButton>
				</React.Fragment>
			)
		).toMatchSnapshot();
	});
	it("Should support the 'click' event", () => {
		const spy = jest.fn();
		const btn = mount(
			<IconButton onClick={spy}>
				<Icon src="icon.svg" />
			</IconButton>
		);
		btn.simulate("click");
		expect(spy).toBeCalled();
	});
});
