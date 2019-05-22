import * as React from "react";
import IFieldProps from "./IFieldProps";
import Text from "../typography/Text";
import Label from "../typography/Label";
import Column from "../layout/Column";

export interface OnSelectHandler {
	(previous: any, selection: any): any;
}

export interface IOptionsProps extends IFieldProps {
	onSelect?: OnSelectHandler;
	selection?: any;
}

/**
 * A group of Option Buttons
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
	const [valueLabel, setValueLabel] = React.useState<React.ReactNode>("");

	React.useEffect(
		() => {
			React.Children.forEach(children, child => {
				if (typeof child !== "object") {
					return true;
				}
				if (child.props.value === value) {
					setValueLabel(child.props.label);
					return false;
				}
			});
		},
		[value]
	);

	const selectHandler = (val: any) => () => {
		const previous = value;
		setValue(val);
		onSelect(previous, val);
	};

	const effectiveClass = [
		"acr-options-group",
		variant && `acr-variant-${variant}`,
		invalid && "invalid",
		required && "required",
		readOnly && "read-only",
		classes
	];

	return (
		<Column inline classes={effectiveClass} {...otherProps}>
			{label && <Label>{label}</Label>}
			{readOnly ? (
				<Text>{valueLabel}</Text>
			) : (
				React.Children.map(children, child => {
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
						onChange: selectHandler(child.props.value)
					});
				})
			)}
			{comment && <Text classes="comment">{comment}</Text>}
		</Column>
	);
}
