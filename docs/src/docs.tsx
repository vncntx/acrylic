import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Row } from "../../lib/acrylic";
import Routing from "./components/Routing";
import Navigation from "./components/Navigation";

function Doc() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Row classes="main">
					<Navigation />
					<Routing />
				</Row>
			</BrowserRouter>
		</React.Fragment>
	);
}

ReactDOM.render(<Doc />, document.getElementById("app"));
