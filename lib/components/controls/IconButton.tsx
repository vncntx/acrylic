import * as React from "react";
import classNames from "classnames";
import Button, { IButtonProps } from "./Button";
import Icon, { IIconProps } from "../media/Icon";

export interface IIconButtonProps extends IButtonProps, IIconProps {
	children?: null | undefined;
}

export interface IconButtonComponent extends React.FC<IIconButtonProps> {}

/**
 * A Button that only contains an Icon
 * @param props component props
 */
const IconButton: IconButtonComponent = (props: IIconButtonProps) => {
	const { classes, src, variant, ...otherProps } = props;

	const effectiveClasses = classNames("acr-icon-btn", classes);

	return (
		<Button classes={effectiveClasses} variant={variant} {...otherProps}>
			<Icon src={src} />
		</Button>
	);
};
export default IconButton;
