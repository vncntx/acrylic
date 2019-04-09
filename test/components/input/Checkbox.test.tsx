import * as React from "react";
import { mount } from "enzyme";
import { Checkbox } from "../../../lib/acrylic";

describe("<Checkbox />", () => {
	it("Should match the latest snapshot", () => {
		expect(
			mount(
				<>
					<Checkbox label="Checkbox" />
					<Checkbox label="Checkbox" value={true} />
					<Checkbox label="Required" required />
					<Checkbox label="Disabled" disabled />
					<Checkbox label="Invalid" invalid />
					<Checkbox label="Primary" variant="primary" />
					<Checkbox label="Success" variant="success" />
					<Checkbox label="Warning" variant="warning" />
					<Checkbox label="Danger" variant="danger" />
					<Checkbox
						label="Comment"
						variant="success"
						comment="This field is correct"
					/>
				</>
			)
		);
	});
	it("Should support the 'change' event", () => {
		const spy = jest.fn();
		const checkbox = mount(<Checkbox onChange={spy} />);
		checkbox.find(".input").simulate("change");
		expect(spy).toBeCalled();
	});
});
