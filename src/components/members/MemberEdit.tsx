// types
import { Member, MemberInputs } from "@/types";
type Props = {
	member: Member;
};

// helpers

// ui
import { Tr, Td, Input, Button, FormErrorMessage } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const MemberEdit = ({ member }: Props) => {
	// flat the member's props
	const { name, phone, position, id } = member;

	// useForm hook
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<MemberInputs>({
		defaultValues: { name, phone, position },
	});

	// handlers
	const editMemberHandler = (data: MemberInputs) => {
		console.log(data);
	};

	return (
		<Tr>
			<Td>
				<Input
					{...register("name", {
						required: { value: true, message: "يجب وضع اسم" },
					})}
				/>
			</Td>
			<Td>
				<Input {...register("phone")} />
			</Td>
			<Td>{/* select */}</Td>
			<Td>
				<Button
					size="sm"
					onClick={handleSubmit(editMemberHandler)}
					colorScheme="red"
				>
					تثبيت التغيير
				</Button>
			</Td>
		</Tr>
	);
};

export default MemberEdit;
