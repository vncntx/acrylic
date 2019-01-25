/**
 * An interface for component props that allow a variant to be specified
 */
export interface IVariantProps {
	variant?: Variant;
}

enum Variant {
	Primary = "primary",
	Success = "success",
	Info = "info",
	Warning = "warning",
	Danger = "danger"
}

export default Variant;
