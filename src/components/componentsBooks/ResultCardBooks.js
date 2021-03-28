import React, { useContext } from "react";
import { GlobalBooksContext } from "../../context/GlobalBooksState";
import CardComponent from "../CardComponent";

export const ResultCardBooks = (props) => {
  console.log(props.books);
  // store to globalprovider hooks
  const {
    addBooksToWatchList,
    watchlistOfBooks,
    completedOfBooks,
    addBooksToCompleted,
  } = useContext(GlobalBooksContext);
  let watchListBooks = watchlistOfBooks.find((o) => o.id === props.books.id);
  let completedBooks = completedOfBooks.find((o) => o.id === props.books.id);

  const disableWatchlist = watchListBooks
    ? true
    : completedBooks
    ? true
    : false;

  const book = props.books.volumeInfo;

  console.log(book);

  return (
    <CardComponent
      image_url={book?.imageLinks?.thumbnail}
      title={book.title}
      start_date={book.publishedDate}
      episodes={book.pageCount}
      score={book.averageRating}
      synopsis={book.description}
      book
      listType="add"
    >
      <div style={{ marginLeft: "2rem" }}>
        <button
          className="btn btn-outline-primary"
          disabled={disableWatchlist}
          onClick={() => addBooksToWatchList(props.books)}
        >
          Add to watchlist
        </button>
        <button
          className="btn btn-outline-primary ml-2"
          disabled={disableWatchlist}
          onClick={() => addBooksToCompleted(props.books)}
        >
          Add to completed
        </button>
      </div>
    </CardComponent>
  );
};
export default ResultCardBooks;
