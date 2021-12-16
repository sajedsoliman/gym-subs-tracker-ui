// helpers & info

// ui
import { VStack } from "@chakra-ui/react";

// hooks

// components
import Page from "@/components/page/Page";
import PageHeading from "@/components/page/PageHeading";
import SubscriptionsData from "@/components/subscriptions/SubscriptionsData";

const Subscriptions = () => {
	return (
		<Page>
			<VStack w="full" alignItems="flex-start" spacing={8}>
				<PageHeading>صفحة الاشتراكات</PageHeading>

				<VStack w="full" align="flex-start">
					<SubscriptionsData />
				</VStack>
			</VStack>
		</Page>
	);
};

export default Subscriptions;
