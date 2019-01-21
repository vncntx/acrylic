import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, NavLink, Route } from "react-router-dom";
import { Row } from "../../lib/acrylic";
import Page from "./components/Page";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
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
									<PageLink path="layout/Column">Column</PageLink>
								</li>
								<li>
									<PageLink path="layout/Row">Row</PageLink>
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
							</ul>
						</nav>
						<Switch>
							<Route exact path="/" component={HomePage} />
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
					<img className="icon-small" src="/src/img/fork.png" />
					<a
						href="https://github.com/vincentfiestada/acrylic/"
						title="View Repository"
					>
						Contribute
					</a>
				</section>
				<section>
					<img className="icon-small" src="/src/img/osi.png" />
					<p>
						<a
							href="https://github.com/vincentfiestada/acrylic/blob/master/LICENSE"
							title="View License"
						>
							Open Source
						</a>{" "}
						&copy; 2019
					</p>
				</section>
			</footer>
		</React.Fragment>
	);
}

ReactDOM.render(<Doc />, document.getElementById("app"));
