import * as React from "react";
import ITextProps, { IPureTextProps, getEffectiveClass } from "./ITextProps";

/**
 * A label for an input field
 * @param props
 */
export default function Label(props: ITextProps) {
	const [pureProps, effectiveClass] = getEffectiveClass(props, "acr-label") as [
		IPureTextProps,
		string
	];
	const { children, ...otherProps } = pureProps;

	return (
		<label className={effectiveClass} {...otherProps}>
			{children}
		</label>
	);
}
