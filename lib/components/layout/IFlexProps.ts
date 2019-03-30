import ILayoutProps from "./ILayoutProps";

declare type alignment = "start" | "end" | "stretch" | "center" | "baseline";
declare type justification =
	| "start"
	| "end"
	| "stretch"
	| "center"
	| "between"
	| "around"
	| "even";

export default interface IFlexProps extends ILayoutProps {
	inline?: boolean;
	reverse?: boolean;
	alignSelf?: alignment;
	alignItems?: alignment;
	justify?: justification;
	alignContent?: justification;
}
