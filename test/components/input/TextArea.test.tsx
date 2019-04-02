import * as React from "react";
import { mount } from "enzyme";
import { TextArea } from "../../../lib/acrylic";

describe("<TextArea />", () => {
	it("Should match the latest snapshot", () => {
		expect(
			mount(
				<>
					<TextArea label="TextField" />
					<TextArea label="Required" required />
					<TextArea label="Disabled" disabled />
					<TextArea label="Success" variant="success" />
					<TextArea label="Warning" variant="warning" />
					<TextArea label="Danger" variant="danger" />
					<TextArea label="TextField" placeholder="Placeholder" />
					<TextArea label="Invalid" invalid comment="This field has an error" />
					<TextArea
						label="Comment"
						variant="success"
						comment="This field is correct"
					/>
					<TextArea
						readOnly
						label="Invalid"
						invalid
						comment="This field has errors"
					/>
				</>
			)
		);
	});
	it("Should support the 'change' event", () => {
		const spy = jest.fn();
		const textField = mount(<TextArea onChange={spy} />);
		textField.find(".input").simulate("change");
		expect(spy).toBeCalled();
	});
});
