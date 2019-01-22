import * as React from "react";
import classNames from "classnames";
import marked from "marked";
import { Redirect } from "react-router-dom";
import { Button, IProps, Title, Text } from "../../../lib/acrylic";
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
								err.code === DOMException.ABORT_ERR
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
						return (
							<Title key={key} level={token.depth}>
								{token.text}
							</Title>
						);
					case "space":
						return null;
					case "code":
						switch (token.lang) {
							case "jsx":
								return <CodePreview key={key}>{token.text}</CodePreview>;
							default:
								return (
									<pre key={key}>
										<code>{token.text}</code>
									</pre>
								);
						}
					default:
						return (
							<span
								key={key}
								dangerouslySetInnerHTML={{
									__html: marked.inlineLexer(token.text, [])
								}}
							/>
						);
				}
			})}
			{wikiLink ? (
				<article className="api-link">
					<a href={wikiLink}>
						<Button>
							<img src="/src/img/book.png" />
							Details
						</Button>
					</a>
				</article>
			) : null}
		</div>
	);
}

function findWikiLink(contents: string): string | null {
	const linkLine = contents
		.split("\n")
		.find(line => line.search(/\[wiki\]: .+/gi) > -1);
	return linkLine ? linkLine.split(": ")[1] || null : null;
}
