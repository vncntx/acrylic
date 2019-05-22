import * as React from "react";

/**
 * Base interface for Acrylic component props
 */
export default interface IProps {
	classes?: ClassValue;
	children?: React.ReactNode;
	style?: React.CSSProperties;
	id?: string;
	key?: string | number;
	role?: string;
	contentEditable?: boolean;
	tabIndex?: number;
}

declare type ClassValue = string | ClassDictionary | ClassArray;

interface ClassDictionary {
	[name: string]: boolean;
}

interface ClassArray extends Array<ClassValue> {}
