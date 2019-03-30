import * as React from "react";
import classNames from "classnames";
import IFlexProps from "./IFlexProps";

/**
 * Displays elements in a single row
 * @param props
 */
export default function Row(props: IFlexProps) {
	const {
		classes,
		children,
		inline,
		reverse,
		alignContent,
		alignItems,
		justify,
		...otherProps
	} = props;

	const effectiveClass = classNames(
		"acr-row",
		inline && "inline",
		reverse && "reverse",
		alignContent && `content-${alignContent}`,
		alignItems && `items-${alignItems}`,
		justify && `justify-${justify}`,
		classes
	);

	return (
		<div className={effectiveClass} {...otherProps}>
			{children}
		</div>
	);
}
