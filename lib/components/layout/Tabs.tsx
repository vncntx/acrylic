import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";

export interface NumberFunc {
	(x: number): any;
}

export interface ITabsProps extends ILayoutProps {
	selected?: number;
	onTabChange?: NumberFunc;
}

/**
 * A row of tabs
 * @param props
 */
export default function Tabs(props: ITabsProps) {
	const { children, classes, selected = 0, onTabChange, ...otherProps } = props;

	const [selectedTab, setSelected] = React.useState(selected);

	const effectiveClass = classNames("acr-tabs", classes);

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
						className: classNames(index === selectedTab && "active", "tab"),
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
