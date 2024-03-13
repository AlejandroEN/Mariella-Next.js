"use client";

import { useForm } from "react-hook-form";
import Form from "@/components/form/form";
import FormField from "../_components/form-field/form-field";
import { Title } from "../local-styles";

interface SignupFormData {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

function Signup() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<SignupFormData>();

	console.log(watch("firstName"));

	return (
		<>
			<Title>Signup</Title>
			<Form>
				<FormField
					label="First Name"
					type="text"
					placeholder="Enter you email address"
					$name="firstName"
					$register={register}
					$validationSchema={{ required: true }}
				/>
				<FormField
					label="Last Name"
					type="text"
					$name="lastName"
					$register={register}
					$validationSchema={{ required: true }}
				/>
			</Form>
		</>
	);
}

export default Signup;
