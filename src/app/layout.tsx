import GlobalStyles from "@/styles/global-styles";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import * as Font from "@/styles/fonts";

export const metadata: Metadata = {
	title: "Mariella",
	icons: {
		icon: "/images/ico/favicon.ico",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	userScalable: false,
};

interface RootLayoutProps {
	children: ReactNode;
}

function RootLayout(props: RootLayoutProps) {
	return (
		<html
			lang="en"
			className={Object.values(Font)
				.map((font) => font.variable)
				.join(" ")}
		>
			<GlobalStyles />
			<body>{props.children}</body>
		</html>
	);
}

export default RootLayout;
