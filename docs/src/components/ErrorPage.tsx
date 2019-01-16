import * as React from "react";
import { match as IMatch } from "react-router-dom";

interface IErrorParams {
	message?: string;
}

export interface IErrorPageProps {
	match: IMatch<IErrorParams>;
}

/**
 * Displays an Error Page
 * @param props component properties
 */
export default function ErrorPage(props: IErrorPageProps) {
	const { match } = props;

	return (
		<section>
			<img src="/src/img/error.png" />
			<h2>Error: {match.params.message || "Not Found"}</h2>
		</section>
	);
}
