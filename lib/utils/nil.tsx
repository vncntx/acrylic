/**
 * Nil is a type alias for either null or undefined
 */

export type nil = null | undefined;

export function isNil(x: any): x is nil {
	return x === null || typeof x === "undefined";
}
