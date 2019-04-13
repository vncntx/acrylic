import * as React from "react";
import IFieldProps from "./IFieldProps";
import Text from "../typography/Text";
import Label from "../typography/Label";
import { IVariantProps } from "../Variant";
import Row from "../layout/Row";
import Column from "../layout/Column";

export interface ICheckboxProps extends IFieldProps, IVariantProps {
	children?: null | undefined;
	checked?: boolean;
}

/**
 * A Checkbox
 */
export default function Checkbox(props: ICheckboxProps) {
	const {
		classes,
		label,
		checked,
		comment,
		variant,
		readOnly,
		required = false,
		disabled = false,
		invalid = false,
		autoComplete = true,
		...otherProps
	} = props;

	const effectiveClass = [
		"acr-checkbox",
		variant && `acr-variant-${variant}`,
		invalid && "invalid",
		required && "required",
		readOnly && "read-only",
		classes
	];

	return (
		<Column
			inline
			justify="start"
			alignContent="start"
			classes={effectiveClass}
		>
			<Row alignItems="center" alignContent="start" justify="start">
				<input
					className="input"
					type="checkbox"
					checked={checked}
					required={required}
					disabled={disabled}
					readOnly={readOnly}
					autoComplete={autoComplete ? "on" : "off"}
					{...otherProps}
				/>
				<div className="checkbox">
					<svg className="checkmark" viewBox="0 0 32 32">
						<path d="M 28.28125 6.28125 L 11 23.5625 L 3.71875 16.28125 L 2.28125 17.71875 L 10.28125 25.71875 L 11 26.40625 L 11.71875 25.71875 L 29.71875 7.71875 Z " />
					</svg>
				</div>
				{label && <Label>{label}</Label>}
			</Row>
			{comment && <Text classes="comment">{comment}</Text>}
		</Column>
	);
}
