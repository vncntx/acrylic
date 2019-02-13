import * as React from "react";
import { mount } from "enzyme";
import { Button } from "../../../lib/acrylic";

describe("<Button />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<React.Fragment>
					<Button>Button</Button>
					<Button variant="primary">Primary</Button>
					<Button variant="success">Success</Button>
					<Button variant="warning">Warning</Button>
					<Button variant="danger">Danger</Button>
					<Button disabled>Disabled</Button>
				</React.Fragment>
			)
		).toMatchSnapshot();
	});
	it("Should support the 'click' event", () => {
		const spy = jest.fn();
		const buttonComponent = mount(<Button onClick={spy} />);
		buttonComponent.simulate("click");
		expect(spy).toBeCalled();
	});
});
