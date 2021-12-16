// types
import { SubscriptionsFilterInputs, SubscriptionsSearchParams } from "@/types";
import { LocationGenerics } from "@router";

// hooks
import { useNavigate, useSearch } from "react-location";

// ui
import { VStack, Button, Input, Wrap, WrapItem } from "@chakra-ui/react";

// components
import { SelectInputControl } from "@/reusables/ui/controls";
import { useForm } from "react-hook-form";
import {
	daysOptions,
	monthsOptions,
	subscriptionPaymentStatusOptions,
	yearsOptions,
} from "@/utils/info";

const SubscriptionsFilters = () => {
	// location
	const navigate = useNavigate<LocationGenerics>();
	const { subscriptionsFilters } = useSearch<LocationGenerics>();

	// useForm hook
	const getDefaultValues = (): SubscriptionsFilterInputs => {
		return {
			...subscriptionsFilters,
			paidStatus:
				subscriptionsFilters?.paidStatus != undefined
					? subscriptionsFilters?.paidStatus
						? "paid"
						: "unpaid"
					: undefined,
		};
	};
	const { register, handleSubmit } = useForm<SubscriptionsFilterInputs>({
		defaultValues: getDefaultValues(),
	});

	// handlers
	const submitFiltersHandler = (data: SubscriptionsSearchParams) => {
		const searchParams: SubscriptionsSearchParams = {};

		if (data.memberName) searchParams.memberName = data.memberName;
		if (data.paidStatus != undefined) searchParams.paidStatus = data.paidStatus;
		if (data.day) searchParams.day = data.day;
		if (data.month) searchParams.month = data.month;
		if (data.year) searchParams.year = data.year;

		navigate({
			to: "/subscriptions",
			search:
				Object.entries(searchParams).length !== 0
					? { subscriptionsFilters: searchParams }
					: undefined,
		});
	};

	return (
		<VStack
			as="form"
			// @ts-ignore
			onSubmit={handleSubmit(submitFiltersHandler)}
			w="full"
			align="flex-start"
			spacing={4}
		>
			<Wrap align="center" flexDirection={{ base: "column", md: "row" }}>
				<WrapItem>
					<Input
						variant="filled"
						placeholder="اسم الاعب"
						{...register("memberName")}
					/>
				</WrapItem>
				<WrapItem>
					<SelectInputControl
						options={subscriptionPaymentStatusOptions}
						placeholder="حالة الدفع"
						{...register("paidStatus", {
							setValueAs: (value) => (value ? value == "paid" : undefined),
						})}
					/>
				</WrapItem>
				<WrapItem>
					<SelectInputControl
						options={daysOptions}
						placeholder="يوم"
						{...register("day", { valueAsNumber: true })}
					/>
				</WrapItem>
				<WrapItem>
					<SelectInputControl
						options={monthsOptions}
						placeholder="شهر"
						{...register("month", { valueAsNumber: true })}
					/>
				</WrapItem>
				<WrapItem>
					<SelectInputControl
						options={yearsOptions()}
						placeholder="سنة"
						{...register("year", { valueAsNumber: true })}
					/>
				</WrapItem>

				<WrapItem>
					<Button type="submit" colorScheme="blue" size="sm">
						إبحث
					</Button>
				</WrapItem>
			</Wrap>
		</VStack>
	);
};

export default SubscriptionsFilters;
