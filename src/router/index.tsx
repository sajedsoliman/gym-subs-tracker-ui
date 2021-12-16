// views & sub-views
import {
	Members as MembersPage,
	Subscriptions as SubscriptionsPage,
} from "@views/index";
import MemberActions from "@views/sub-views/MemberActions";

// types
import { Member, MembersSearchParams, SubscriptionsSearchParams } from "@types";

// info
import { ROUTE_PATHS } from "../utils/info";

import { Route, ReactLocation, Navigate, MakeGenerics } from "react-location";

export const routes: Route[] = [
	{
		path: "/",
		element: <Navigate to={ROUTE_PATHS.SUBSCRIBERS} />,
	},
	{
		path: ROUTE_PATHS.SUBSCRIBERS,
		element: <MembersPage />,
		children: [
			{
				path: "/add",
				element: <MemberActions />,
			},
		],
	},
	{
		path: ROUTE_PATHS.SUBSCRIPTIONS,
		element: <SubscriptionsPage />,
	},
];

export const location = new ReactLocation();

export type LocationGenerics = MakeGenerics<{
	Search: {
		subscriptionsFilters?: SubscriptionsSearchParams;
		membersFilters?: MembersSearchParams;
	};
}>;
