import { Subscription } from "@types";

// types
type Props = {
	subscription: Subscription;
};

// graphql
import { CANCEL_SUBSCRIPTION, PAY_SUBSCRIPTION } from "@graphql/mutations";

// info & helpers
import {
	convertToArabicDate,
	getSubscriptionDurationInWords,
	paymentStatusToArabic,
} from "@utils/helpers";

// hooks
import { useMutation } from "@apollo/client";

// ui
import { Tr, Td, Center, Heading, Text, Button } from "@chakra-ui/react";

const SubscriptionRow = ({ subscription }: Props) => {
	// flat the subscription's props
	const { amount, startingDate, isPaid, member, expiringDate, id } =
		subscription;

	// pay the sub, if is not paid, mutation
	const [paySubscription] = useMutation(PAY_SUBSCRIPTION, {
		variables: { id },
	});

	// cancel the subscription, if is not passed, mutation
	const [cancelSubscription] = useMutation(CANCEL_SUBSCRIPTION, {
		variables: { id },
		refetchQueries: ["getSubscriptions"],
	});

	// methods
	const isPassed = () => new Date() > new Date(expiringDate);

	return (
		<Tr pos="relative">
			<Td>{member.name}</Td>
			<Td>{amount}</Td>
			<Td letterSpacing={0.7}>{convertToArabicDate(new Date(startingDate))}</Td>
			<Td letterSpacing={0.7}>
				<Text>{convertToArabicDate(new Date(expiringDate))}</Text>
				{isPassed() && !isPaid && (
					<Text color="red.500" fontSize="sm">
						منتهية وغير مدفوعة
					</Text>
				)}
			</Td>
			<Td letterSpacing={0.7}>
				{getSubscriptionDurationInWords(
					new Date(startingDate),
					new Date(expiringDate)
				)}
			</Td>
			<Td>
				{paymentStatusToArabic(isPaid)}
				{!isPaid && (
					<Button
						mr={1}
						colorScheme="red"
						size="xs"
						onClick={() => paySubscription()}
					>
						دفع
					</Button>
				)}
			</Td>
			{!isPassed() && (
				<Td>
					<Button
						size="sm"
						fontWeight="bold"
						colorScheme="red"
						onClick={() => cancelSubscription()}
					>
						إلغاء
					</Button>
				</Td>
			)}

			{isPassed() && isPaid && (
				<Center
					pos="absolute"
					left={0}
					w="full"
					h="full"
					bgColor="rgba(0,0,0,.5)"
				>
					<Heading size="sm" color="white">
						منتهية
					</Heading>
				</Center>
			)}
		</Tr>
	);
};

export default SubscriptionRow;
