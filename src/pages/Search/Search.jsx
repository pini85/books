import { useAuth } from "../../context/useAuth";
import BookList from "./components/BookList";
import SearchContainer from "./components/SearchContainer";
const Search = () => {
  const { user } = useAuth();

  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Welcome {user.name}</h1>
      <div>
        <SearchBookInput />

        <BookList />
      </div>
    </main>
  );
};
export default Search;
