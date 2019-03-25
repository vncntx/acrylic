import * as React from "react";
import { mount } from "enzyme";
import { Badge, Text } from "../../../lib/acrylic";

describe("<Badge />", () => {
	it("Should match the latest snapshot", () => {
		expect(
			mount(
				<>
					<Badge content="badge">
						<Text>Text</Text>
					</Badge>
					<Badge content="badge" />
				</>
			)
		).toMatchSnapshot();
	});
});
