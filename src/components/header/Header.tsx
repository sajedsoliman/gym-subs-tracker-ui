// info
import { ROUTE_PATHS } from "@/utils/info";

// ui
import { HStack, Link } from "@chakra-ui/react";

// components
import { Link as RouterLink } from "react-location";

const Header = () => {
	return (
		<HStack pt={5} as="header">
			<Link to={ROUTE_PATHS.SUBSCRIBERS} as={RouterLink}>
				الاعبين
			</Link>
			<Link to={ROUTE_PATHS.ADD_SUBSCRIBER} as={RouterLink}>
				إضافة لاعب
			</Link>
			<Link to={ROUTE_PATHS.SUBSCRIPTIONS} as={RouterLink}>
				الاشتراكات
			</Link>
		</HStack>
	);
};

export default Header;
