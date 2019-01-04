import * as React from "react";
import classNames from "classnames";
import ILayoutProps from "./ILayoutProps";

export interface IColumnProps extends ILayoutProps {}

export default function Column(props: IColumnProps) {
  const { classes, ...otherProps } = props;
  return (
    <div className={classNames("acr-col", classes)} {...otherProps}>
      {props.children}
    </div>
  );
}
