import * as React from "react";
import { mount, shallow } from "enzyme";
import { Options, Option } from "../../../lib/acrylic";

describe("<Options />", () => {
	it("Should match the latest snapshot", () => {
		expect(
			mount(
				<>
					<Options label="Options" required selection={2}>
						<Option value={1} label="Checkbox" />
						<Option value={2} label="Disabled" disabled />
						<Option value={3} label="Primary" variant="primary" />
						<Option value={4} label="Success" variant="success" />
						<Option value={5} label="Warning" variant="warning" />
						<Option value={6} label="Danger" variant="danger" />
					</Options>
					<Options readOnly selection={1} label="Options">
						<Option value={1} label="Choice" />
						<Option value={2} label="Choice" />
						<Option value={3} label="Choice" />
					</Options>
				</>
			)
		);
	});
	describe("When the selection changes", () => {
		it("Should trigger the onSelect handler", () => {
			const spy = jest.fn();
			const optionsGroup = mount(
				<Options selection={2} onSelect={spy}>
					<Option value={1} />
					<Option value={2} />
					<Option value={3} />
				</Options>
			);
			optionsGroup
				.find(".input")
				.first()
				.simulate("change");
			expect(spy).toHaveBeenCalledWith(2, 1);
		});
	});
});
