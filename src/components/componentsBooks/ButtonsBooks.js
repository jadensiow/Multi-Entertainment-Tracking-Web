import { useContext } from "react";
import { GlobalBooksContext } from "../../context/GlobalBooksState";

export const ButtonsBooks = ({ books, type }) => {
  const { removeBooksfromWatchList, addBooksToCompleted } = useContext(
    GlobalBooksContext
  );
  const {
    moveCompletedBooksToWatchList,
    removeBooksfromCompleted,
  } = useContext(GlobalBooksContext);

  const clickDeleteInWatchList = (event) => {
    event.preventDefault();
    removeBooksfromWatchList(books.id);
  };
  const clickMovetoCompleted = (event) => {
    event.preventDefault();
    addBooksToCompleted(books);
  };

  const clickMovetoWatchList = (event) => {
    event.preventDefault();
    moveCompletedBooksToWatchList(books);
  };
  const clickRemoveFromCompleted = (event) => {
    event.preventDefault();
    removeBooksfromCompleted(books.id);
  };

  // console.log(type);
  return (
    <div className="watchListBtn">
      {type === "watchlist" ? (
        <div>
          <button
            className="btn btn-outline-danger"
            onClick={clickDeleteInWatchList}
          >
            Remove
          </button>
          <button
            className="btn btn-outline-primary ml-2"
            onClick={clickMovetoCompleted}
          >
            Completed
          </button>
        </div>
      ) : type === "completed" ? (
        <div>
          <button
            className="btn btn-outline-primary ml-2"
            onClick={clickMovetoWatchList}
          >
            Move To Watchlist
          </button>
          <button
            className="btn btn-outline-danger ml-2"
            onClick={clickRemoveFromCompleted}
          >
            Delete from completed
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ButtonsBooks;
