import * as React from "react";
import { Button } from "../../../lib/acrylic";

describe("<Button />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			<React.Fragment>
				<Button>Button</Button>
				<Button variant="primary">Primary</Button>
				<Button variant="success">Success</Button>
				<Button variant="info">Info</Button>
				<Button variant="warning">Warning</Button>
				<Button variant="danger">Danger</Button>
				<Button disabled>Disabled</Button>
			</React.Fragment>
		).toMatchSnapshot();
	});
});
