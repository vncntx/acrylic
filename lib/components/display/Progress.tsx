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

export interface IProgressProps
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
	value?: number;
	max?: number;
	indeterminate?: boolean;
}

/**
 * A progress bar that either has a value or is indeterminate
 * @param props
 */
export default function Progress(props: IProgressProps) {
	const {
		classes,
		value = 0,
		max = 1,
		variant,
		indeterminate,
		...otherProps
	} = props;

	const effectiveClass = classNames(
		"acr-progress",
		variant && `acr-variant-${variant}`,
		indeterminate && "indeterminate",
		classes
	);

	return (
		<div role="progress" className={effectiveClass} {...otherProps}>
			<div
				className="bar"
				style={{
					width: !indeterminate && `${(value / max) * 100}%`
				}}
			/>
		</div>
	);
}
