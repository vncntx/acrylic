import * as React from "react";
import { match as IMatch } from "react-router-dom";
import Markdown from "./Markdown";

interface IPageParams {
	name?: string;
}

export interface IPageProps {
	match: IMatch<IPageParams>;
}

export default function Page(props: IPageProps) {
	const { match } = props;
	const { name } = match.params;

	const title = name.split("/").pop();

	return (
		<Markdown classes="article" title={title} src={`/src/pages/${name}.md`} />
	);
}
