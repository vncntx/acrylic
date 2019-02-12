import * as React from "react";
import marked from "marked";
import { Redirect } from "react-router-dom";
import { IProps, Section, Title } from "../../../lib/acrylic";
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
	const { src } = props;

	const [contents, setContents] = useState("");
	const [hasError, setError] = useState(false);

	const loadContent = () => {
		const abortController = new AbortController();
		if (src.length > 0) {
			fetch(src, {
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
							err instanceof DOMException && err.code === DOMException.ABORT_ERR
						)
					) {
						setError(true);
					}
				});
			return () => abortController.abort();
		}
	};

	useEffect(loadContent, [src]);

	if (hasError) {
		return <Redirect to="/error" />;
	}

	const tokens = marked.lexer(contents);
	const keyGenerator = autoIncrement(1);
	const listBuilder = new ListBuilder();

	return (
		<Section classes={props.classes}>
			{tokens.map(token => renderToken(token, listBuilder, keyGenerator))}
		</Section>
	);
}

/**
 * Render a markdown token as a JSX Element
 * @param token
 * @param listBuilder
 * @param keyGenerator
 */
function renderToken(
	token: any,
	listBuilder: ListBuilder,
	keyGenerator: IterableIterator<number>
): JSX.Element {
	const key = keyGenerator.next().value;
	switch (token.type) {
		case "heading":
			return (
				<Title key={key} level={token.depth}>
					{token.text}
				</Title>
			);
		case "list_start":
			listBuilder.isOrdered = Boolean(token.ordered);
			listBuilder.items = [];
			return null;
		case "list_item_start":
			listBuilder.isOpen = true;
			return null;
		case "list_item_end":
			listBuilder.isOpen = false;
			return null;
		case "text":
			if (listBuilder.isOpen) {
				marked
					.lexer(token.text)
					.map(token => renderToken(token, listBuilder, keyGenerator))
					.forEach(item => listBuilder.add(item));
			}
			return null;
		case "list_end":
			return React.createElement(
				listBuilder.isOrdered ? "ol" : "ul",
				{
					key: key
				},
				listBuilder.items.map(item => (
					<li key={keyGenerator.next().value}>{item}</li>
				))
			);
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
		case "paragraph":
		case "html":
			return React.createElement(listBuilder.isOpen ? "span" : "p", {
				key: key,
				dangerouslySetInnerHTML: {
					__html: marked.inlineLexer(token.text, [])
				}
			});
		default:
			return null;
	}
}

/**
 * A utility class for building a list from separate tokens
 */
class ListBuilder {
	constructor(isOrdered = false) {
		this.items = [];
		this.isOpen = false;
		this.isOrdered = isOrdered;
	}
	public items: Array<any>;
	public isOpen: boolean;
	public isOrdered: boolean;
	public add(item: any): void {
		this.items.push(item);
	}
}

function* autoIncrement(start: number) {
	let i = start;
	while (true) {
		yield i++;
	}
}
