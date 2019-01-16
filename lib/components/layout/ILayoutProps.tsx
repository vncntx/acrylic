import IProps from "../IProps";
import {
	IClipboardEventProps,
	ICompositionEventProps,
	IKeyboardEventProps,
	IFocusEventProps,
	IMouseEventProps,
	IPointerEventProps,
	ISelectionEventProps,
	ITouchEventProps,
	IScrollEventProps,
	IAnimationEventProps,
	ITransitionEventProps
} from "../IEventProps";

/**
 * Props supported by layout components
 */
export default interface ILayoutProps
	extends IProps,
		IClipboardEventProps,
		ICompositionEventProps,
		IKeyboardEventProps,
		IFocusEventProps,
		IMouseEventProps,
		IPointerEventProps,
		ISelectionEventProps,
		ITouchEventProps,
		IScrollEventProps,
		IAnimationEventProps,
		ITransitionEventProps {}
