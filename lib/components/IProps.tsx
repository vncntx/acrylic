import * as React from "react";

/**
 * Base interface for Acrylic component props
 */
export default interface IProps {
	classes?: ClassValue;
	children?: React.ReactNode;
	id?: string;
}

declare type ClassValue = string | ClassDictionary | ClassArray | null | false;

interface ClassDictionary {
	[name: string]: boolean | null;
}

interface ClassArray extends Array<ClassValue> {}
