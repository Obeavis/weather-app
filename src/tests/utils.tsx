import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ComponentType, ReactNode } from "react";

const testQueryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

export function createWrapper(children: ReactNode): ComponentType {
	return function MockComponent() {
		return <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>;
	};
}
