import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";

export default function Row(props: ILayoutProps) {
	const { classes, children, ...otherProps } = props;
	return (
		<div className={classNames("acr-row", classes)} {...otherProps}>
			{children}
		</div>
	);
}
