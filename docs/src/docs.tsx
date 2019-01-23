import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, NavLink, Route } from "react-router-dom";
import { Row, Text, Icon, Emblem } from "../../lib/acrylic";
import Page from "./components/Page";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import IconPage from "./components/IconPage";
import PageLink from "./components/PageLink";

function Doc() {
	return (
		<React.Fragment>
			<main>
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
								<hr />
								<li>
									<PageLink path="layout/Alert">Alert</PageLink>
								</li>
								<li>
									<PageLink path="layout/Section">Section</PageLink>
								</li>
								<li>
									<PageLink path="layout/Column">Column</PageLink>
								</li>
								<li>
									<PageLink path="layout/Row">Row</PageLink>
								</li>
								<li>
									<PageLink path="layout/Toolbar">Toolbar</PageLink>
								</li>
								<hr />
								<li>
									<PageLink path="controls/Button">Button</PageLink>
								</li>
								<hr />
								<li>
									<PageLink path="typography/Text">Text</PageLink>
								</li>
								<li>
									<PageLink path="typography/Title">Title</PageLink>
								</li>
								<li>
									<PageLink path="typography/Icon">Icon</PageLink>
								</li>
							</ul>
						</nav>
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/components/typography/Icon" component={IconPage} />
							<Route path="/components/:name+" component={Page} />
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
			</main>
			<footer>
				<section>
					<Icon>{Emblem.Error}</Icon>
					<a
						href="https://github.com/vincentfiestada/acrylic/"
						title="View Repository"
					>
						Contribute
					</a>
				</section>
				<section>
					<Icon src="/src/img/osi.png" />
					<Text>
						<a
							href="https://github.com/vincentfiestada/acrylic/blob/master/LICENSE"
							title="View License"
						>
							Open Source
						</a>{" "}
						&copy; 2019
					</Text>
				</section>
			</footer>
		</React.Fragment>
	);
}

ReactDOM.render(<Doc />, document.getElementById("app"));
