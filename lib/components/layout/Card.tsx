import * as React from "react";
import classNames from "classnames";
import Section, { ISectionProps } from "./Section";
import ILayoutProps from "./ILayoutProps";
import IProps from "../IProps";

/**
 * Display content as a card
 * @param props
 */
export default function Card(props: ISectionProps) {
	let { classes, elevation, ...otherProps } = props;

	if (typeof elevation != "number") {
		elevation = 1;
	}

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
export function CardImage(props: ICardImageProps) {
	const { classes, src, ...otherProps } = props;
	const effectiveClass = classNames(["acr-card-img", classes]);

	return <img src={src} className={effectiveClass} {...otherProps} />;
}

/**
 * An image inside a Card
 * @param props
 */
export function CardBody(props: ISectionProps) {
	const { classes, ...otherProps } = props;

	return <Section classes={["acr-card-body", classes]} {...otherProps} />;
}
