/**
 * Interfaces for props that support various Synthetic Events
 * See also: https://reactjs.org/docs/events.html
 */
import * as React from "react";

/**
 * IEventProps supports all synthetic events
 */
export default interface IEventProps
	extends IClipboardEventProps,
		ICompositionEventProps,
		IKeyboardEventProps,
		IFocusEventProps,
		IFormEventProps,
		IMouseEventProps,
		IPointerEventProps,
		ISelectionEventProps,
		ITouchEventProps,
		IScrollEventProps,
		IMediaEventProps,
		IImageEventProps,
		IAnimationEventProps,
		ITransitionEventProps {}

/**
 * An interface for component props with clipboard event handlers
 */
export interface IClipboardEventProps {
	onCopy?: React.ClipboardEventHandler;
	onCut?: React.ClipboardEventHandler;
	onPaste?: React.ClipboardEventHandler;
}

/**
 * An interface for component props with composition event handlers
 */
export interface ICompositionEventProps {
	onCompositionEnd?: React.CompositionEventHandler;
	onCompositionStart?: React.CompositionEventHandler;
	onCompositionUpdate?: React.CompositionEventHandler;
}

/**
 * An interface for component props with keyboard event handlers
 */
export interface IKeyboardEventProps {
	onKeyDown?: React.KeyboardEventHandler;
	onKeyPress?: React.KeyboardEventHandler;
	onKeyUp?: React.KeyboardEventHandler;
}

/**
 * An interface for component props with focus change event handlers
 */
export interface IFocusEventProps {
	onFocus?: React.FocusEventHandler;
	onBlur?: React.FocusEventHandler;
}

/**
 * An interface for component props with form event handlers
 */
export interface IFormEventProps {
	onChange?: React.FormEventHandler;
	onInput?: React.FormEventHandler;
	onInvalid?: React.FormEventHandler;
	onSubmit?: React.FormEventHandler;
}

/**
 * An interface for component props with mouse event handlers
 */
export interface IMouseEventProps {
	onClick?: React.MouseEventHandler;
	onContextMenu?: React.MouseEventHandler;
	onDoubleClick?: React.MouseEventHandler;
	onDrag?: React.MouseEventHandler;
	onDragEnd?: React.MouseEventHandler;
	onDragEnter?: React.MouseEventHandler;
	onDragExit?: React.MouseEventHandler;
	onDragLeave?: React.MouseEventHandler;
	onDragOver?: React.MouseEventHandler;
	onDragStart?: React.MouseEventHandler;
	onDrop?: React.MouseEventHandler;
	onMouseDown?: React.MouseEventHandler;
	onMouseEnter?: React.MouseEventHandler;
	onMouseLeave?: React.MouseEventHandler;
	onMouseMove?: React.MouseEventHandler;
	onMouseOut?: React.MouseEventHandler;
	onMouseOver?: React.MouseEventHandler;
	onMouseUp?: React.MouseEventHandler;
}

/**
 * An interface for component props that support pointer events
 * See also: https://www.w3.org/TR/pointerevents/
 */
export interface IPointerEventProps {
	onPointerDown?: React.PointerEventHandler;
	onPointerMove?: React.PointerEventHandler;
	onPointerUp?: React.PointerEventHandler;
	onPointerCancel?: React.PointerEventHandler;
	onGotPointerCapture?: React.PointerEventHandler;
	onLostPointerCapture?: React.PointerEventHandler;
	onPointerEnter?: React.PointerEventHandler;
	onPointerLeave?: React.PointerEventHandler;
	onPointerOver?: React.PointerEventHandler;
	onPointerOut?: React.PointerEventHandler;
}

/**
 * An interface for component props that support selection events
 */
export interface ISelectionEventProps {
	onSelect?: React.EventHandler<React.SyntheticEvent>;
}

/**
 * An interface for component props with touch event handlers
 */
export interface ITouchEventProps {
	onTouchCancel?: React.TouchEventHandler;
	onTouchEnd?: React.TouchEventHandler;
	onTouchMove?: React.TouchEventHandler;
	onTouchStart?: React.TouchEventHandler;
}

/**
 * An interface for component props that support scrolling events
 */
export interface IScrollEventProps {
	onScroll?: React.UIEventHandler;
	onWheel?: React.WheelEventHandler;
}

/**
 * An interface for component props with media event handlers
 */
export interface IMediaEventProps {
	onAbort?: React.EventHandler<React.SyntheticEvent>;
	onCanPlay?: React.EventHandler<React.SyntheticEvent>;
	onCanPlayThrough?: React.EventHandler<React.SyntheticEvent>;
	onDurationChange?: React.EventHandler<React.SyntheticEvent>;
	onEmptied?: React.EventHandler<React.SyntheticEvent>;
	onEncrypted?: React.EventHandler<React.SyntheticEvent>;
	onEnded?: React.EventHandler<React.SyntheticEvent>;
	onError?: React.EventHandler<React.SyntheticEvent>;
	onLoadedData?: React.EventHandler<React.SyntheticEvent>;
	onLoadedMetadata?: React.EventHandler<React.SyntheticEvent>;
	onLoadStart?: React.EventHandler<React.SyntheticEvent>;
	onPause?: React.EventHandler<React.SyntheticEvent>;
	onPlay?: React.EventHandler<React.SyntheticEvent>;
	onPlaying?: React.EventHandler<React.SyntheticEvent>;
	onProgress?: React.EventHandler<React.SyntheticEvent>;
	onRateChange?: React.EventHandler<React.SyntheticEvent>;
	onSeeked?: React.EventHandler<React.SyntheticEvent>;
	onSeeking?: React.EventHandler<React.SyntheticEvent>;
	onStalled?: React.EventHandler<React.SyntheticEvent>;
	onSuspend?: React.EventHandler<React.SyntheticEvent>;
	onTimeUpdate?: React.EventHandler<React.SyntheticEvent>;
	onVolumeChange?: React.EventHandler<React.SyntheticEvent>;
	onWaiting?: React.EventHandler<React.SyntheticEvent>;
}

/**
 * An interface for component props with image event handlers
 */
export interface IImageEventProps {
	onLoad?: React.EventHandler<React.SyntheticEvent>;
	onError?: React.EventHandler<React.SyntheticEvent>;
}

/**
 * An interface for component props with animation event handlers
 */
export interface IAnimationEventProps {
	onAnimationStart?: React.AnimationEventHandler;
	onAnimationEnd?: React.AnimationEventHandler;
	onAnimationIteration?: React.AnimationEventHandler;
}

/**
 * An interface for component props with transition event handlers
 */
export interface ITransitionEventProps {
	onTransitionEnd?: React.TransitionEventHandler;
}
