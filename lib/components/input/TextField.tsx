import * as React from "react";
import classNames from "classnames";
import IFieldProps from "./IFieldProps";
import { IVariantProps } from "../Variant";

export interface IMaskFunc {
	(value: string): string;
}

export interface ITextFieldProps extends IFieldProps, IVariantProps {
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
			{label && <label>{label}</label>}
			<input
				type={type}
				value={value}
				required={required}
				disabled={disabled}
				readOnly={readOnly}
				autoComplete={autoComplete ? "on" : "off"}
				{...otherProps}
			/>
			{comment && <span className="comment">{comment}</span>}
		</div>
	);
}
