import * as React from "react";
import * as ReactDOM from "react-dom";
import {
	BrowserRouter,
	Switch,
	NavLink,
	Route,
	Redirect,
	generatePath
} from "react-router-dom";
import { Row, Column } from "../../lib/acrylic";
import Page from "./components/Page";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import PageLink from "./components/PageLink";

interface IDocProps {
	pages: string[];
}

function Doc(props: IDocProps) {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Row>
					<nav>
						<ul>
							<li>
								<img src="/src/img/icon.png" className="logo" />
							</li>
							<li>
								<NavLink exact to="/" activeClassName="selected">
									Overview
								</NavLink>
							</li>
							<li>
								<PageLink>Column</PageLink>
							</li>
							<li>
								<PageLink>Row</PageLink>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/component/:name" component={Page} />
						<Route path="/error/:message/:details?" component={ErrorPage} />
						<Route
							render={props => (
								<ErrorPage
									match={{
										...props.match,
										params: {
											message: "Not Found",
											details: `The page "${
												window.location.pathname
											}" does not exist`
										}
									}}
								/>
							)}
						/>
					</Switch>
				</Row>
			</BrowserRouter>
		</React.Fragment>
	);
}

/**
 * Extract a title from a document path
 * @param path
 */
function pageTitle(path: string): string {
	return path
		.split("/")
		.pop()
		.split(".")[0];
}

ReactDOM.render(
	<Doc
		pages={["Column", "Row"]
			.map(page => `src/pages/${page}.md`)
			.concat(
				"https://raw.githubusercontent.com/vincentfiestada/acrylic/master/README.md"
			)}
	/>,
	document.getElementById("app")
);
