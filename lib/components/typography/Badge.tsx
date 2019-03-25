import * as React from "react";
import classNames from "classnames";
import ITextProps from "./ITextProps";
import { IVariantProps } from "../Variant";

export interface IBadgeProps extends ITextProps, IVariantProps {
	content: React.ReactText | React.ReactElement<any>;
}

/**
 * A short piece of text designed to grab the user's attention
 * @param props
 */
export default function Badge(props: IBadgeProps) {
	const { classes, content, children, variant, ...otherProps } = props;

	const hasChild = Boolean(children);

	const effectiveClass = classNames(
		"acr-badge",
		hasChild && "acr-super",
		variant && `acr-variant-${variant}`,
		classes
	);

	if (!hasChild) {
		return (
			<span className={effectiveClass} {...otherProps}>
				{content}
			</span>
		);
	}

	return (
		<div className="acr-badge-container">
			{children}
			<span className={effectiveClass} {...otherProps}>
				{content}
			</span>
		</div>
	);
}
