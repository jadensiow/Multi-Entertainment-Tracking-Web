import { createContext, useReducer, useEffect } from "react";

import AppBooksReducer from "./AppBooksReducer";

const intialBooksState = {
  watchlistOfBooks: localStorage.getItem("watchlistOfBooks")
    ? JSON.parse(localStorage.getItem("watchlistOfBooks"))
    : [],
  completedOfBooks: localStorage.getItem("completedOfBooks")
    ? JSON.parse(localStorage.getItem("completedOfBooks"))
    : [],
};

// create context

export const GlobalBooksContext = createContext(intialBooksState);

export const GlobalBooksProvider = (props) => {
  const [state, dispatch] = useReducer(AppBooksReducer, intialBooksState);

  useEffect(() => {
    localStorage.setItem(
      "watchlistOfBooks",
      JSON.stringify(state.watchlistOfBooks)
    );
    localStorage.setItem(
      "completedOfBooks",
      JSON.stringify(state.completedOfBooks)
    );
  }, [state]);

  // actions
  const addBooksToWatchList = (books) => {
    dispatch({ type: "ADD_BOOKS_TO_WATCH_LIST", payload: books });
  };
  const removeBooksfromWatchList = (id) => {
    dispatch({ type: "REMOVE_BOOKS_FROM_WATCH_LIST", payload: id });
  };
  const addBooksToCompleted = (books) => {
    dispatch({ type: "ADD_BOOKS_TO_COMPLETED", payload: books });
  };
  const moveCompletedBooksToWatchList = (books) => {
    dispatch({ type: "MOVE_COMPLETED_BOOKS_TO_WATCH_LIST", payload: books });
  };
  const removeBooksfromCompleted = (id) => {
    dispatch({ type: "REMOVE_BOOKS_FROM_COMPLETED", payload: id });
  };
  const updateWatchedBooks = (id, episodes) => {
    dispatch({
      type: "UPDATE_WATCHED_BOOKS",
      payload: { id, episodes },
    });
  };

  const updateBookComment = (id, comment, listType) => {
    dispatch({
      type: "UPDATE_BOOK_COMMENT",
      payload: { id, comment, listType },
    });
  };

  const setBookUserRating = (id, rating, listType) => {
    dispatch({
      type: "SET_BOOK_USER_RATING",
      payload: { id, rating, listType },
    });
  };

  return (
    <GlobalBooksContext.Provider
      value={{
        watchlistOfBooks: state.watchlistOfBooks,
        completedOfBooks: state.completedOfBooks,
        addBooksToWatchList,
        removeBooksfromWatchList,
        addBooksToCompleted,
        moveCompletedBooksToWatchList,
        removeBooksfromCompleted,
        updateWatchedBooks,
        updateBookComment,
        setBookUserRating,
      }}
    >
      {props.children}
    </GlobalBooksContext.Provider>
  );
};
