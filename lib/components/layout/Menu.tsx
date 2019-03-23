import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";
import Title, { ITitleProps } from "../typography/Title";
import { IButtonProps } from "../controls/Button";

export interface MenuComponent extends React.Component<ILayoutProps> {}

/**
 * A Menu is a vertical list of actionable items
 * @param props
 */
export default function Menu(props: ILayoutProps) {
	const { classes, children, ...otherProps } = props;
	const effectiveClass = classNames("acr-menu", classes);

	return (
		<ul className={effectiveClass} {...otherProps}>
			{children}
		</ul>
	);
}

export interface IMenuItemProps extends ILayoutProps, IButtonProps {}

/**
 * An item in a menu
 * @param props
 */
export function MenuItem(props: IMenuItemProps) {
	const { classes, children, ...otherProps } = props;
	const effectiveClass = classNames(
		"acr-menu-item",
		classes,
		typeof children === "string" && "acr-li-text-only"
	);

	if (otherProps.disabled) {
		delete otherProps.onClick;
	}

	return (
		<li className={effectiveClass} {...otherProps}>
			{children}
		</li>
	);
}

export interface ISubMenuProps extends ILayoutProps {
	isOpen?: boolean;
	children: React.ReactNodeArray;
}

/**
 * A menu within another menu
 * @param props
 */
export function SubMenu(props: ISubMenuProps) {
	const { classes, children, isOpen = false, ...otherProps } = props;

	const [isClosed, setClosed] = React.useState(!Boolean(isOpen));

	const effectiveClass = classNames(
		"acr-submenu",
		isClosed && "acr-closed",
		classes
	);

	const clickHandler = () => setClosed(!isClosed);

	const [label, ...items] = children;

	return (
		<li className={effectiveClass} {...otherProps}>
			<div
				className="acr-submenu-label acr-li-text-only"
				onClick={clickHandler}
			>
				{label}
			</div>
			<ul>{items}</ul>
		</li>
	);
}

export interface IMenuHeadingProps extends ITitleProps {
	inline?: null | undefined | false;
}

/**
 * A heading or title within a menu
 * @param props
 */
export function MenuHeading(props: IMenuHeadingProps) {
	const { classes, ...otherProps } = props;

	const effectiveClass = classNames("acr-menu-heading", classes);

	return <Title classes={effectiveClass} {...otherProps} inline />;
}
