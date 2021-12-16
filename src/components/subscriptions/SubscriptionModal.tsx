// types
import { Member, SubscriptionInputs } from "@types";
type Props = {
	isOpened: boolean;
	onClose: () => void;
	member: Member;
};

// info & helpers
import {
	subscriptionDurationOptions,
	subscriptionFeeByPosition,
	subscriptionPaymentStatusOptions,
} from "@utils/info";
import { dateAfterMonths, goToMemberSubscriptions } from "@utils/helpers";

// graphql
import { CREATE_SUBSCRIPTION } from "@graphql/mutations";

// ui
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Flex,
	Alert,
	AlertIcon,
	AlertDescription,
	AlertTitle,
	VStack,
} from "@chakra-ui/react";

// hooks
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useLocation } from "react-location";

// components
import { SelectInputControl } from "@/reusables/ui/controls";

const SubscriptionModal = ({ isOpened, onClose, member }: Props) => {
	// location
	const location = useLocation();

	// create subscription mutation
	const [createSubscription, { error: qlError }] = useMutation(
		CREATE_SUBSCRIPTION,
		{
			refetchQueries: ["getSubscriptions"],
		}
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SubscriptionInputs>({
		defaultValues: { duration: 1, isPaid: "paid" },
	});

	// handlers
	const submitFormHandler = async (data: SubscriptionInputs) => {
		const expiringDate = dateAfterMonths(data.duration);
		const isPaid = data.isPaid === "paid";
		const amount = subscriptionFeeByPosition[member.position];

		const result = await createSubscription({
			variables: {
				subscription: { expiringDate, isPaid, member: member.id, amount },
			},
		});
		if (result.data?.createSubscription) {
			onClose();

			goToMemberSubscriptions(location, member.name);
		}
	};

	return (
		<Modal
			blockScrollOnMount
			isCentered
			isOpen={isOpened}
			onClose={onClose}
			motionPreset="slideInRight"
			scrollBehavior="inside"
			size="xl"
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>إضافة اشتراك</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<VStack spacing={4} align="start">
						{qlError?.message && (
							<Alert borderRadius="lg" status="error">
								<AlertIcon />
								<AlertTitle mr={2}>{qlError.message}</AlertTitle>
								<AlertDescription>يوجد اشتراك لم ينتهي بعد</AlertDescription>
							</Alert>
						)}

						<Flex
							w="full"
							align="center"
							direction={{ base: "row", md: "column" }}
							sx={{ gap: 10 }}
						>
							<SelectInputControl
								{...register("duration", { valueAsNumber: true })}
								label="المدة"
								options={subscriptionDurationOptions}
							/>
							<SelectInputControl
								{...register("isPaid")}
								label="حالة الدفع"
								options={subscriptionPaymentStatusOptions}
							/>
						</Flex>
						<Button
							size="sm"
							w={70}
							mt={3}
							colorScheme="green"
							onClick={handleSubmit(submitFormHandler)}
						>
							اضافة
						</Button>
					</VStack>
				</ModalBody>

				<ModalFooter>
					<Button size="sm" colorScheme="red" onClick={onClose}>
						إغلاق
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default SubscriptionModal;
