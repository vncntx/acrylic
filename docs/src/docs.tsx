import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Overview from "../../README.md";
import NotFound from "./pages/NotFound.mdx";
import Button from "./pages/Button.mdx";
import Column from "./pages/Column.mdx";
import Row from "./pages/Row.mdx";

const pages = [[Button, "Button"], [Column, "Column"], [Row, "Row"]].map(
	(x: [any, string]) => toPageInfo(...x)
);

function Docs() {
	return (
		<BrowserRouter>
			<React.Fragment>
				<h1>Acrylic</h1>
				<ul>
					<li>
						<Link to="/">Overview</Link>
					</li>
					{pages.map(page => {
						return (
							<li key={page.name}>
								<Link to={page.path}>{page.name}</Link>
							</li>
						);
					})}
				</ul>
				<Switch>
					<Route exact path="/" component={Overview} />
					{pages.map(page => {
						return (
							<Route
								key={page.name}
								path={page.path}
								component={page.component}
							/>
						);
					})}
					<Route component={NotFound} />
				</Switch>
			</React.Fragment>
		</BrowserRouter>
	);
}

interface IPageInfo {
	name: string;
	path: string;
	component: any;
}

function toPageInfo(component: any, name: string): IPageInfo {
	return {
		name: name,
		path: `/${name.toLowerCase()}`,
		component: component
	};
}

ReactDOM.render(<Docs />, document.getElementById("app"));
