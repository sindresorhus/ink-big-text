import React from "react";
import { Text } from "ink";
import CFonts from "cfonts";

type BigTextProps = { text: string } & Partial<CFontProps>;

type CFontProps = {
	font:
		| "block"
		| "slick"
		| "tiny"
		| "grid"
		| "pallet"
		| "shade"
		| "simple"
		| "simpleBlock"
		| "3d"
		| "simple3d"
		| "chrome"
		| "huge";
	align: "left" | "center" | "right";
	colors: string[];
	backgroundColor:
		| "transparent"
		| "black"
		| "red"
		| "green"
		| "yellow"
		| "blue"
		| "magenta"
		| "cyan"
		| "white";
	letterSpacing: number;
	lineHeight: number;
	space: boolean;
	maxLength: number;
};

const defaultCFontProps: CFontProps = {
	font: "block",
	align: "left",
	colors: ["system"],
	backgroundColor: "transparent",
	letterSpacing: 1,
	lineHeight: 1,
	space: true,
	maxLength: 0
};

export const BigText: React.FC<BigTextProps> = ({ text, ...props }) => {
	const cFontProps = { ...defaultCFontProps, ...props };
	return <Text>{CFonts.render(text, cFontProps).string}</Text>;
};

export default BigText;
