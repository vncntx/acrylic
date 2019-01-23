import * as React from "react";
import ITextProps, { IPureTextProps, getEffectiveClass } from "./ITextProps";

export default function Text(props: ITextProps) {
	const [pureProps, effectiveClass] = getEffectiveClass(props, "acr-text") as [
		IPureTextProps,
		string
	];
	const { children, ...otherProps } = pureProps;
	const { inline } = props;
	if (inline) {
		return (
			<span className={effectiveClass} {...otherProps}>
				{children}
			</span>
		);
	} else {
		return (
			<p className={effectiveClass} {...otherProps}>
				{children}
			</p>
		);
	}
}
