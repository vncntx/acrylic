import * as React from "react";
import { Toolbar, Button } from "../../../lib/acrylic";

describe("<Toolbar />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			<React.Fragment>
				<Toolbar>
					<Button>A</Button>
					<Button>B</Button>
					<Button>C</Button>
				</Toolbar>
				<Toolbar vertical>
					<Button>A</Button>
					<Button>B</Button>
					<Button>C</Button>
				</Toolbar>
			</React.Fragment>
		).toMatchSnapshot();
	});
});
