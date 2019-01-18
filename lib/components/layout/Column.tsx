import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";

export default function Column(props: ILayoutProps) {
	const { classes, children, ...otherProps } = props;
	return (
		<div className={classNames("acr-col", classes)} {...otherProps}>
			{children}
		</div>
	);
}
