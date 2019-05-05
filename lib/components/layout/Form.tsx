import * as React from "react";
import classNames from "classnames";
import { ISectionProps } from "./Section";
import { IFormEventProps } from "../IEventProps";

export interface IFormProps extends ISectionProps, IFormEventProps {
	action?: string;
	method?: "GET" | "POST";
	inline?: boolean;
}

/**
 * A form is a container for one or more input fields
 */
export default function Form(props: IFormProps) {
	const {
		classes,
		children,
		elevation,
		acrylic,
		inline,
		...otherProps
	} = props;

	const effectiveClass = classNames([
		"acr-form",
		"acr-section",
		elevation && elevation > 0 ? `acr-elevated-${elevation}` : null,
		acrylic && "acr-acrylic",
		inline && "inline",
		classes
	]);

	return (
		<form className={effectiveClass} {...otherProps}>
			{children}
		</form>
	);
}
