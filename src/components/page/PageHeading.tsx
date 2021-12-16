// ui
import { Center, Heading } from "@chakra-ui/layout";

const PageHeading = ({ children }: { children?: string }) => {
	return (
		<Center w="full">
			<Heading as="h1">{children}</Heading>
		</Center>
	);
};

export default PageHeading;
