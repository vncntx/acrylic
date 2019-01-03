import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
// Pages
import Overview from "./pages/Overview";
import NotFoundPage from "./pages/NotFound";
import ButtonPage from "./pages/Button";
import TitlePage from "./pages/Title";
import ColumnPage from "./pages/Column";

function getName(page: React.ComponentClass | Function) {
	const name = page.name;
	return name.endsWith("Page") ? name.slice(0, -4) : name;
}

function Demo() {
	const components = [ButtonPage, TitlePage, ColumnPage];

	return (
		<BrowserRouter>
			<React.Fragment>
				<h1>Acrylic</h1>
				<h4>A React Component Library</h4>
				<div>
					<ul>
						<li>
							<Link to="/">Overview</Link>
						</li>
						{components.map(component => {
							const name = getName(component);
							return (
								<li key={name}>
									<Link to={`/${name.toLowerCase()}`}>{name}</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<Switch>
					<Route exact path="/" component={Overview} />
					{components.map(component => {
						const name = getName(component).toLowerCase();
						return <Route key={name} path={`/${name}`} component={component} />;
					})}
					<Route component={NotFoundPage} />
				</Switch>
			</React.Fragment>
		</BrowserRouter>
	);
}

ReactDOM.render(<Demo />, document.getElementById("app"));
