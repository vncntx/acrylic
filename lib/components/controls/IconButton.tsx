import * as React from "react";
import classNames from "classnames";
import { IButtonProps } from "./Button";
import { IconComponent } from "../typography/Icon";

export interface IIconButtonProps extends IButtonProps {
	children: React.ReactElement<IconComponent>;
}

export interface IconButtonComponent extends React.FC<IIconButtonProps> {}

/**
 * A Button that only contains an Icon
 * @param props component props
 */
const IconButton: IconButtonComponent = (props: IIconButtonProps) => {
	const { classes, children, variant, ...otherProps } = props;

	const effectiveClasses = classNames(
		"acr-btn",
		"acr-icon-btn",
		classes,
		variant ? `acr-variant-${variant}` : null
	);

	return (
		<button className={effectiveClasses} {...otherProps}>
			{children}
		</button>
	);
};
export default IconButton;
