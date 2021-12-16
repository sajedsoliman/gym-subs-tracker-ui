import { MemberPositions } from "@/types";
import { ReactLocation } from "react-location";

export const phoneNumberRegex = /^05[6|9]\d{7,7}$/;

export function positionFromEnglish(position: MemberPositions) {
	return position === "student" ? "طالب" : "عامل / موظف";
}

export function convertToArabicDate(date: Date) {
	return date.toLocaleDateString("ar-EG");
}

export function paymentStatusToArabic(isPaid: boolean) {
	return isPaid ? "واصل" : "غير مدفوع";
}

const subscriptionDurationsInMonths: { [key: number]: string } = {
	1: "شهر",
	3: "3 اشهر",
	6: "6 اشهر",
	12: "سنة",
};

export function getSubscriptionDurationInWords(date: Date, due: Date) {
	const durationInMillisecond = due.getTime() - date.getTime();
	const durationInMonths = durationInMillisecond / 1000 / 60 / 60 / 24 / 30;
	const withoutDecimal = durationInMonths.toFixed();
	const convertedToNumber = parseInt(withoutDecimal);

	return subscriptionDurationsInMonths[convertedToNumber];
}

export function getQueryParams<QueryParams>(search: string) {
	const params = new URLSearchParams(search);
	let queryParams = {} as Record<keyof QueryParams, string>;

	params.forEach((value, key) => {
		const k = key as keyof QueryParams;
		queryParams[k] = value;
	});

	return queryParams;
}

export function dateAfterMonths(monthsToAdd: number) {
	const currentDate = new Date();
	// add months to the current Date
	const currentMonth = currentDate.getMonth();
	currentDate.setMonth(currentMonth + monthsToAdd);

	return currentDate;
}

export const goToMemberSubscriptions = (
	location: ReactLocation,
	name: string
) => {
	location.history.push({
		pathname: "subscriptions",
		search: `?memberName=${name}`,
	});
};
export const daysInMonth = (month: number) => {
	return new Date(
		2020,
		month,
		0 /* 0 means the last day of the month */
	).getDate();
};
export const monthArabicName = (month: number) => {
	return new Date(2021, month).toLocaleDateString("ar-EG", { month: "long" });
};
export const objectLength = (obj: Record<any, any>) =>
	Object.entries(obj).length;
