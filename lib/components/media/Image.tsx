import * as React from "react";
import classNames from "classnames";
import IImageProps from "./IImageProps";

/**
 * A self-contained element such as an image, video, chart, or code block
 * @param props
 */
export default function Image(props: IImageProps) {
	const { classes, children, src, alt, ...otherProps } = props;

	const effectiveClass = classNames("acr-img", classes);

	if (typeof src !== "string") {
		if (!src || !src.default) {
			return null;
		}
	}

	// Get default source and other source sets
	let defaultSrc: string;
	let sourceSets: { [K: string]: string } = {};
	if (typeof src === "string") {
		defaultSrc = src;
	} else {
		defaultSrc = src.default;
		sourceSets = src;
		delete sourceSets.default;
	}

	return (
		<figure
			className={effectiveClass}
			style={{
				backgroundImage: `url('${defaultSrc}')`
			}}
			{...otherProps}
		>
			<picture>
				{Object.keys(sourceSets).map(media => (
					<source media={media} srcSet={sourceSets[media]} />
				))}
				<img src={defaultSrc} alt={alt} />
			</picture>
			{children}
		</figure>
	);
}
