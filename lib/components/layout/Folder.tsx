import * as React from "react";
import classNames from "classnames";
import Row from "./Row";
import Section, { ISectionProps } from "./Section";
import Divider from "./Divider";
import Button, { IButtonProps } from "../controls/Button";

export interface IFolderProps extends ISectionProps {
	isOpen?: boolean;
	children: [
		React.ReactElement<any>,
		React.ReactElement<any>,
		React.ReactElement<IButtonProps>?,
		React.ReactElement<IButtonProps>?
	];
}

export default function Folder(props: IFolderProps) {
	const { classes, children, isOpen, ...otherProps } = props;

	const [isClosed, setClosed] = React.useState(!Boolean(isOpen));
	const toggleHandler = () => setClosed(!isClosed);

	let [summary, details, toggleOpen, toggleClosed] =
		children || new Array<React.ReactElement<any>>();

	// Assign default Summary, Details, and Toggle buttons
	summary = summary || <div />;
	details = details || <div />;
	toggleOpen = toggleOpen || <Button>More</Button>;
	toggleClosed = toggleClosed || <Button>Less</Button>;

	return (
		<Section classes={["acr-folder", classes]} {...otherProps}>
			<Row classes="acr-summary">
				{summary}
				{isClosed
					? React.createElement(toggleOpen.type, {
							onClick: toggleHandler,
							...toggleOpen.props
					  })
					: React.createElement(toggleClosed.type, {
							onClick: toggleHandler,
							...toggleClosed.props
					  })}
			</Row>
			<Divider classes={isClosed && "acr-hidden"} />
			<div className={classNames("acr-details", isClosed && "acr-hidden")}>
				{details}
			</div>
		</Section>
	);
}
