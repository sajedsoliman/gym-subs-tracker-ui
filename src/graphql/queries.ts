import { gql } from "@apollo/client";

export let GET_MEMBERS = gql`
	query getMembers($name: String) {
		members(name: $name) {
			id
			name
			enrollmentDate
			position
			phone
		}
	}
`;
export let GET_SUBSCRIPTIONS = gql`
	query getSubscriptions(
		$memberName: String
		$paidStatus: Boolean
		$day: Int
		$month: Int
		$year: Int
	) {
		subscriptions(
			memberName: $memberName
			paidStatus: $paidStatus
			day: $day
			month: $month
			year: $year
		) {
			id
			member {
				id
				name
				enrollmentDate
				position
				phone
			}
			startingDate
			expiringDate
			isPaid
			amount
		}
	}
`;
