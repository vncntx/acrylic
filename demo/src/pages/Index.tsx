import * as React from "react";
import { Link } from "react-router-dom";

export default function Index() {
	return (
		<div>
			<h2>Components</h2>
			<Link to="/button">Button</Link>
		</div>
	);
}
