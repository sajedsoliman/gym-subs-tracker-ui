// types
import { Member, MemberInputs } from "@types";

// helpers
import { objectLength } from "@/utils/helpers";

// graphql
import { CREATE_MEMBER, UPDATE_MEMBER } from "@/graphql/mutations";

// hooks
import { useState } from "react";
import useScroll from "@/reusables/hooks/useScroll";
import { useMutation } from "@apollo/client";

// ui
import { Heading, VStack } from "@chakra-ui/react";

// components
import { Outlet } from "react-location";
import Page from "@/components/page/Page";
import PageHeading from "@/components/page/PageHeading";
import MembersData from "@/components/members/MembersData";

const Members = () => {
	return (
		<Page>
			<VStack w="full" alignItems="flex-start" spacing={10}>
				<PageHeading>صفحة الاعبين</PageHeading>

				<Outlet />

				<VStack align="start" w="full" spacing={7}>
					<Heading size="lg">جميع الاعبين</Heading>

					<MembersData />
				</VStack>
			</VStack>
		</Page>
	);
};

export default Members;
