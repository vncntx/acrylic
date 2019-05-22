import classNames from "classnames";
import IProps from "../IProps";
import {
	IClipboardEventProps,
	ICompositionEventProps,
	IFocusEventProps,
	IMouseEventProps,
	IPointerEventProps,
	ISelectionEventProps,
	ITouchEventProps,
	IKeyboardEventProps,
	IScrollEventProps,
	IAnimationEventProps,
	ITransitionEventProps
} from "../IEventProps";

export default interface ITextProps extends IPureTextProps {
	inline?: boolean;
	bold?: boolean;
	italic?: boolean;
	underlined?: boolean;
}

/**
 * These are the non-style-related text props
 */
export interface IPureTextProps
	extends IProps,
		IClipboardEventProps,
		ICompositionEventProps,
		IFocusEventProps,
		IMouseEventProps,
		IPointerEventProps,
		ISelectionEventProps,
		ITouchEventProps,
		IKeyboardEventProps,
		IScrollEventProps,
		IAnimationEventProps,
		ITransitionEventProps {}

export function getEffectiveClass(
	props: ITextProps,
	baseClass: string
): [
	Pick<
		ITextProps,
		Exclude<
			keyof ITextProps,
			"classes" | "inline" | "bold" | "italic" | "underlined"
		>
	>,
	string
] {
	const { classes, inline, bold, italic, underlined, ...others } = props;
	const effectiveClass = classNames(baseClass, classes, {
		"acr-inline": inline,
		"acr-bold": bold,
		"acr-italic": italic,
		"acr-underlined": underlined
	});
	return [others, effectiveClass];
}
