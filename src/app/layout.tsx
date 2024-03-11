import GlobalStyles from "@/styles/global-styles";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Mariella",
	icons: {
		icon: "/images/ico/favicon.ico",
	},
};

interface RootLayoutProps {
	children: ReactNode;
}

function RootLayout(props: RootLayoutProps) {
	return (
		<html lang="en">
			<GlobalStyles />
			<body>{props.children}</body>
		</html>
	);
}

export default RootLayout;
