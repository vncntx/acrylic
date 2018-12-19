import * as React from "react";
import Button from "../../lib/components/controls/Button";

describe("<Button />", () => {
	it("Should match the latest snapshot", () => {
		expect(<Button>A Button</Button>).toMatchSnapshot();
	});
});
