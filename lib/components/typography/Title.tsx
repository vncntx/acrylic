import * as React from "react";
import classNames from "classnames";
import ITextProps from "./ITextProps";

export interface ITitleProps extends ITextProps {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Title(props: ITitleProps) {
	const {
		classes,
		level,
		inline,
		bold,
		italic,
		underlined,
		children,
		...otherProps
	} = props;
	const effectiveClass = classNames("acr-title", classes, {
		"acr-inline": inline,
		"acr-bold": bold,
		"acr-italic": italic,
		"acr-underlined": underlined
	});
	switch (level) {
		case 1:
			return (
				<h1 className={effectiveClass} {...otherProps}>
					{children}
				</h1>
			);
		case 2:
			return (
				<h2 className={effectiveClass} {...otherProps}>
					{children}
				</h2>
			);
		case 3:
			return (
				<h3 className={effectiveClass} {...otherProps}>
					{children}
				</h3>
			);
		case 4:
			return (
				<h4 className={effectiveClass} {...otherProps}>
					{children}
				</h4>
			);
		case 5:
			return (
				<h5 className={effectiveClass} {...otherProps}>
					{children}
				</h5>
			);
		default:
			return (
				<h6 className={effectiveClass} {...otherProps}>
					{children}
				</h6>
			);
	}
}
