import React, { lazy } from "react";
import useBookList from "../../../features/books/useBooks";
import get from "lodash/get";

const Card = lazy(() => import("./Card"));

const BookList = () => {
  const { bookItems, loading, error } = useBookList();
  console.log("bookItems", bookItems);

  if (!bookItems) return;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {bookItems.map((book, index) => {
        const bookName = book.volumeInfo.title;
        const bookAuthors = book.volumeInfo.authors;
        const defaultImage =
          "https://images-na.ssl-images-amazon.com/images/I/51fRKyqPWDL.jpg";
        const bookImage = get(
          book,
          "volumeInfo.imageLinks.thumbnail",
          defaultImage
        );
        const key = book.id || index;

        return (
          <React.Suspense key={key} fallback={<div>Loading Card...</div>}>
            <Card
              key={key}
              image={bookImage}
              authors={bookAuthors}
              name={bookName}
            />
          </React.Suspense>
        );
      })}
    </div>
  );
};

export default BookList;
