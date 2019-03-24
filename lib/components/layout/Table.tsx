import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";
import { ISectionProps } from "./Section";

/**
 * Table component
 * @param props
 */
export default function Table(props: ISectionProps) {
	const { classes, children, elevation, acrylic, ...otherProps } = props;

	const effectiveClass = classNames([
		"acr-table",
		elevation && elevation > 0 ? `acr-elevated-${elevation}` : null,
		acrylic && "acr-acrylic",
		classes
	]);

	return (
		<table className={effectiveClass} {...otherProps}>
			{children}
		</table>
	);
}

export interface ITableSectionProps extends ILayoutProps {
	part: "header" | "body" | "footer";
}

/**
 * A Table header, body, or footer
 * @param props
 */
export function TableSection(props: ITableSectionProps) {
	const { classes, children, part = "body", ...otherProps } = props;

	const effectiveClass = classNames(classes);

	let type: string;
	switch (part) {
		case "header":
			type = "thead";
			break;
		case "footer":
			type = "tfoot";
			break;
		default:
			type = "tbody";
	}

	return React.createElement(
		type,
		{
			className: effectiveClass,
			...otherProps
		},
		children
	);
}

/**
 * A table row
 * @param props
 */
export function TableRow(props: ILayoutProps) {
	const { classes, children, ...otherProps } = props;

	const effectiveClass = classNames(classes);

	return (
		<tr className={effectiveClass} {...otherProps}>
			{children}
		</tr>
	);
}

export interface ICellProps extends ILayoutProps {
	heading?: boolean;
	headers?: string;
	colSpan?: string;
	rowSpan?: string;
}

/**
 * A table cell
 * @param props
 */
export function Cell(props: ICellProps) {
	const { classes, children, heading = false, ...otherProps } = props;

	const effectiveClass = classNames(classes);

	const type = heading ? "th" : "td";

	return React.createElement(
		type,
		{
			className: effectiveClass,
			...otherProps
		},
		children
	);
}
