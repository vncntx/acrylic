import * as React from "react";
import { Text } from "../../../lib/acrylic";

describe("<Text />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			<React.Fragment>
				<Text>Example</Text>
				<Text>Example</Text>
				<Text>Example</Text>
				<Text inline bold>
					Example
				</Text>
				<Text inline italic>
					Example
				</Text>
				<Text inline underlined>
					Example
				</Text>
			</React.Fragment>
		).toMatchSnapshot();
	});
});
