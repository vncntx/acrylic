import * as React from "react";
import { Title } from "../../../lib/acrylic";

describe("<Title />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			<React.Fragment>
				<Title level={1}>Chapter</Title>
				<Title level={2}>Chapter</Title>
				<Title level={3}>Chapter</Title>
				<Title level={4}>Chapter</Title>
				<Title level={5}>Chapter</Title>
				<Title level={6}>Chapter</Title>
				<Title inline>Chapter</Title>
				<Title bold>Chapter</Title>
				<Title italic>Chapter</Title>
				<Title underlined>Chapter</Title>
			</React.Fragment>
		).toMatchSnapshot();
	});
});
