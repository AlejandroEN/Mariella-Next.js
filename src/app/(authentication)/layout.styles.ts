"use client";

import styled from "styled-components";

export const AuthenticationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100vw;
	height: 100vh;
	max-width: 200rem;
	margin-right: auto;
	margin-left: auto;
	background: radial-gradient(
		130.78% 141.42% at 100% 0%,
		#ceb3fa 0%,
		#ceb3fa 0%,
		#fda4e6 0.01%,
		#ceb3fa 48.47%,
		#ffb5fc 100%
	);
`;

export const Form = styled.div`
	height: 649px;
	width: 446px;
	display: inline-flex;
	padding: 12px 28px;
	flex-direction: column;
	align-items: center;
	gap: 17px;
	border-radius: 20px;
	background: #fff;
`;
