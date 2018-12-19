import * as React from "react";
import IProps from "../IProps";

export interface IButtonProps extends IProps {
	children: React.ReactNode; // Button must have children
}

export default function Button(props: IButtonProps) {
	const { children, ...otherProps } = props;
	return <button {...otherProps}>{children}</button>;
}
