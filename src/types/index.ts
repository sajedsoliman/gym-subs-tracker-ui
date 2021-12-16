export type MemberPositions = "student" | "adult";

export type MemberInputs = {
	name: string;
	phone: string | null;
	position: MemberPositions;
};

export type Member = {
	id: string;
	name: string;
	phone: string | null;
	position: MemberPositions;
	enrollmentDate: string;
};

export type SubscriptionInputs = {
	duration: number;
	isPaid: "paid" | "unpaid";
};

export type Subscription = {
	id: string;
	member: Member;
	startingDate: string;
	expiringDate: string;
	amount: number;
	isPaid: boolean;
};

export type SubscriptionsSearchParams = {
	memberName?: string;
	paidStatus?: boolean;
	day?: number;
	month?: number;
	year?: number;
};
export type SubscriptionsFilterInputs = Omit<
	SubscriptionsSearchParams,
	"paidStatus"
> & { paidStatus?: "paid" | "unpaid" };

export type MembersSearchParams = {
	name?: string;
};
