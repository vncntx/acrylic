import * as React from "react";
import { mount } from "enzyme";
import { Section, Text } from "../../../lib/acrylic";

describe("<Section />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<React.Fragment>
					<Section>
						<Text>Example</Text>
					</Section>
					<Section elevation={1}>
						<Text>Example</Text>
					</Section>
					<Section acrylic elevation={2}>
						<Text>Example</Text>
					</Section>
				</React.Fragment>
			)
		).toMatchSnapshot();
	});
});
