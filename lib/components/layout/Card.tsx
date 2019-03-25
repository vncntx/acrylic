import * as React from "react";
import Section, { ISectionProps } from "./Section";
import IProps from "../IProps";

/**
 * Display content as a card
 * @param props
 */
export default function Card(props: ISectionProps) {
	const { classes, elevation = 1, ...otherProps } = props;

	return (
		<Section
			classes={["acr-card", classes]}
			elevation={elevation}
			{...otherProps}
		/>
	);
}

export interface ICardImageProps extends IProps {
	src: string;
}

/**
 * An image inside a Card
 * @param props
 */
export function CardBody(props: ISectionProps) {
	const { classes, ...otherProps } = props;

	return <Section classes={["acr-card-body", classes]} {...otherProps} />;
}
