import * as React from "react";
import { NavLink } from "react-router-dom";

export interface IPageLinkProps {
	children: React.ReactNode;
	to: string;
}

/**
 * A navigation link to a component documentation page
 * @param props component props
 */
export default function PageLink(props: IPageLinkProps) {
	return (
		<NavLink to={`/components/${props.to}`} activeClassName="active">
			{props.children}
		</NavLink>
	);
}
