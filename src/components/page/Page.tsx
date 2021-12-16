// types
type Props = {
	children: JSX.Element | JSX.Element[];
};

import { Flex } from "@chakra-ui/react";

const Page = ({ children }: Props) => {
	return <Flex py={{ base: 10, md: 15 }}>{children}</Flex>;
};

export default Page;
