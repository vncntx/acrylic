import * as React from "react";
import Markdown from "react-markdown";

const contentURL = "/README.md";

interface OverviewState {
	content: string;
}

export default class Overview extends React.PureComponent<{}, OverviewState> {
	constructor(props) {
		super(props);
		this.state = {
			content: ""
		};
	}
	private async fetchContent(): Promise<string> {
		return (await fetch(contentURL)).text();
	}
	public componentDidMount() {
		this.fetchContent()
			.then((content) => {
				this.setState({
					content: content
				});
			})
			.catch((err) => {
				this.setState({
					content: String(err)
				});
			})
	}
	public render(): React.ReactNode {
		return <Markdown source={this.state.content} />;
	}
}
