// types
import { MembersSearchParams } from "@/types";
import { LocationGenerics } from "@/router";

// helpers

// hooks
import { useState } from "react";
import { useNavigate, useSearch } from "react-location";

// ui
import { Button, HStack, Input } from "@chakra-ui/react";

// components
import { TextInputControl } from "@/reusables/ui/controls";

const MemberFilters = () => {
	// location
	const navigate = useNavigate<LocationGenerics>();
	const { membersFilters } = useSearch<LocationGenerics>();

	// state vars
	const [memberName, setMemberName] = useState(membersFilters?.name || "");

	// handlers
	const submitFiltersHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const searchParams: MembersSearchParams = {};

		if (memberName) searchParams.name = memberName;

		navigate({
			search: memberName ? { membersFilters: searchParams } : undefined,
		});
	};

	return (
		<HStack
			as="form"
			// @ts-ignore
			onSubmit={submitFiltersHandler}
			w="full"
			align="flex-start"
			spacing={2}
		>
			<Input
				label="ابحث عن لاعب"
				placeholder="اسم الاعب"
				value={memberName}
				variant="filled"
				onChange={(e) => setMemberName(e.target.value)}
			/>

			<Button type="submit" colorScheme="blue">
				إبحث
			</Button>
		</HStack>
	);
};

export default MemberFilters;
