import * as React from "react";
import IProps from "../IProps";
import IFieldProps from "./IFieldProps";
import IFieldEventProps from "./IFieldEventProps";
import Text from "../typography/Text";
import Label from "../typography/Label";
import Row from "../layout/Row";
import Column from "../layout/Column";
import { IVariantProps } from "../Variant";

export interface IOptionProps extends IProps, IFieldEventProps, IVariantProps {
	onChange?: null | undefined;
	label?: React.ReactNode;
	value?: any;
	disabled?: boolean;
	selected?: boolean;
	children?: undefined | null;
}

export interface OnSelectHandler {
	(previous: any, selection: any): any;
}

export interface IOptionsProps extends IFieldProps {
	onSelect?: OnSelectHandler;
	selection?: any;
}

/**
 * A Radio Button
 */
export default function Options(props: IOptionsProps) {
	const {
		classes,
		label,
		comment,
		variant,
		readOnly,
		selection,
		children,
		onSelect = () => {},
		name = new Date().getTime().toString(),
		required = false,
		disabled = false,
		invalid = false,
		autoComplete = true,
		...otherProps
	} = props;

	const [value, setValue] = React.useState(selection);

	const changeHandler = (newValue: any) => () => {
		onSelect(value, newValue);

		setValue(newValue);
	};

	const effectiveClass = [
		"acr-options",
		variant && `acr-variant-${variant}`,
		invalid && "invalid",
		required && "required",
		readOnly && "read-only",
		classes
	];

	let choices = children;

	if (readOnly) {
		choices = React.Children.toArray(children).find(child => {
			if (typeof child !== "object") {
				return false;
			}

			return child.props.value === value;
		});
	}

	return (
		<Column inline classes={effectiveClass} {...otherProps}>
			{label && <Label>{label}</Label>}
			{React.Children.map(choices, child => {
				if (typeof child !== "object") {
					return null;
				}

				return React.cloneElement(child, {
					...otherProps,
					...child.props,
					name: name,
					required: required,
					readOnly: readOnly,
					disabled: child.props.disabled || disabled,
					checked: child.props.value === value,
					onChange: changeHandler(child.props.value)
				});
			})}
			{comment && <Text classes="comment">{comment}</Text>}
		</Column>
	);
}

export function Option(props: IOptionProps) {
	const {
		classes,
		label,
		variant,
		disabled = false,
		selected = false,
		...otherProps
	} = props;

	const effectiveClass = [
		"option",
		variant && `acr-variant-${variant}`,
		classes
	];

	return (
		<Row
			alignItems="center"
			alignContent="center"
			justify="start"
			classes={effectiveClass}
		>
			<input
				className="input"
				type="radio"
				checked={selected}
				disabled={disabled}
				{...otherProps}
			/>
			<div className="circle">
				<div className="shade" />
			</div>
			{label && <Label>{label}</Label>}
		</Row>
	);
}
