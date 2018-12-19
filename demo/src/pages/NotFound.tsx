import * as React from "react";

export default function NotFound() {
	return (
		<div>
			<h2>Not Found</h2>
			<p>The page <code>{window.location.pathname}</code> does not exist.</p>
		</div>
	);
}
