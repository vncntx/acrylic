import * as React from "react";
import { mount } from "enzyme";
import { Table, Cell, TableRow, TableSection } from "../../../lib/acrylic";

describe("<Table />", () => {
	it("Should match the latest snapshots", () => {
		expect(
			mount(
				<React.Fragment>
					<Table>
						<TableSection part="header">
							<TableRow>
								<Cell heading>Heading</Cell>
								<Cell heading>Heading</Cell>
							</TableRow>
						</TableSection>
						<TableSection part="body">
							<TableRow>
								<Cell>Item</Cell>
								<Cell>Item</Cell>
							</TableRow>
							<TableRow>
								<Cell>Item</Cell>
								<Cell>Item</Cell>
							</TableRow>
						</TableSection>
						<TableSection part="footer">
							<TableRow>
								<Cell>Item</Cell>
								<Cell>Item</Cell>
							</TableRow>
						</TableSection>
					</Table>
				</React.Fragment>
			)
		).toMatchSnapshot();
	});
});
