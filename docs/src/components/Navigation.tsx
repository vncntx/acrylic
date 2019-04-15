import * as React from "react";
import PageLink from "./PageLink";
import { NavLink } from "react-router-dom";
import {
	Nav,
	Icon,
	MenuItem,
	Menu,
	Divider,
	TextField
} from "../../../lib/acrylic";

export default function Navigation() {
	return (
		<Nav elevation={3} classes="main-nav small">
			<Icon classes="logo" src="/img/logo.svg" />
			<Divider />
			<Menu>
				<MenuItem>
					<NavLink exact to="/" activeClassName="active">
						Overview
					</NavLink>
				</MenuItem>
				<ComponentList
					pages={[
						"layout/Alert",
						"layout/Section",
						"layout/Card",
						"layout/Column",
						"layout/Row",
						"layout/Nav",
						"layout/Tabs",
						"layout/Breadcrumb",
						"layout/Toolbar",
						"layout/Menu",
						"layout/Divider",
						"layout/Folder",
						"layout/Table",
						"controls/Button",
						"controls/Dropdown",
						"typography/Text",
						"typography/Title",
						"typography/Badge",
						"typography/Link",
						"input/TextField",
						"input/TextArea",
						"input/Checkbox",
						"input/Options",
						"display/Image",
						"display/Icon",
						"display/Progress",
						"display/Loader"
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
					<MenuItem key={page}>
						<PageLink to={page}>{getTitle(page)}</PageLink>
					</MenuItem>
				);
			})}
		</React.Fragment>
	);
}

function getTitle(path: string): string {
	return path.split("/").pop();
}
