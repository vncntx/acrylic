import IProps from "../IProps";
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

export default interface IFieldProps
	extends IProps,
		IFormEventProps,
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
		ITransitionEventProps {
	name?: string;
	required?: boolean;
	disabled?: boolean;
	autoComplete?: boolean;
	autoFocus?: boolean;
	invalid?: boolean;
	label?: React.ReactNode;
	comment?: string;
	readOnly?: boolean;
}
