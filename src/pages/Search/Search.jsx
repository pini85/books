import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearBooks } from "../../features/books/booksSlice";
import { useAuth } from "../../context/useAuth";
import { fetchBooks } from "../../features/books/booksSlice";
import useDebounce from "../../hooks/useDebounce";
import Input from "../../components/Input/Input";
import BookList from "./components/BookList";
const Search = () => {
  const [query, setQuery] = useState("");
  const { user } = useAuth();
  const debouncedQuery = useDebounce(query, 300);
  const dispatch = useDispatch();

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(fetchBooks(debouncedQuery));
    } else {
      dispatch(clearBooks());
    }
  }, [debouncedQuery, dispatch]);

  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Welcome {user.name}</h1>
      <div>
        <Input
          type="search"
          placeholder="search for books"
          ariaLabel="search for books"
          name="search"
          label="search"
          onChange={(value) => setQuery(value)}
          autoFocus
        />

        {query && <BookList />}
      </div>
    </main>
  );
};
export default Search;
