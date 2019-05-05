import * as React from "react";
import classNames from "classnames";
import IProps from "../IProps";

export interface IDropdownProps extends IProps {
	isOpen?: boolean;
	children: [React.ReactElement<any>, React.ReactElement<any>];
}

/**
 * A dropdown menu toggled by a button
 */
export default function Dropdown(props: IDropdownProps) {
	const { classes, children, isOpen = false, ...otherProps } = props;
	const [toggle, menu] = children;

	const effectiveClass = classNames("acr-dropdown", classes);

	const [isClosed, setClosed] = React.useState(!Boolean(isOpen));

	const onFocusHandler = () => setClosed(!isClosed);

	return (
		<div className={effectiveClass} {...otherProps}>
			{React.createElement(toggle.type, {
				onFocus: onFocusHandler,
				onBlur: onFocusHandler,
				...toggle.props
			})}
			<div className={classNames(isClosed && "acr-hidden")}>{menu}</div>
		</div>
	);
}
