import * as React from "react";
import { mount } from "enzyme";
import { Loader } from "../../../lib/acrylic";

describe("<Loader />", () => {
	it("Should match the latest snapshot", () => {
		expect(
			mount(
				<>
					<Loader />
					<Loader variant="primary" />
					<Loader variant="success" />
					<Loader variant="warning" />
					<Loader variant="danger" />
				</>
			)
		);
	});
});
