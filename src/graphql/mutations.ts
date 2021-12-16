import { gql } from "@apollo/client";

export let PAY_SUBSCRIPTION = gql`
	mutation paySubscription($id: ID!) {
		paySubscription(id: $id) {
			isPaid
			id
		}
	}
`;
export let CREATE_SUBSCRIPTION = gql`
	mutation createSubscription($subscription: SubscriptionInputs!) {
		createSubscription(subscription: $subscription) {
			id
			startingDate
			expiringDate
			amount
			isPaid
			member {
				name
				id
			}
		}
	}
`;
export let CANCEL_SUBSCRIPTION = gql`
	mutation cancelSubscription($id: ID!) {
		cancelSubscription(id: $id) {
			id
			startingDate
			expiringDate
			amount
			isPaid
			member {
				name
				id
			}
		}
	}
`;
export let CREATE_MEMBER = gql`
	mutation createMember($member: MemberInputs!) {
		createMember(member: $member) {
			id
			name
			position
			enrollmentDate
			phone
		}
	}
`;
export let UPDATE_MEMBER = gql`
	mutation createMember($newValues: UpdateMemberInputs!, $id: ID!) {
		updateMember(member: $newValues, id: $id) {
			id
			name
			position
			enrollmentDate
			phone
		}
	}
`;
