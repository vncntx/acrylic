import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";

export interface ISectionProps extends ILayoutProps {
	elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	acrylic?: boolean;
}

export default function Section(props: ISectionProps) {
	const { classes, children, elevation, acrylic, ...otherProps } = props;

	const effectiveClass = classNames([
		"acr-section",
		elevation && elevation > 0 ? `acr-elevated-${elevation}` : null,
		acrylic && "acr-acrylic",
		classes
	]);

	return (
		<section className={effectiveClass} {...otherProps}>
			{children}
		</section>
	);
}
