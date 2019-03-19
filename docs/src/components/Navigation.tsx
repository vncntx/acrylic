import * as React from "react";
import PageLink from "./PageLink";
import { NavLink } from "react-router-dom";
import { Nav, Icon, MenuItem, Menu, Divider } from "../../../lib/acrylic";

export default function Navigation() {
	return (
		<Nav vertical elevation={3} classes="small">
			<Icon classes="logo" src="/img/logo.svg" />
			<Divider />
			<Menu>
				<NavLink exact to="/" activeClassName="selected">
					<MenuItem>Overview</MenuItem>
				</NavLink>
				<ComponentList
					pages={[
						"layout/Alert",
						"layout/Section",
						"layout/Card",
						"layout/Column",
						"layout/Row",
						"layout/Nav",
						"layout/Toolbar",
						"layout/Menu",
						"layout/Divider",
						"layout/Folder",
						"controls/Button",
						"controls/Dropdown",
						"typography/Text",
						"typography/Title",
						"media/Image",
						"media/Icon"
					]}
				/>
			</Menu>
		</Nav>
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
					<PageLink to={page} key={page}>
						<MenuItem>{getTitle(page)}</MenuItem>
					</PageLink>
				);
			})}
		</React.Fragment>
	);
}

function getTitle(path: string): string {
	return path.split("/").pop();
}
