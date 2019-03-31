import * as React from "react";
import classNames from "classnames";
import IFlexProps from "./IFlexProps";

/**
 * Displays elements in a single column
 * @param props
 */
export default function Column(props: IFlexProps) {
	const {
		classes,
		children,
		inline,
		reverse,
		alignSelf,
		alignContent,
		alignItems,
		justify,
		...otherProps
	} = props;

	const effectiveClass = classNames(
		"acr-col",
		inline && "inline",
		reverse && "reverse",
		justify && `justify-${justify}`,
		alignSelf && `self-${alignSelf}`,
		alignItems && `items-${alignItems}`,
		alignContent && `content-${alignContent}`,
		classes
	);

	return (
		<div className={effectiveClass} {...otherProps}>
			{children}
		</div>
	);
}
