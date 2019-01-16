import * as React from "react";
import Markdown from "./Markdown";

/**
 * Displays the Docs Home Page
 */
export default function HomePage() {
	return (
		<Markdown src="https://raw.githubusercontent.com/vincentfiestada/acrylic/master/README.md" />
	);
}
