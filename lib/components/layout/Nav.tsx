import * as React from "react";
import classNames from "classnames";
import { ISectionProps } from "./Section";

/**
 * A container for navigation elements
 * @param props
 */
export default function Nav(props: ISectionProps) {
	const { classes, children, elevation, acrylic, ...otherProps } = props;

	const effectiveClass = classNames([
		"acr-section",
		"acr-nav",
		elevation && elevation > 0 ? `acr-elevated-${elevation}` : null,
		acrylic && "acr-acrylic",
		classes
	]);

	return (
		<nav className={effectiveClass} {...otherProps}>
			{children}
		</nav>
	);
}
