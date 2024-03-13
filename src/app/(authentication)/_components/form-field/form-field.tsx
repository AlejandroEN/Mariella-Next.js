import { ComponentPropsWithRef } from "react";
import * as S from "./form-field.styles";
import {
	FieldValues,
	Path,
	RegisterOptions,
	UseFormRegister,
} from "react-hook-form";

interface FormFieldProps<T extends FieldValues>
	extends ComponentPropsWithRef<"input"> {
	label: string;
	$name: Path<T>;
	$register: UseFormRegister<T>;
	$validationSchema: RegisterOptions<T>;
}

function FormField<T extends FieldValues>(props: FormFieldProps<T>) {
	return (
		<S.FormFieldContainer>
			<S.Label htmlFor={props.name}>{props.label}</S.Label>
			<S.Input
				{...props}
				id={props.$name}
				{...props.$register(props.$name)}
			/>
		</S.FormFieldContainer>
	);
}

export default FormField;
