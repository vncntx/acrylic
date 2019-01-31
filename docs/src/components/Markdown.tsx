import * as React from "react";
import classNames from "classnames";
import marked from "marked";
import { Redirect } from "react-router-dom";
import {
	Button,
	IProps,
	Title,
	Icon,
	Section,
	Toolbar,
	Row
} from "../../../lib/acrylic";
import CodePreview from "./CodePreview";

const { useState, useEffect } = React;

export interface IMarkdownProps extends IProps {
	src: string;
	title?: string;
}

/**
 * A Markdown renderer that shows previews of JSX code
 * @param source Markdown content to render
 */
export default function Markdown(props: IMarkdownProps) {
	const { src, title } = props;

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
	const wikiLinks = findWikiLinks(contents);
	let lastKey = 1;

	return (
		<Section elevation={1} classes={props.classes}>
			<Row classes="command-bar">
				<Title level={2}>{title}</Title>
				<Toolbar classes="api-link">
					<Button onClick={() => loadContent()}>
						<Icon src="/src/img/refresh.svg" />
						Reload
					</Button>
					{wikiLinks.map(wikiLink => (
						<a key={wikiLink.href} href={wikiLink.href}>
							<Button>
								<Icon src="/src/img/info.svg" />
								{wikiLink.name}
							</Button>
						</a>
					))}
				</Toolbar>
			</Row>
			{tokens.map((token: any) => {
				const key = lastKey++;
				switch (token.type) {
					case "heading":
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
		</Section>
	);
}

interface IWikiLink {
	href: string;
	name: string;
}

function findWikiLinks(contents: string): IWikiLink[] {
	const linkLines = contents
		.split("\n")
		.filter(line => line.search(/\[wiki\]: .+/i) > -1);
	return linkLines.map(line => {
		const info = line.split(": ")[1].split(" ");
		return {
			href: info[0],
			name: (info[1] || "Link").replace(/"/g, "")
		};
	});
}
