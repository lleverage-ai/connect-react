import type { GetAppResponse } from "@pipedream/sdk";
import { type UseQueryOptions, useQuery } from "@tanstack/react-query";

import { useFrontendClient } from "./frontend-client-context";

/**
 * Get details about an app
 */
export const useApp = (
  slug: string,
  opts?: {
    useQueryOpts?: Omit<
      UseQueryOptions<GetAppResponse>,
      "queryKey" | "queryFn"
    >;
  },
) => {
  const client = useFrontendClient();
  const query = useQuery({
    queryKey: ["app", slug],
    queryFn: () => client.app(slug),
    ...opts?.useQueryOpts,
  });

  return {
    ...query,
    app: query.data?.data,
  };
};
