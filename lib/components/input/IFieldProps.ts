import IProps from "../IProps";
import { IVariantProps } from "../Variant";

export default interface IFieldProps extends IProps, IVariantProps {
	name?: string;
	required?: boolean;
	disabled?: boolean;
	autoComplete?: boolean;
	autoFocus?: boolean;
	invalid?: boolean;
	label?: React.ReactNode;
	comment?: string;
	readOnly?: boolean;
}
