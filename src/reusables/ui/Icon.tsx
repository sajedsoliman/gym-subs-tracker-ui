// types
type Variant = "solid" | "outlined" | "sharp";
type Props = {
	name: string;
	variant?: Variant;
};

import { Center } from "@chakra-ui/react";

const Icon = ({ name, variant = "outlined" }: Props) => {
	// return flex-displayed element wrapped on a ionicon span
	return (
		<Center fontSize="23px">
			<ion-icon name={`${name}${getStyleFromVariant(variant)}`}></ion-icon>
		</Center>
	);
};

export default Icon;

function getStyleFromVariant(variant: Variant) {
	let style = "";

	if (variant === "outlined") style = "-outline";
	else style = "-sharp";

	return style;
}

// declare more jsx components to be allowed by typescript
declare global {
	namespace JSX {
		interface IntrinsicElements {
			"ion-icon": any;
		}
	}
}
