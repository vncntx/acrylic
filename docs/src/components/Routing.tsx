import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Page from "./Page";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";

/**
 * Defines app routes
 */
export default function Routing() {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/components/:name+" component={Page} />
			<Route
				render={props => (
					<ErrorPage
						match={{
							...props.match,
							params: {
								message: "Not Found",
								details: "That page does not exist"
							}
						}}
					/>
				)}
			/>
		</Switch>
	);
}
