import * as React from "react";
import classNames from "classnames";
import IProps from "../IProps";
import { IVariantProps } from "../Variant";
import {
	ICompositionEventProps,
	IKeyboardEventProps,
	IFocusEventProps,
	IMouseEventProps,
	IPointerEventProps,
	ITouchEventProps,
	IAnimationEventProps,
	ITransitionEventProps
} from "../IEventProps";

export interface IButtonProps
	extends IProps,
		ICompositionEventProps,
		IKeyboardEventProps,
		IFocusEventProps,
		IMouseEventProps,
		IPointerEventProps,
		ITouchEventProps,
		IAnimationEventProps,
		ITransitionEventProps,
		IVariantProps {
	disabled?: boolean;
}

export default function Button(props: IButtonProps) {
	const { classes, children, variant, ...otherProps } = props;

	const effectiveClasses = classNames(
		"acr-btn",
		classes,
		variant ? `acr-variant-${variant}` : null
	);

	return (
		<button className={effectiveClasses} {...otherProps}>
			{children}
		</button>
	);
}
