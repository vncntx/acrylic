import * as React from "react";
import IProps from "../IProps";
import Row from "../layout/Row";
import Label from "../typography/Label";
import IFieldEventProps from "./IFieldEventProps";
import { IVariantProps } from "../Variant";

export interface IOptionProps extends IProps, IFieldEventProps, IVariantProps {
	onChange?: null | undefined;
	label?: React.ReactNode;
	value?: any;
	disabled?: boolean;
	selected?: boolean;
	children?: undefined | null;
}

export interface OptionComponent extends React.Component<IOptionProps> {}

export default function Option(props: IOptionProps) {
	const {
		classes,
		label,
		variant,
		value,
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
				value={value}
				checked={selected}
				disabled={disabled}
				data-value={value}
				{...otherProps}
			/>
			<div className="circle">
				<div className="shade" />
			</div>
			{label && <Label>{label}</Label>}
		</Row>
	);
}
