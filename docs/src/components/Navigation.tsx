import * as React from "react";
import PageLink from "./PageLink";
import { NavLink } from "react-router-dom";
import { Icon } from "../../../lib/acrylic";

export default function Nav() {
	return (
		<nav>
			<ul>
				<li className="logo">
					<Icon src="/img/logo.svg" />
				</li>
				<li>
					<NavLink exact to="/" activeClassName="selected">
						Overview
					</NavLink>
				</li>
				<ComponentList
					pages={[
						"layout/Alert",
						"layout/Section",
						"layout/Column",
						"layout/Row",
						"layout/Toolbar",
						"controls/Button",
						"typography/Text",
						"typography/Title",
						"typography/Icon"
					]}
				/>
			</ul>
		</nav>
	);
}

interface IComponentListProps {
	pages: Array<string>;
}

/**
 * Renders links to component pages
 * @param props
 */
function ComponentList(props: IComponentListProps) {
	return (
		<React.Fragment>
			{props.pages.map(page => {
				return (
					<li key={page}>
						<PageLink path={page}>{getTitle(page)}</PageLink>
					</li>
				);
			})}
		</React.Fragment>
	);
}

function getTitle(path: string): string {
	return path.split("/").pop();
}
