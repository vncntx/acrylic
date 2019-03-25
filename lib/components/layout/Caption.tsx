import * as React from "react";
import classNames from "classnames";
import { ISectionProps } from "./Section";

export interface ICaptionProps extends ISectionProps {
	top?: boolean;
}

/**
 * A brief description or explanation for a figure
 * @param props
 */
export default function Caption(props: ICaptionProps) {
	const {
		classes,
		children,
		elevation,
		acrylic,
		top = false,
		...otherProps
	} = props;

	const effectiveClass = classNames([
		"acr-section",
		"acr-caption",
		top ? "acr-top" : "acr-bottom",
		elevation && elevation > 0 ? `acr-elevated-${elevation}` : null,
		acrylic && "acr-acrylic",
		classes
	]);

	return (
		<figcaption className={effectiveClass} {...otherProps}>
			{children}
		</figcaption>
	);
}
