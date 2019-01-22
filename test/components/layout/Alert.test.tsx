import * as React from "react";
import { Alert, Button } from "../../../lib/acrylic";

describe("<Alert />", () => {
	it("Should match the latest snapshot", () => {
		expect(
			<React.Fragment>
				<Alert>Example</Alert>
				<Alert variant="primary">Example</Alert>
				<Alert variant="success">Example</Alert>
				<Alert variant="info">Example</Alert>
				<Alert variant="warning">Example</Alert>
				<Alert variant="danger">Example</Alert>
				<Alert controlComponent={<Button>Control</Button>}>Example</Alert>
			</React.Fragment>
		).toMatchSnapshot();
	});
});
