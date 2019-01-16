import * as React from "react";
import { NavLink } from "react-router-dom";

/**
 * A navigation link to a component documentation page
 * @param props component props
 */
export default function PageLink(props: React.Props<{}>) {
	return (
		<NavLink to={`/component/${props.children}`} activeClassName="selected">
			{props.children}
		</NavLink>
	);
}
