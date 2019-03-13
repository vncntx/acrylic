import * as React from "react";
import { mount } from "enzyme";
import { Card, CardBody, CardImage, Title, Text } from "../../../lib/acrylic";

describe("<Card />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<React.Fragment>
					<Card>
						<CardImage src="image" />
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
