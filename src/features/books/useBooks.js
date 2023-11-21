import { useSelector } from "react-redux";
import { selectBooks } from "../books.selectors";

const useBookList = () => {
  //you told me to use a useBooks that gets specific data I need from the selector. Don't understand this abstraction, since I can just use the selector whenever I need it. Why use a custom hook?
  //Also should I create a file with all my selectors and import them when needed? Like below
  // const booksData2 = useSelector(selectBooks);

  const booksData = useSelector((state) => state.books);

  const { books, loading, error } = booksData;
  const bookItems = books?.items;

  return { bookItems, loading, error };
};

export default useBookList;
