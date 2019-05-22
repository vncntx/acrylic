import * as React from "react";
import ITextProps, { IPureTextProps, getEffectiveClass } from "./ITextProps";

export interface ITitleProps extends IPureTitleProps, ITextProps {}

export interface IPureTitleProps extends IPureTextProps {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Displays text as a heading
 * @param props
 */
export default function Title(props: ITitleProps) {
	const [pureProps, effectiveClass] = getEffectiveClass(props, "acr-title") as [
		IPureTitleProps,
		string
	];
	const { level, children, classes, ...otherProps } = pureProps;
	return React.createElement(
		`h${level || 6}`,
		{
			className: effectiveClass,
			...otherProps
		},
		children
	);
}
