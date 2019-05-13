import * as React from "react";
import { mount } from "enzyme";
import { Select, Option, MenuItem } from "../../../lib/acrylic";

describe("<Select />", () => {
	it("Should match the latest snapshot", () => {
		expect(
			mount(
				<>
					<Select label="Select" selection={3}>
						<Option value={1} label="Select" />
						<Option value={2} label="Disabled" disabled />
						<Option value={3} label="Primary" variant="primary" />
						<Option value={4} label="Success" variant="success" />
						<Option value={5} label="Warning" variant="warning" />
						<Option value={6} label="Danger" variant="danger" />
					</Select>
					<Select label="Required" required>
						<Option value={1} label="Acamar" />
						<Option value={2} label="Acubens" />
						<Option value={3} label="Polaris" />
					</Select>
					<Select label="Disabled" disabled>
						<Option value={1} label="Acamar" />
						<Option value={2} label="Acubens" />
						<Option value={3} label="Polaris" />
					</Select>
					<Select label="Primary" variant="primary">
						<Option value={1} label="Acamar" />
						<Option value={2} label="Acubens" />
						<Option value={3} label="Polaris" />
					</Select>
					<Select label="Success" variant="success">
						<Option value={1} label="Acamar" />
						<Option value={2} label="Acubens" />
						<Option value={3} label="Polaris" />
					</Select>
					<Select label="Warning" variant="warning">
						<Option value={1} label="Acamar" />
						<Option value={2} label="Acubens" />
						<Option value={3} label="Polaris" />
					</Select>
					<Select label="Danger" variant="danger">
						<Option value={1} label="Acamar" />
						<Option value={2} label="Acubens" />
						<Option value={3} label="Polaris" />
					</Select>
					<Select label="Placeholder" placeholder="Placeholder">
						<Option value={1} label="Acamar" />
						<Option value={2} label="Acubens" />
						<Option value={3} label="Polaris" />
					</Select>
					<Select label="Invalid" invalid comment="This field has an error">
						<Option value={1} label="Acamar" />
						<Option value={2} label="Acubens" />
						<Option value={3} label="Polaris" />
					</Select>
					<Select
						label="Comment"
						variant="success"
						comment="This field is correct"
					>
						<Option value={1} label="Acamar" />
						<Option value={2} label="Acubens" />
						<Option value={3} label="Polaris" />
					</Select>
					<Select readOnly selection={1} label="Select">
						<Option value={1} label="Acamar" />
						<Option value={2} label="Acubens" />
						<Option value={3} label="Polaris" />
					</Select>
				</>
			)
		);
	});
	describe("When the selection changes", () => {
		it("Should trigger the onSelect handler", () => {
			const spy = jest.fn();
			const optionsGroup = mount(
				<Select selection={2} onSelect={spy}>
					<Option value={1} label="Acamar" />
					<Option value={2} label="Acubens" />
					<Option value={3} label="Polaris" />
				</Select>
			);
			optionsGroup
				.find(".acr-menu-item")
				.first()
				.simulate("mousedown");
			expect(spy).toHaveBeenCalledWith(2, 1);
		});
	});
});
