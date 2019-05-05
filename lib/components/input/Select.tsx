import * as React from "react";
import Menu from "../layout/Menu";
import Text from "../typography/Text";
import Column from "../layout/Column";
import Section from "../layout/Section";
import Label from "../typography/Label";
import IFieldProps from "./IFieldProps";
import { OptionComponent } from "./Option";
import { OnSelectHandler } from "./Options";
import { menuItemFromOption } from "./convert";

export interface ISelectProps extends IFieldProps {
	onSelect?: OnSelectHandler;
	selection?: any;
	isOpen?: boolean;
	placeholder?: string;
	children?: OptionComponent | OptionComponent[];
}

export default function Select(props: ISelectProps) {
	const {
		children,
		classes,
		label,
		comment,
		variant,
		readOnly,
		placeholder,
		selection = null,
		onSelect = () => {},
		isOpen = false,
		required = false,
		disabled = false,
		invalid = false,
		autoComplete = true,
		...otherProps
	} = props;

	const [value, setValue] = React.useState(selection);
	const [valueLabel, setValueLabel] = React.useState<React.ReactNode>("");
	const [isClosed, setClosed] = React.useState(!isOpen);

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

	const focusHandler = () => {
		if (disabled) {
			return;
		}
		setClosed(!isClosed);
	};

	const effectiveClass = [
		"acr-select",
		invalid && "invalid",
		required && "required",
		disabled && "disabled",
		readOnly && "read-only",
		variant && `acr-variant-${variant}`,
		classes
	];

	return (
		<Column inline classes={effectiveClass} {...otherProps}>
			<Column inline classes="input-wrapper">
				{label && <Label>{label}</Label>}
				<Section
					classes="input"
					tabIndex={0}
					onFocus={focusHandler}
					onBlur={focusHandler}
				>
					{valueLabel || (
						<span className="placeholder">{placeholder || <br />}</span>
					)}
				</Section>
				{comment && <Text classes="comment">{comment}</Text>}
			</Column>
			{readOnly ? null : (
				<Column alignSelf="end">
					<Menu
						classes={{
							menu: true,
							"acr-hidden": isClosed
						}}
					>
						{React.Children.map(children, child => {
							if (typeof child !== "object") {
								return null;
							}
							return menuItemFromOption({
								...child.props,
								onMouseDown: child.props.disabled
									? null
									: selectHandler(child.props.value)
							});
						})}
					</Menu>
				</Column>
			)}
		</Column>
	);
}
