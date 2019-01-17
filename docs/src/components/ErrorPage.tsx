import * as React from "react";
import { match as IMatch } from "react-router-dom";

interface IErrorParams {
	message?: string;
	details?: string;
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

	console.log(match);

	return (
		<div className="error-page">
			<div className="alert">
				<section className="alert-title">
					<img src="/src/img/error.png" className="icon" />
					<h2>{match.params.message || "Unknown Error"}</h2>
				</section>
				<p>{match.params.details}</p>
			</div>
		</div>
	);
}
