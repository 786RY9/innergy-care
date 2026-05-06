import { useState, useEffect } from "react";
import { client } from "../../tina/__generated__/client";

export function useTinaData<T extends keyof typeof client.queries>(
  queryName: T,
  relativePath: string
) {
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    // We cast to any because the exact signature varies per query, 
    // but they all accept an object with { relativePath: string }
    const fetchQuery = client.queries[queryName] as any;
    
    fetchQuery({ relativePath })
      .then((res: any) => setResponse(res))
      .catch((err: any) => console.error(`Error fetching Tina data for ${relativePath}:`, err));
  }, [queryName, relativePath]);

  return response;
}
