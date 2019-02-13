/**
 * An interface for component props that allow a variant to be specified
 */
export interface IVariantProps {
	variant?: Variant;
}

declare type Variant = "primary" | "success" | "warning" | "danger";

export default Variant;
