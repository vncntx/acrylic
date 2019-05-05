import * as React from "react";
import { mount } from "enzyme";
import { Link } from "../../../lib/acrylic";

describe("<Link />", () => {
	it("Should match the latest snapshot", () => {
		expect(
			mount(
				<>
					<Link to="#">item</Link>
					<Link to="#" variant="primary">
						item
					</Link>
					<Link to="#" variant="success">
						item
					</Link>
					<Link to="#" variant="warning">
						item
					</Link>
					<Link to="#" variant="danger">
						item
					</Link>
				</>
			)
		).toMatchSnapshot();
	});
});
