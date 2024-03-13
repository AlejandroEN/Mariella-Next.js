import styled from "styled-components";

export const FormFieldContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Label = styled.label`
	color: #000;
	font-family: var(--motiva-sans-bold);
`;

export const Input = styled.input`
	border-radius: 10px;
	border: 0.5px solid #c4c4c4;
	width: 390px;
	height: 57px;
	padding: 0 10px 0 10px;
	font-family: var(--motiva-sans-regular)
`;
