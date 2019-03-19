import * as React from "react";
import { mount } from "enzyme";
import { Card, CardBody, Image, Title, Text } from "../../../lib/acrylic";

describe("<Card />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<React.Fragment>
					<Card>
						<Image src="image.webp" />
						<CardBody>
							<Title>Card</Title>
							<Text>This is a card.</Text>
						</CardBody>
					</Card>
				</React.Fragment>
			)
		).toMatchSnapshot();
	});
});
