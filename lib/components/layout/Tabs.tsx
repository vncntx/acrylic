import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";
import { ISectionProps } from "./Section";

export interface NumberFunc {
	(x: number): any;
}

export interface ITabsProps extends ISectionProps {
	selected?: number;
	onTabChange?: NumberFunc;
}

/**
 * A row of tabs
 * @param props
 */
export default function Tabs(props: ITabsProps) {
	const {
		children,
		classes,
		elevation,
		selected = 0,
		onTabChange,
		...otherProps
	} = props;

	const [selectedTab, setSelected] = React.useState(selected);

	const effectiveClass = classNames(
		"acr-tabs",
		elevation && `acr-elevated-${elevation}`,
		classes
	);

	const selectHandler = (index: number) => () => {
		setSelected(index);
		if (onTabChange) {
			onTabChange(index);
		}
	};

	return (
		<nav className={effectiveClass} {...otherProps}>
			<ol>
				{React.Children.map(children, (child, index) => {
					if (typeof child !== "object") {
						return null;
					}

					return React.cloneElement(child, {
						...child.props,
						"data-is-active": index === selectedTab,
						onClick: selectHandler(index)
					});
				})}
			</ol>
		</nav>
	);
}

/**
 * A single tab
 * @param props
 */
export function Tab(props: ILayoutProps) {
	const { children, classes, ...otherProps } = props;

	const effectiveClass = classNames("tab", classes);

	return (
		<li className={effectiveClass} {...otherProps}>
			{children}
		</li>
	);
}
