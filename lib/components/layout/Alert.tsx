import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";
import { IVariantProps } from "../Variant";
import Button from "../controls/Button";
import Text from "../typography/Text";

const { useState } = React;

export interface IControlFunc {
	(onDismiss: Function): React.ReactNode;
}

export interface IAlertProps extends ILayoutProps, IVariantProps {
	controlComponent?: IControlFunc;
}

export default function Alert(props: IAlertProps) {
	const { classes, children, variant, controlComponent, ...otherProps } = props;

	const [isHidden, setHidden] = useState(false);

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
			{controlComponent ? (
				controlComponent(onDismiss)
			) : (
				<Button onClick={onDismiss} variant={variant}>
					Dismiss
				</Button>
			)}
		</aside>
	);
}
