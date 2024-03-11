"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		background: #fff;
		overflow-x: hidden;
		width: 100%;
		margin-right: auto;
		margin-left: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export default GlobalStyles;
