import * as React from "react";
import { mount } from "enzyme";
import { IconButton, Icon } from "../../../lib/acrylic";

describe("<IconButton />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<React.Fragment>
					<IconButton src="icon.svg" />
					<IconButton src="icon.svg" />
					<IconButton src="icon.svg" />
				</React.Fragment>
			)
		).toMatchSnapshot();
	});
	it("Should support the 'click' event", () => {
		const spy = jest.fn();
		const btn = mount(<IconButton onClick={spy} src="icon.svg" />);
		btn.simulate("click");
		expect(spy).toBeCalled();
	});
});
