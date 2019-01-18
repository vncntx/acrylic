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

export default interface ITextProps
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
		ITransitionEventProps {
	inline?: boolean;
	bold?: boolean;
	italic?: boolean;
	underlined?: boolean;
}
