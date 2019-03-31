import * as React from "react";
import { mount } from "enzyme";
import { TextField } from "../../../lib/acrylic";

describe("<TextField />", () => {
	it("Should match the latest snapshot", () => {
		expect(
			mount(
				<>
					<TextField />
					<TextField label="Label" placeholder="Placeholder" />
					<TextField label="Label" placeholder="Placeholder" required />
					<TextField label="Label" placeholder="Placeholder" disabled />
					<TextField label="Label" placeholder="Placeholder" readOnly />
					<TextField label="Label" placeholder="Placeholder" type="email" />
					<TextField label="Label" placeholder="Placeholder" type="password" />
					<TextField
						label="Label"
						placeholder="Placeholder"
						variant="primary"
					/>
					<TextField
						label="Label"
						placeholder="Placeholder"
						variant="success"
					/>
					<TextField
						label="Label"
						placeholder="Placeholder"
						variant="warning"
					/>
					<TextField label="Label" placeholder="Placeholder" variant="danger" />
				</>
			)
		);
	});
	it("Should support the 'change' event", () => {
		const spy = jest.fn();
		const textField = mount(<TextField onChange={spy} />);
		textField.find("input").simulate("change");
		expect(spy).toBeCalled();
	});
});
