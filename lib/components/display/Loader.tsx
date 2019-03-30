import * as React from "react";
import classNames from "classnames";
import IProps from "../IProps";
import { IVariantProps } from "../Variant";
import {
	ICompositionEventProps,
	IKeyboardEventProps,
	IMouseEventProps,
	IFocusEventProps,
	IPointerEventProps,
	ITouchEventProps,
	IAnimationEventProps,
	ITransitionEventProps
} from "../IEventProps";

export interface ISpinnerProps
	extends IProps,
		IVariantProps,
		ICompositionEventProps,
		IKeyboardEventProps,
		IMouseEventProps,
		IFocusEventProps,
		IPointerEventProps,
		ITouchEventProps,
		IAnimationEventProps,
		ITransitionEventProps {
	children?: null | undefined;
}

/**
 * A spinner indicates an open-ended task in progress
 * @param props
 */
export default function Spinner(props: ISpinnerProps) {
	const { classes, variant, ...otherProps } = props;

	const effectiveClass = classNames(
		"acr-spinner",
		variant && `acr-variant-${variant}`,
		classes
	);

	return (
		<div className={effectiveClass} {...otherProps}>
			<div />
			<div />
		</div>
	);
}
