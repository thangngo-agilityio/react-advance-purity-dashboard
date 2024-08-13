/**
 * Handle return a object from search params
 * @param searchParams
 * @returns queryParam object
 */
export const getSearchParams = (
  searchParams: URLSearchParams,
): Record<string, string> => {
  const queryParam: Record<string, string> = {};

  searchParams.forEach((value, key) => {
    queryParam[key] = value;
  });

  return queryParam;
};
