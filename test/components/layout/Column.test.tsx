import * as React from "react";
import { mount } from "enzyme";
import { Column } from "../../../lib/acrylic";

describe("<Column />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<Column>
					<span>Row 1</span>
					<span>Row 2</span>
					<span>Row 3</span>
				</Column>
			)
		).toMatchSnapshot();
	});
});
