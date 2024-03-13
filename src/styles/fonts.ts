import localFont from "next/font/local";

const motivaSansBold = localFont({
	src: "../../public/fonts/motiva-sans-bold.woff2",
	variable: "--motiva-sans-bold",
});

const motivaSansExtra = localFont({
	src: "../../public/fonts/motiva-sans-extra.woff2",
	variable: "--motiva-sans-extra"
})

const motivaSansRegular = localFont({
	src: "../../public/fonts/motiva-sans-regular.woff2",
	variable: "--motiva-sans-regular",
})

export { motivaSansBold, motivaSansRegular, motivaSansExtra };
