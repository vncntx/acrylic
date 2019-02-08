import * as React from "react";
import { mount } from "enzyme";
import { Row } from "../../../lib/acrylic";

describe("<Row />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<Row>
					<div>Column 1</div>
					<div>Column 2</div>
					<div>Column 3</div>
				</Row>
			)
		).toMatchSnapshot();
	});
});
