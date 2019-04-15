import {
	IClipboardEventProps,
	ICompositionEventProps,
	IKeyboardEventProps,
	IFocusEventProps,
	ISelectionEventProps,
	IScrollEventProps,
	IMouseEventProps,
	IPointerEventProps,
	ITouchEventProps,
	IAnimationEventProps,
	ITransitionEventProps,
	IFormEventProps
} from "../IEventProps";

export default interface IFieldEventProps
	extends IFormEventProps,
		IClipboardEventProps,
		ICompositionEventProps,
		IKeyboardEventProps,
		IFocusEventProps,
		ISelectionEventProps,
		IScrollEventProps,
		IMouseEventProps,
		IPointerEventProps,
		ITouchEventProps,
		IAnimationEventProps,
		ITransitionEventProps {}
