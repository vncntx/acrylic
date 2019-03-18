import * as React from "react";
import classNames from "classnames";
import { ISectionProps } from "./Section";

export interface INavProps extends ISectionProps {
	vertical?: boolean;
}

/**
 * A container for navigation elements
 * @param props
 */
export default function Nav(props: INavProps) {
	const {
		classes,
		children,
		elevation,
		acrylic,
		vertical = false,
		...otherProps
	} = props;

	const effectiveClass = classNames([
		"acr-section",
		"acr-nav",
		elevation && elevation > 0 ? `acr-elevated-${elevation}` : null,
		acrylic && "acr-acrylic",
		vertical && "acr-nav-vertical",
		classes
	]);

	return (
		<nav className={effectiveClass} {...otherProps}>
			{children}
		</nav>
	);
}
