import * as React from "react";
import * as ReactDOM from "react-dom";
import PageRoutes from "./routes";

function DemoApp() {
	return (
		<React.Fragment>
			<h1>Acrylic Components</h1>
			<PageRoutes />
		</React.Fragment>
	);
}

ReactDOM.render(<DemoApp />, document.getElementById("app"));
