import { daysInMonth, monthArabicName } from "./helpers";

export const ROUTE_PATHS = {
	SUBSCRIPTIONS: "/subscriptions",
	SUBSCRIBERS: "/members",
	ADD_SUBSCRIBER: "/members/add",
};
export const positionOptions = [
	{
		value: "student",
		label: "طالب",
	},
	{
		value: "adult",
		label: "عامل / موظف",
	},
];
export const subscriptionDurationOptions = [
	{
		value: "1",
		label: "شهر",
	},
	{
		value: "3",
		label: "3 اشهر",
	},
	{
		value: "6",
		label: "6 اشهر",
	},
	{
		value: "12",
		label: "سنة",
	},
];
export const subscriptionPaymentStatusOptions = [
	{
		value: "paid",
		label: "واصل",
	},
	{
		value: "unpaid",
		label: "غير مدفوع",
	},
];
export const daysOptions = Array.from({
	length: daysInMonth(new Date().getMonth()),
}).map((_, index) => ({
	label: (index + 1).toString(),
	value: (index + 1).toString(),
}));
export const monthsOptions = Array.from({ length: 12 }).map((_, index) => ({
	label: monthArabicName(index),
	value: index.toString(),
}));
const STARTING_YEAR = 2020;
export const yearsOptions = () => {
	const options = [];
	const currentYear = new Date().getFullYear();
	for (let y = STARTING_YEAR; y <= currentYear; y++) {
		options.push({ label: y.toString(), value: y.toString() });
	}
	return options;
};
export const subscriptionFeeByPosition = {
	student: 80,
	adult: 100,
};
