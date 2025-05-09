"use client";

import type { BrowserClient } from "@pipedream/sdk/browser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  type FC,
  type ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { SSRSafeWrapper } from "../components/SSRSafeWrapper";
import { isSSR } from "../utils/isSSR";

const FrontendClientContext = createContext<BrowserClient | undefined>(
  undefined
);

export const useFrontendClient = () => {
  // Prevent context usage during SSR
  if (isSSR()) {
    throw new Error(
      "useFrontendClient cannot be used during server-side rendering"
    );
  }

  const context = useContext(FrontendClientContext);

  if (!context) {
    throw new Error("Must be used inside FrontendClientProvider");
  }

  return context;
};

type FrontendClientProviderProps = {
  children: ReactNode;
  client: BrowserClient;
};

export const FrontendClientProvider: FC<FrontendClientProviderProps> = ({
  children,
  client,
}: FrontendClientProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 60,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <SSRSafeWrapper fallback={<>{children}</>}>
      <QueryClientProvider client={queryClient}>
        <FrontendClientContext.Provider value={client}>
          {children}
        </FrontendClientContext.Provider>
      </QueryClientProvider>
    </SSRSafeWrapper>
  );
};
