import * as React from "react";
import { mount } from "enzyme";
import { Folder, Text, Button } from "../../../lib/acrylic";

describe("<Folder />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<Folder>
					<Text>Summary</Text>
					<Text>Details</Text>
					<Button>Expand</Button>
					<Button>Collapse</Button>
				</Folder>
			)
		).toMatchSnapshot();
	});
});
