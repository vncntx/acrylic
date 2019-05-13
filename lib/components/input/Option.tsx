import * as React from "react";
import classNames from "classnames";
import IFieldProps from "./IFieldProps";
import IFieldEventProps from "./IFieldEventProps";
import Label from "../typography/Label";
import Row from "../layout/Row";

export interface IOptionProps extends IFieldProps, IFieldEventProps {
	onChange?: null | undefined;
	children?: null | undefined;
	required?: null | undefined;
	readOnly?: null | undefined;
	selected?: boolean;
	value?: any;
}

export type OptionComponent = React.ReactElement<IOptionProps>;

/**
 * An Option button
 */
export default function Option(props: IOptionProps) {
	const {
		label,
		value,
		selected,
		comment,
		variant,
		classes,
		required = false,
		disabled = false,
		invalid = false,
		autoComplete = true,
		...otherProps
	} = props;

	const effectiveClass = classNames(
		"acr-option",
		variant && `acr-variant-${variant}`,
		invalid && "invalid",
		required && "required",
		classes
	);

	return (
		<Row
			classes={effectiveClass}
			alignItems="center"
			alignContent="start"
			justify="start"
		>
			<input
				className="input"
				type="radio"
				value={value}
				required={required}
				disabled={disabled}
				autoComplete={autoComplete ? "on" : "off"}
				{...otherProps}
			/>
			<div className="circle">
				<div className="shade" />
			</div>
			{label && <Label>{label}</Label>}
		</Row>
	);
}
