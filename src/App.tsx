// ui
import { useColorMode } from "@chakra-ui/color-mode";
import { Container } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import Icon from "@/reusables/ui/Icon";

// components
import { Outlet } from "react-location";
import Header from "@/components/header/Header";

function App() {
	// hook calls
	const { toggleColorMode, colorMode } = useColorMode();

	// vars
	const isModeDark = colorMode === "dark";

	return (
		<Container maxW="container.lg" px={{ base: 5, lg: 0 }}>
			<Header />

			{/* mode toggler */}
			<IconButton
				icon={<Icon name={isModeDark ? "sunny" : "moon"} variant="solid" />}
				pos="fixed"
				bottom={10}
				insetStart={10}
				zIndex={10000}
				onClick={toggleColorMode}
				aria-label="Toggle Dark Mode"
			/>

			{/* app content */}
			<Outlet />
		</Container>
	);
}

export default App;
