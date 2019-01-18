import * as React from "react";
import classNames from "classnames";
import marked from "marked";
import { Redirect, Link } from "react-router-dom";
import { Row, IProps } from "../../../lib/acrylic";
import CodePreview from "./CodePreview";

const { useState, useEffect } = React;

export interface IMarkdownProps extends IProps {
	src: string;
}

/**
 * A Markdown renderer that shows previews of JSX code
 * @param source Markdown content to render
 */
export default function Markdown(props: IMarkdownProps) {
	const contentUrl = props.src;
	const [contents, setContents] = useState("");
	const [hasError, setError] = useState(false);

	useEffect(
		() => {
			const abortController = new AbortController();
			if (contentUrl.length > 0) {
				fetch(contentUrl, {
					signal: abortController.signal
				})
					.then(res => {
						if (res.status < 200 || res.status > 299) {
							setError(true);
						} else {
							res.text().then(contents => {
								setContents(contents);
							});
						}
					})
					.catch((err: Error) => {
						if (
							!(
								err instanceof DOMException &&
								err.code == DOMException.ABORT_ERR
							)
						) {
							setError(true);
						}
					});
				return () => abortController.abort();
			}
		},
		[contentUrl]
	);

	if (hasError) {
		return <Redirect to="/error" />;
	}

	const tokens = marked.lexer(contents);
	const wikiLink = findWikiLink(contents);
	let lastKey = 1;
	return (
		<div className={classNames(props.classes)}>
			{tokens.map((token: any) => {
				const key = lastKey++;
				switch (token.type) {
					case "heading":
						return renderHeading(token.depth, token.text, { key: key });
					case "space":
						return null;
					case "code":
						switch (token.lang) {
							case "jsx":
								return (
									<Row key={key}>
										<CodePreview>{token.text}</CodePreview>
									</Row>
								);
							default:
								return (
									<pre key={key}>
										<code>{token.text}</code>
									</pre>
								);
						}
					default:
						return (
							<p
								key={key}
								dangerouslySetInnerHTML={{
									__html: marked.inlineLexer(token.text, [])
								}}
							/>
						);
				}
			})}
			{wikiLink ? (
				<section className="api-link">
					<Link to={wikiLink}>
						<button>
							<img className="icon-small" src="/src/img/book.png" />
							Wiki
						</button>
					</Link>
				</section>
			) : null}
		</div>
	);
}

function renderHeading(level: number, text: string, props?: object) {
	switch (level) {
		case 1:
			return <h1 {...props}>{text}</h1>;
		case 2:
			return <h2 {...props}>{text}</h2>;
		case 3:
			return <h3 {...props}>{text}</h3>;
		case 4:
			return <h4 {...props}>{text}</h4>;
		case 5:
			return <h5 {...props}>{text}</h5>;
		default:
			return <h6 {...props}>{text}</h6>;
	}
}

function findWikiLink(contents: string): string | null {
	const linkLine = contents
		.split("\n")
		.find(line => line.search(/\[wiki\]: .+/gi) > -1);
	return linkLine ? linkLine.split(": ")[1] || null : null;
}
