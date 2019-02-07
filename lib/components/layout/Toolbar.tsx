import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";

export interface IToolbarProps extends ILayoutProps {
	vertical?: boolean;
}

/**
 * A container that lays out buttons in a single compact row or column
 * @param props
 */
export default function Toolbar(props: IToolbarProps) {
	const { classes, children, vertical, ...otherProps } = props;

	const effectiveClasses = classNames(
		"acr-toolbar",
		vertical && "acr-vertical",
		classes
	);

	return (
		<section className={effectiveClasses} {...otherProps}>
			{children}
		</section>
	);
}
