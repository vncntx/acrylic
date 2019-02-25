import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";
import { IVariantProps } from "../Variant";
import Button, { IButtonProps } from "../controls/Button";
import Text from "../typography/Text";

const { useState } = React;

export interface IControlFunc {
	(onDismiss: Function): React.ReactNode;
}

export interface IAlertProps extends ILayoutProps, IVariantProps {
	closeButton?: IControlFunc;
	isDismissed?: boolean;
}

/**
 * An container for content that requires immediate attention
 * @param props
 */
export default function Alert(props: IAlertProps) {
	const {
		isDismissed,
		classes,
		children,
		variant,
		closeButton,
		...otherProps
	} = props;

	const [isHidden, setHidden] = useState(isDismissed || false);

	const effectiveClasses = classNames(
		"acr-alert",
		isHidden ? "acr-hidden" : null,
		classes,
		variant ? `acr-variant-${variant}` : null
	);

	const onDismiss = () => setHidden(true);

	return (
		<aside className={effectiveClasses} {...otherProps}>
			<Text>{children}</Text>
			{closeButton ? (
				closeButton(onDismiss)
			) : (
				<DismissButton variant={variant} onClick={() => setHidden(true)} />
			)}
		</aside>
	);
}

// A simple Dismiss Button
function DismissButton(props: IButtonProps) {
	const { variant, ...otherProps } = props;

	return (
		<Button variant={variant} {...otherProps}>
			Dismiss
		</Button>
	);
}
