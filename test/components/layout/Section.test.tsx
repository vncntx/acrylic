import * as React from "react";
import { Section, Text } from "../../../lib/acrylic";

describe("<Section />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			<Section acrylic elevation={2}>
				<Text>Example</Text>
			</Section>
		).toMatchSnapshot();
	});
});
