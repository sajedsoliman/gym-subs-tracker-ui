import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import ChakraRTLProvider from "@/components/providers/ChakraRTLProvider";

// react location
import { Router } from "react-location";
import { location, routes } from "@/router";

// apollo imports
import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
} from "@apollo/client";

// the link to the api server
const httpLink = new HttpLink({
	uri: "http://localhost:4000/graphql",
	credentials: "include",
});
// cache
const cache = new InMemoryCache();

// initialize(define) a new apollo client
const client = new ApolloClient({
	link: httpLink,
	cache,
});

ReactDOM.render(
	<React.StrictMode>
		<Router routes={routes} location={location}>
			<ApolloProvider client={client}>
				<ChakraRTLProvider>
					<App />
				</ChakraRTLProvider>
			</ApolloProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
