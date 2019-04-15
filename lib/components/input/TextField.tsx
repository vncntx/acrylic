import * as React from "react";
import classNames from "classnames";
import IFieldProps from "./IFieldProps";
import IFieldEventProps from "./IFieldEventProps";
import Text from "../typography/Text";
import Label from "../typography/Label";

export interface ITextFieldProps extends IFieldProps, IFieldEventProps {
	children?: null | undefined;
	value?: string;
	placeholder?: string;
	type?: "text" | "email" | "password";
}

export default function TextField(props: ITextFieldProps) {
	const {
		classes,
		label,
		value,
		comment,
		variant,
		readOnly,
		type = "text",
		required = false,
		disabled = false,
		invalid = false,
		autoComplete = true,
		...otherProps
	} = props;

	const effectiveClass = classNames(
		"acr-text-field",
		variant && `acr-variant-${variant}`,
		invalid && "invalid",
		required && "required",
		readOnly && "read-only",
		classes
	);

	return (
		<div className={effectiveClass}>
			{label && <Label>{label}</Label>}
			<input
				type={type}
				value={value}
				className="input"
				required={required}
				disabled={disabled}
				readOnly={readOnly}
				autoComplete={autoComplete ? "on" : "off"}
				{...otherProps}
			/>
			{comment && <Text classes="comment">{comment}</Text>}
		</div>
	);
}
