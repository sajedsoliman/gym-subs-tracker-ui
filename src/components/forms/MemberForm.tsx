// types
import { MemberInputs } from "@/types";
type Props = {
	handler: (data: MemberInputs) => void;
	action: "add" | "update";
	currentMember?: MemberInputs | null;
};

// hooks

// ui
import {
	SimpleGrid,
	GridItem,
	useBreakpointValue,
	Button,
	Box,
	Center,
} from "@chakra-ui/react";

// hooks
import { useEffect } from "react";
import { useForm } from "react-hook-form";

// helpers & info
import { phoneNumberRegex } from "@/utils/helpers";
import { positionOptions } from "@/utils/info";

// components
import {
	TextInputControl,
	NumberInputControl,
	SelectInputControl,
} from "@/reusables/ui/controls";

const MemberForm = ({ handler, action, currentMember }: Props) => {
	// useForm hook
	const formDefaultValues = currentMember || {
		name: "",
		phone: "",
		position: "student",
	};

	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors, isSubmitSuccessful },
	} = useForm<MemberInputs>({
		defaultValues: formDefaultValues,
		shouldFocusError: false,
		shouldUnregister: true,
	});

	useEffect(() => {
		// reset the form if the member was successfully added
		if (isSubmitSuccessful) reset();
	}, [isSubmitSuccessful]);

	// responsive props
	const inputGridItemColSpan = useBreakpointValue({ base: 2, sm: 1 });

	// vars
	const isUpdateAction = action === "update";

	return (
		<Box as="form" w="full" onSubmit={handleSubmit(handler)}>
			<SimpleGrid columns={2} w="full" columnGap={2} rowGap={4}>
				<GridItem colSpan={inputGridItemColSpan}>
					<TextInputControl
						{...register("name", {
							pattern: { value: /.{10,}/, message: "الاسم قصير" },
							required: { value: true, message: "الحقل مطلوب" },
							shouldUnregister: true,
						})}
						label="اسم الاعب"
						placeholder="احمد مراد حمدان"
						errorMessage={errors.name?.message}
						isRequired
					/>
				</GridItem>

				<GridItem colSpan={inputGridItemColSpan}>
					<NumberInputControl
						{...register("phone", {
							pattern: {
								value: phoneNumberRegex,
								message: "الرقم غير صحيح",
							},
							shouldUnregister: true,
						})}
						placeholder="0597320826"
						label="رقم الجوال"
						errorMessage={errors.phone?.message}
					/>
				</GridItem>

				<GridItem colSpan={inputGridItemColSpan}>
					<SelectInputControl
						{...register("position", {
							shouldUnregister: true,
						})}
						label="المنصب"
						options={positionOptions}
					/>
				</GridItem>

				<GridItem colSpan={2}>
					<Center>
						<Button
							w={{ base: "full", md: "250px" }}
							type="submit"
							colorScheme="green"
						>
							{isUpdateAction ? "تعديل" : "اضافة"}
						</Button>
					</Center>
				</GridItem>
			</SimpleGrid>
		</Box>
	);
};

export default MemberForm;
