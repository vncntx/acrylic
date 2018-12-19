import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPage from "./pages/Index";
import ButtonPage from "./pages/Button";
import NotFoundPage from "./pages/NotFound";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={IndexPage} />
				<Route path="/button" component={ButtonPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	);
}
