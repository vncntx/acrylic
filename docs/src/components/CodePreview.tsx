import * as React from "react";
import JSXParser from "react-jsx-parser";
import { highlight, loadLanguages } from "reprism";
import jsxLanguage from "reprism/languages/jsx";
import * as acrylic from "../../../lib/acrylic";

loadLanguages(jsxLanguage);

export interface ICodePreviewProps {
	children: string;
}

/**
 * Displays a JSX Code Block and renders a live preview
 * @param props component properties
 */
export default function CodePreview(props: ICodePreviewProps) {
	const code = highlight(props.children, jsxLanguage.language);
	return (
		<React.Fragment>
			<section className="acr-row" dangerouslySetInnerHTML={{ __html: code }} />
			<JSXParser components={acrylic} jsx={props.children} />
		</React.Fragment>
	);
}
