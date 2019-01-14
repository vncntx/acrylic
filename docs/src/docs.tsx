import * as React from "react";
import * as ReactDOM from "react-dom";
import { Row } from "../../lib/acrylic";
import { render } from "./markdown";

const { useState, useEffect } = React;

interface IDocProps {
	pages: string[];
}

function Doc(props: IDocProps) {
	const [contentUrl, setContentUrl] = useState(
		window.location.hash.replace("#", "") || ""
	);
	const [contents, setContents] = useState("");

	useEffect(
		() => {
			if (contentUrl.length > 0) {
				fetch(contentUrl).then(res => {
					res.text().then(setContents);
				});
			}
		},
		[contentUrl]
	);

	return (
		<React.Fragment>
			<h1>Acrylic</h1>
			<p>A React Component Library</p>
			<Row>
				<ul>
					{props.pages.map(page => (
						<li key={page}>
							<a href={`#/${page}`} onClick={() => setContentUrl(page)}>
								{pageTitle(page)}
							</a>
						</li>
					))}
				</ul>
				<section>{render(contents)}</section>
			</Row>
		</React.Fragment>
	);
}

/**
 * Extract a title from a document path
 * @param path
 */
function pageTitle(path: string): string {
	return path
		.split("/")
		.pop()
		.split(".")[0];
}

ReactDOM.render(
	<Doc pages={["Column", "Row", "Col2"].map(page => `src/pages/${page}.md`)} />,
	document.getElementById("app")
);
