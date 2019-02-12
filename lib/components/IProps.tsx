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
}

declare type ClassValue = string | ClassDictionary | ClassArray | null | false;

interface ClassDictionary {
	[name: string]: boolean | null;
}

interface ClassArray extends Array<ClassValue> {}
