import * as React from "react";
import { mount, shallow } from "enzyme";
import { Text } from "../../../lib/acrylic";

describe("<Text />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
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
			)
		).toMatchSnapshot();
	});
	describe("When not inline", () => {
		it("Should render a <p />", () => {
			expect(shallow(<Text />).find("p")).toHaveLength(1);
		});
	});
	describe("When inline", () => {
		it("Should render a <span />", () => {
			expect(shallow(<Text inline />).find("span")).toHaveLength(1);
		});
	});
});
