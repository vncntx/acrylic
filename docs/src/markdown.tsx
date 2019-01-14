import * as React from "react";
import marked from "marked";
import { highlight, loadLanguages } from "reprism";
import jsxLanguage from "reprism/languages/jsx";
import JSXParser from "react-jsx-parser";
import * as acrylic from "../../lib/acrylic";

const { Row } = acrylic;

loadLanguages(jsxLanguage);

interface ICodeBlockProps {
	children: string;
}

function CodeBlock(props: ICodeBlockProps) {
	const code = highlight(props.children, jsxLanguage.language);
	return <div dangerouslySetInnerHTML={{ __html: code }} />;
}

function CodePreview(props: ICodeBlockProps) {
	return <JSXParser components={acrylic} jsx={props.children} />;
}

export function render(source: string): Array<React.ReactNode> {
	const tokens = marked.lexer(source);
	let lastKey = 1;
	return tokens.map((token: any) => {
		const key = lastKey++;
		switch (token.type) {
			case "heading":
				return renderHeading(token.depth, token.text, { key: key });
			case "paragraph":
				return <p key={key}>{token.text}</p>;
			case "space":
				return null;
			case "code":
				return (
					<Row key={key}>
						<CodeBlock>{token.text}</CodeBlock>
						<CodePreview>{token.text}</CodePreview>
					</Row>
				);
			default:
				return <pre key={key}>{token.text}</pre>;
		}
	});
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
