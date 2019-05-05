import * as React from "react";
import { MenuItem } from "../layout/Menu";
import { IOptionProps } from "./Option";

/**
 * Creates a MenuItem crom Option props
 */
export function menuItemFromOption(props: IOptionProps) {
	const { label, value, ...otherClasses } = props;

	return (
		<MenuItem data-value={value} {...otherClasses}>
			{label}
		</MenuItem>
	);
}
