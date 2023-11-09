import { getGoogleBooksUrl } from "../utils/envUtils";

export const searchForBooks = (query) => {
  const googleBaseUrl = getGoogleBooksUrl();
  return `${googleBaseUrl}/books/v1/volumes?q=${query}`;
};
