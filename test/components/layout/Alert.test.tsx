import * as React from "react";
import { mount } from "enzyme";
import { Alert, Button } from "../../../lib/acrylic";

describe("<Alert />", () => {
	it("Should match the latest snapshot", () => {
		expect(
			mount(
				<React.Fragment>
					<Alert>Example</Alert>
					<Alert variant="primary">Example</Alert>
					<Alert variant="success">Example</Alert>
					<Alert variant="info">Example</Alert>
					<Alert variant="warning">Example</Alert>
					<Alert variant="danger">Example</Alert>
					<Alert controlComponent={() => <Button>Control</Button>}>
						Example
					</Alert>
				</React.Fragment>
			)
		).toMatchSnapshot();
	});
	it("Should be dismissible", () => {
		const alertComponent = mount(<Alert>Example</Alert>);
		alertComponent
			.find(Button)
			.at(0)
			.simulate("click");
		expect(alertComponent.hasClass("acr-hidden"));
	});
});
