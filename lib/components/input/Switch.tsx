import * as React from "react";
import IFieldProps from "./IFieldProps";
import IFieldEventProps from "./IFieldEventProps";
import Text from "../typography/Text";
import Label from "../typography/Label";
import Row from "../layout/Row";
import Column from "../layout/Column";

export interface ISwitchProps extends IFieldProps, IFieldEventProps {
	children?: null | undefined;
	on?: boolean;
}

/**
 * A toggle Switch
 */
export default function Switch(props: ISwitchProps) {
	const {
		classes,
		label,
		on,
		comment,
		variant,
		readOnly,
		required = false,
		disabled = false,
		invalid = false,
		onChange = () => {},
		autoComplete = true,
		...otherProps
	} = props;

	const [isChecked, setChecked] = React.useState(Boolean(on));

	const toggleHandler = (e: React.MouseEvent) => {
		if (disabled || readOnly) {
			return;
		}
		setChecked(!isChecked);
		onChange(e);
	};

	const effectiveClass = [
		"acr-switch",
		isChecked && "checked",
		variant && `acr-variant-${variant}`,
		invalid && "invalid",
		disabled && "disabled",
		required && "required",
		readOnly && "read-only",
		classes
	];

	return (
		<Column inline alignItems="start" classes={effectiveClass} {...otherProps}>
			<Row alignItems="center">
				<div className="pane" onClick={toggleHandler}>
					<div className="slider" />
				</div>
				{label && <Label>{label}</Label>}
			</Row>
			{comment && <Text classes="comment">{comment}</Text>}
		</Column>
	);
}
