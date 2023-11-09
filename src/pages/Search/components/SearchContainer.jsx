// containers/SearchContainer.js
import { useState } from "react";
import Input from "../../../components/Input/Input";
// const BookList = lazy(() => import("./BookList"));
import BookList from "./BookList";
import useFetch from "../../../hooks/useFetch";
import useDebounce from "../../../hooks/useDebounce";
import { searchForBooks } from "../../../api/constants";

const SearchContainer = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  const searchUrl = searchForBooks(debouncedQuery);

  const { data, loading, error } = useFetch(searchUrl, {
    retries: 3,
    shouldFetch: !!debouncedQuery,
  });

  return (
    <>
      <Input
        type="search"
        placeholder="search for books"
        ariaLabel="search for books"
        name="search"
        label="search"
        onChange={(value) => setQuery(value)}
        autoFocus
      />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && query.length > 0 && <BookList data={data} />}
    </>
  );
};

export default SearchContainer;
