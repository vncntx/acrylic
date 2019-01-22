import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";
import { IVariantProps } from "../Variant";
import Button from "../controls/Button";
import Text from "../typography/Text";

const { useState } = React;

export interface IAlertProps extends ILayoutProps, IVariantProps {
	controlComponent?: React.ReactNode;
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

	return (
		<aside className={effectiveClasses} {...otherProps}>
			<Text>{children}</Text>
			{controlComponent || (
				<Button onClick={() => setHidden(true)} variant={variant}>
					Dismiss
				</Button>
			)}
		</aside>
	);
}
