// types
import { Subscription } from "@types";
import { LocationGenerics } from "@/router";

type Props = {
	subscriptions?: Subscription[];
};

// helpers

// graphql
import { GET_SUBSCRIPTIONS } from "@graphql/queries";

// hooks
import { useSearch } from "react-location";
import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";

// ui
import {
	Box,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Heading,
	VStack,
	Alert,
	AlertTitle,
	Td,
	Tfoot,
} from "@chakra-ui/react";

// components
import SubscriptionRow from "@components/subscriptions/SubscriptionRow";
import SubscriptionsFilters from "@components/subscriptions/SubscriptionsFilters";

const SubscriptionsData = ({}: Props) => {
	// location
	const { subscriptionsFilters } = useSearch<LocationGenerics>();

	// fetch subscriptions query
	const [
		fetchSubscriptions,
		{
			data: subscriptionsData,
			error: qlError,
			loading: isLoadingSubscriptions,
		},
	] = useLazyQuery<{ subscriptions: Subscription[] }>(GET_SUBSCRIPTIONS, {
		variables: subscriptionsFilters,
	});

	useEffect(() => {
		fetchSubscriptions();
	}, [subscriptionsFilters]);

	if (isLoadingSubscriptions) return null;

	// vars
	const subscriptions = subscriptionsData?.subscriptions;

	// methods
	const getMappedSubscriptionsRows = () =>
		subscriptions?.map((subscription, index) => (
			<SubscriptionRow key={index} subscription={subscription} />
		));
	const noSubscriptions = () => !subscriptions || subscriptions.length === 0;
	const totalPayments = () =>
		subscriptions?.reduce(
			(total, sub) => (sub.isPaid ? sub.amount + total : total),
			0
		);

	return (
		<VStack spacing={7} w="full" align="start">
			<SubscriptionsFilters />

			{qlError && (
				<Alert status="error" borderRadius="md">
					<AlertTitle>{qlError.message}</AlertTitle>
				</Alert>
			)}

			{noSubscriptions() ? (
				<Heading size="lg">لا يوجد اشتراكات</Heading>
			) : (
				<Box w="full" overflowY="hidden" overflowX="auto">
					<Table minW={850}>
						<Thead>
							<Tr>
								<Th>اسم الاعب</Th>
								<Th>المبلغ</Th>
								<Th>تاريخ البدء</Th>
								<Th>تاريخ الانتهاء</Th>
								<Th>المدة</Th>
								<Th>حالة الدفع</Th>
								{/* <Th></Th> */}
							</Tr>
						</Thead>
						<Tbody>{getMappedSubscriptionsRows()}</Tbody>
						<Tfoot>
							<Tr>
								<Th>المجموع</Th>
								<Th fontSize="sm">{totalPayments()} شيكل</Th>
							</Tr>
						</Tfoot>
					</Table>
				</Box>
			)}
		</VStack>
	);
};

export default SubscriptionsData;
