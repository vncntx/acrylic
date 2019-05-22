import * as React from "react";
import { mount } from "enzyme";
import { Form, TextField } from "../../../lib/acrylic";

describe("<Form />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<React.Fragment>
					<Form>
						<TextField label="Field" />
					</Form>
					<Form elevation={1}>
						<TextField label="Field" />
					</Form>
					<Form acrylic elevation={2}>
						<TextField label="Field" />
					</Form>
				</React.Fragment>
			)
		).toMatchSnapshot();
	});
});
