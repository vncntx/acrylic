import * as React from "react";
import { NavLink } from "react-router-dom";

export interface IPageLinkProps {
	children: string;
	path: string;
}

/**
 * A navigation link to a component documentation page
 * @param props component props
 */
export default function PageLink(props: IPageLinkProps) {
	return (
		<NavLink to={`/components/${props.path}`} activeClassName="selected">
			{props.children}
		</NavLink>
	);
}
