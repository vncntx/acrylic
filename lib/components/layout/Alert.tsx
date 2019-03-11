import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";
import { IVariantProps } from "../Variant";
import Button, { IButtonProps } from "../controls/Button";
import { isArray } from "util";

const { useState } = React;

export interface IControlFunc {
	(onDismiss: Function): React.ReactNode;
}

export interface IAlertProps extends ILayoutProps, IVariantProps {
	isDismissed?: boolean;
	children:
		| React.ReactNode
		| [React.ReactElement<any>?, React.ReactElement<IButtonProps>?];
}

/**
 * An container for content that requires immediate attention
 * @param props
 */
export default function Alert(props: IAlertProps) {
	const { isDismissed, classes, children, variant, ...otherProps } = props;

	const [isHidden, setHidden] = useState(isDismissed || false);
	const effectiveClasses = classNames(
		"acr-alert",
		isHidden && "acr-hidden",
		classes,
		variant && `acr-variant-${variant}`
	);

	const dismissHandler = () => setHidden(true);

	let content: any, dismiss: any;
	if (Array.isArray(children)) {
		[content = null, dismiss] = children;
	} else {
		content = children;
	}

	content = content || <span />;
	dismiss = dismiss || <Button variant={variant}>Dismiss</Button>;

	return (
		<aside className={effectiveClasses} {...otherProps}>
			{content}
			{React.createElement(dismiss.type, {
				...dismiss.props,
				onClick: dismissHandler
			})}
		</aside>
	);
}
