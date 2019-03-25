import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";
import { ISectionProps } from "./Section";

/**
 * Breadcrumbs show a user's position in the app
 * @param props
 */
export default function Breadcrumb(props: ISectionProps) {
	const { classes, children, elevation, acrylic, ...otherProps } = props;

	const effectiveClass = classNames([
		"acr-breadcrumb",
		elevation && elevation > 0 ? `acr-elevated-${elevation}` : null,
		acrylic && "acr-acrylic",
		classes
	]);

	return (
		<nav className={effectiveClass} {...otherProps}>
			<ul>{children}</ul>
		</nav>
	);
}

/**
 * An item in a Breadcrumb trail
 * @param props
 */
export function Crumb(props: ILayoutProps) {
	const { children, classes, ...otherProps } = props;
	const effectiveClass = classNames(
		"acr-crumb",
		typeof children === "string" && "acr-li-text-only",
		classes
	);

	return (
		<li className={effectiveClass} {...otherProps}>
			{children}
		</li>
	);
}
