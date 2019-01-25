import * as React from "react";
import JSXParser from "react-jsx-parser";
import { highlight, loadLanguages } from "reprism";
import jsxLanguage from "reprism/languages/jsx";
import * as acrylic from "../../../lib/acrylic";

const { Row, Column } = acrylic;

loadLanguages(jsxLanguage);

export interface ICodePreviewProps {
	children: string;
	noPreview?: boolean;
}

/**
 * Displays a JSX Code Block and renders a live preview
 * @param props component properties
 */
export default function CodePreview(props: ICodePreviewProps) {
	const { children, noPreview } = props;

	const code = highlight(props.children, jsxLanguage.language);
	return (
		<Row classes="code-preview">
			<div className="acr-col" dangerouslySetInnerHTML={{ __html: code }} />
			{noPreview === true ? null : (
				<Column>
					<JSXParser components={acrylic} jsx={props.children} />
				</Column>
			)}
		</Row>
	);
}
