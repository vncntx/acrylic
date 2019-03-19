import * as React from "react";
import { mount } from "enzyme";
import { Image, Caption } from "../../../lib/acrylic";

describe("<Image />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<Image src="image.webp">
					<Caption>This is a description.</Caption>
				</Image>
			)
		).toMatchSnapshot();
	});
});
