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

	return <Markdown classes="article" src={`/src/pages/${name}.md`} />;
}
