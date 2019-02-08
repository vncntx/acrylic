import * as React from "react";
import classNames from "classnames";
import { LiveProvider, LivePreview, LiveEditor, LiveError } from "react-live";
import * as acrylic from "../../../lib/acrylic";

const { Row } = acrylic;

export interface ICodePreviewProps {
	children: string;
	noPreview?: boolean;
}

/**
 * Displays a JSX Code Block and renders a live preview
 * @param props component properties
 */
export default function CodePreview(props: ICodePreviewProps) {
	const { children } = props;

	return (
		<LiveProvider
			mountStylesheet={false}
			className={classNames("code-preview")}
			code={children}
			scope={acrylic}
			noInline={true}
		>
			<div className="live-render">
				<LivePreview />
			</div>
			<LiveEditor contentEditable={false} />
			<LiveError />
		</LiveProvider>
	);
}
