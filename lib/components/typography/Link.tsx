import * as React from "react";
import classNames from "classnames";
import { IPureTextProps } from "./ITextProps";
import { IVariantProps } from "../Variant";

export interface ILinkProps extends IPureTextProps, IVariantProps {
	to?: string;
}

/**
 * An anchor link
 * @param props
 */
export default function Link(props: ILinkProps) {
	const { classes, children, to, variant, ...otherProps } = props;

	const effectiveClass = classNames(
		"acr-link",
		variant && `acr-variant-${variant}`,
		classes
	);

	return (
		<a href={to} className={effectiveClass} {...otherProps}>
			{children}
		</a>
	);
}
