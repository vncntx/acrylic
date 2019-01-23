import ITextProps, {
	getEffectiveClass
} from "../../../lib/components/typography/ITextProps";

describe("getEffectiveClass", () => {
	const testProps: ITextProps = {
		inline: true,
		bold: true,
		italic: true,
		underlined: true,
		id: "test"
	};

	describe("Return value", () => {
		const [returnedProps, returnedClasses] = getEffectiveClass(
			testProps,
			"base-class"
		);

		it("Should return non-style props", () => {
			expect(returnedProps).toMatchObject({
				id: testProps.id
			});
		});
		it("Should return class names based on props", () => {
			expect(returnedClasses.split(" ")).toEqual(
				expect.arrayContaining([
					"acr-inline",
					"acr-bold",
					"acr-italic",
					"acr-underlined",
					"base-class"
				])
			);
		});
	});
});
