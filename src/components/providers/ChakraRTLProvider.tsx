import {
	ChakraProvider,
	extendTheme,
	withDefaultProps,
} from "@chakra-ui/react";

function ChakraRTLProvider({ children }: { children: JSX.Element }) {
	const direction = "rtl";

	const theme = extendTheme({
		direction,
		fonts: { heading: "Cairo", body: "Cairo" },
	});

	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default ChakraRTLProvider;
