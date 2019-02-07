import * as React from "react";
import classNames from "classnames";
import { IPureTextProps } from "./ITextProps";

export interface IIconProps extends IPureTextProps {
	src?: string;
	children?: null | undefined;
}

export interface IconComponent extends React.FC<IIconProps> {}

/**
 * Icon displays a small image that scales with the current font size
 * @param props
 */
const Icon: IconComponent = (props: IIconProps) => {
	const { src, classes, ...otherProps } = props;

	const effectiveClass = classNames("acr-icon", classes);

	return <img src={src} className={effectiveClass} {...otherProps} />;
};
export default Icon;
