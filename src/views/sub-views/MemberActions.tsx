// actions are: add and update

// types
import { MemberInputs } from "@types";

// helpers
import { objectLength } from "@/utils/helpers";

// graphql
import { CREATE_MEMBER, UPDATE_MEMBER } from "@/graphql/mutations";

// ui
import { Heading, VStack } from "@chakra-ui/react";

// hooks
import { useMutation } from "@apollo/client";
import useGlobalStore from "@/global-store";

// components
import MemberForm from "@components/forms/MemberForm";

const MemberAdd = () => {
	// store
	const { toBeEditedMember, setToBeEditedMember } = useGlobalStore(
		(state) => state
	);

	// create member mutation
	const [createMember] = useMutation(CREATE_MEMBER, {
		refetchQueries: ["getMembers"],
	});

	// update member mutation
	const [updateMember] = useMutation(UPDATE_MEMBER);

	// handlers
	const createMemberHandler = (data: MemberInputs) => {
		createMember({ variables: { member: data } });
	};
	const updateMemberHandler = (data: MemberInputs) => {
		const updatedValues: Partial<MemberInputs> = {};

		if (toBeEditedMember!.name != data.name) {
			updatedValues.name = data.name;
		}
		if (toBeEditedMember!.phone != data.phone) {
			updatedValues.phone = data.phone;
		}
		if (toBeEditedMember!.position != data.position) {
			updatedValues.position = data.position;
		}

		setToBeEditedMember(null);

		if (objectLength(updatedValues) === 0) return null;

		updateMember({
			variables: { id: toBeEditedMember!.id, newValues: updatedValues },
		});
	};

	return (
		<VStack w="full" align="start" spacing={5}>
			<Heading size="lg">
				{toBeEditedMember ? "تعديل الاعب" : "إضافة لاعب جديد"}
			</Heading>

			{toBeEditedMember ? (
				<MemberForm
					key={toBeEditedMember.name}
					action="update"
					currentMember={toBeEditedMember}
					handler={updateMemberHandler}
				/>
			) : (
				<MemberForm action="add" handler={createMemberHandler} />
			)}
		</VStack>
	);
};

export default MemberAdd;
