import * as React from "react";
import { mount } from "enzyme";
import { Progress } from "../../../lib/acrylic";

describe("<Progress />", () => {
	it("Should match the latest snapshot", () => {
		expect(
			mount(
				<>
					<Progress />
					<Progress value={10} max={100} />
					<Progress value={20} max={100} variant="primary" />
					<Progress value={30} max={100} variant="success" />
					<Progress value={40} max={100} variant="warning" />
					<Progress indeterminate />
				</>
			)
		);
	});
});
