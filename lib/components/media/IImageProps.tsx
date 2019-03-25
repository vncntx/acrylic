import IProps from "../IProps";
import {
	IClipboardEventProps,
	ICompositionEventProps,
	IKeyboardEventProps,
	IMouseEventProps,
	IFocusEventProps,
	IPointerEventProps,
	ITouchEventProps,
	IScrollEventProps,
	ISelectionEventProps,
	IAnimationEventProps,
	ITransitionEventProps,
	IImageEventProps
} from "../IEventProps";

export default interface IImageProps
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
		IImageEventProps,
		ITransitionEventProps {
	alt?: string;
	src:
		| string
		| {
				[key: string]: string;
				default: string;
		  };
}
