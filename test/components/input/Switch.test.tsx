import * as React from "react";
import { mount } from "enzyme";
import { Switch } from "../../../lib/acrylic";

describe("<Switch />", () => {
	it("Should match the latest snapshot", () => {
		expect(
			mount(
				<>
					<Switch label="Switch" />
					<Switch label="Switch" on />
					<Switch label="Required" required />
					<Switch label="Disabled" disabled />
					<Switch label="Invalid" invalid />
					<Switch label="Primary" variant="primary" />
					<Switch label="Success" variant="success" />
					<Switch label="Warning" variant="warning" />
					<Switch label="Danger" variant="danger" />
					<Switch
						label="Comment"
						variant="success"
						comment="This field is correct"
					/>
				</>
			)
		);
	});
});
