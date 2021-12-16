// types
import { Member } from "@/types";
type Props = {
	member: Member;
};

// helpers
import {
	positionFromEnglish,
	convertToArabicDate,
	goToMemberSubscriptions,
} from "@/utils/helpers";

// hooks
import useToggle from "@/reusables/hooks/useToggle";
import { useLocation } from "react-location";
import useScroll from "@/reusables/hooks/useScroll";

// ui
import { Tr, Td, Button } from "@chakra-ui/react";

// components
import SubscriptionModal from "@/components/subscriptions/SubscriptionModal";
import useGlobalStore from "@/global-store";

const MemberRow = ({ member }: Props) => {
	// flat the member's props
	const { name, phone, position, enrollmentDate } = member;

	// location
	const location = useLocation();

	// store
	const { setToBeEditedMember } = useGlobalStore((state) => state);

	// scroll hook
	const { scrollTop } = useScroll();

	// add subscription modal toggler
	const [subscriptionModalVisible, toggleSubscriptionModal] = useToggle();

	// methods
	const openEditView = () => {
		setToBeEditedMember(member);

		location.history.push("/members/add");

		scrollTop();
	};

	return (
		<Tr>
			<Td>
				<Button size="sm" colorScheme="green" onClick={toggleSubscriptionModal}>
					إشتراك
				</Button>
			</Td>
			<Td
				cursor="pointer"
				onClick={() => goToMemberSubscriptions(location, name)}
			>
				{name}
			</Td>
			<Td>{phone ? phone : "لا يوجد"}</Td>
			<Td>{positionFromEnglish(position)}</Td>
			<Td letterSpacing={0.7}>
				{convertToArabicDate(new Date(enrollmentDate))}
			</Td>
			<Td>
				<Button size="sm" colorScheme="blue" onClick={openEditView}>
					تعديل
				</Button>
			</Td>

			{/* subscription Modal */}
			<SubscriptionModal
				isOpened={subscriptionModalVisible}
				onClose={toggleSubscriptionModal}
				member={member}
			/>
		</Tr>
	);
};

export default MemberRow;
