import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";

/**
 * Props for Divider
 */
export interface IDividerProps extends ILayoutProps {
	children?: null | undefined;
}

/**
 * Divider is a horizontal or vertical
 * @param props
 */
export default function Divider(props: IDividerProps) {
	const { classes, ...otherProps } = props;
	return <hr className={classNames("acr-divider", classes)} {...otherProps} />;
}
