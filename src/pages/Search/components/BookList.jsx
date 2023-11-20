import React, { useId, lazy } from "react";
const Card = lazy(() => import("./Card"));
// import Card from "./Card";
const BookList = ({ data }) => {
  //custom hook that returns the data. redux selector. the selector will give me exactly what i need.redux selector specific for my view. can you spread.
  // const { data, loading, error } = useBookList();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(data);
  const renderBooks = (data) => {
    return data.items.map((book) => {
      const bookName = book.volumeInfo.title;
      const bookAuthors = book.volumeInfo.authors;
      const bookImage =
        //use lodash get here
        book.volumeInfo?.imageLinks?.thumbnail ||
        "https://images-na.ssl-images-amazon.com/images/I/51fRKyqPWDL.jpg";
      return (
        <React.Suspense key={id} fallback={<div>Loading Card...</div>}>
          <Card
            key={id}
            image={bookImage}
            authors={bookAuthors}
            name={bookName}
          />
        </React.Suspense>
      );
    });
  };
  //no function
  return <div>{renderBooks(data)}</div>;
};
export default BookList;
