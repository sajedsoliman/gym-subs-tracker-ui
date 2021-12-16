// types
import { Member, MembersSearchParams } from "@/types";
import { LocationGenerics } from "@/router";

type Props = {};

// graphql
import { GET_MEMBERS } from "@/graphql/queries";

// helpers & info

// hooks
import { useNavigate, useSearch } from "react-location";
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

// ui
import {
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	VStack,
	Divider,
	Box,
	Heading,
} from "@chakra-ui/react";

// components
import MemberFilters from "@/components/members/MemberFilters";
import MemberRow from "@/components/members/MemberRow";

const MembersData = ({}: Props) => {
	// location
	const { membersFilters } = useSearch<LocationGenerics>();

	// fetch members query
	const [
		fetchMembers,
		{ data: membersData, error: qlError, loading: isLoadingMembers },
	] = useLazyQuery<{ members: Member[] }, MembersSearchParams>(GET_MEMBERS, {
		variables: membersFilters,
	});

	useEffect(() => {
		fetchMembers();
	}, []);

	if (isLoadingMembers || !membersData) return null;

	// vars
	const members = membersData.members;

	// methods
	const getMappedMembersRows = () =>
		members.map((member) => <MemberRow member={member} key={member.id} />);

	return (
		<VStack spacing={6} divider={<Divider orientation="horizontal" />} w="full">
			<VStack w="full" align="start" spacing={3}>
				<Heading fontSize={18}>إظهار حسب</Heading>
				<MemberFilters />
			</VStack>

			<Box w="full" overflow="auto">
				<Table minW={750} colorScheme="green">
					<Thead>
						<Tr>
							<Th></Th>
							<Th>اسم الاعب</Th>
							<Th>رقم الجوال</Th>
							<Th>المنصب</Th>
							<Th>تاريخ الانضمام</Th>
						</Tr>
					</Thead>
					<Tbody>{getMappedMembersRows()}</Tbody>
				</Table>
			</Box>
		</VStack>
	);
};

export default MembersData;
