import * as React from "react";
import classNames from "classnames";
import IFieldProps from "./IFieldProps";
import { IVariantProps } from "../Variant";
import Text from "../typography/Text";
import Label from "../typography/Label";

export interface ITextAreaProps extends IFieldProps, IVariantProps {
	children?: null | undefined;
	value?: string;
	placeholder?: string;
}

/**
 * An input element for multi-line text
 */
export default function TextArea(props: ITextAreaProps) {
	const {
		classes,
		label,
		value,
		comment,
		variant,
		readOnly,
		required = false,
		disabled = false,
		invalid = false,
		autoComplete = true,
		...otherProps
	} = props;

	const effectiveClass = classNames(
		"acr-text-area",
		variant && `acr-variant-${variant}`,
		invalid && "invalid",
		required && "required",
		readOnly && "read-only",
		classes
	);

	return (
		<div className={effectiveClass}>
			{label && <Label>{label}</Label>}
			{readOnly ? (
				<Text classes="input">{value}</Text>
			) : (
				<textarea
					className="input"
					required={required}
					disabled={disabled}
					readOnly={readOnly}
					autoComplete={autoComplete ? "on" : "off"}
					{...otherProps}
				>
					{value}
				</textarea>
			)}
			{comment && <Text classes="comment">{comment}</Text>}
		</div>
	);
}
