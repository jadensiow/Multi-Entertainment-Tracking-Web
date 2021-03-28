import { createContext, useReducer, useEffect } from "react";
import AppMovieReducer from "./AppMovieReducer";

// initial state
const intialMovieState = {
  watchlistOfMovie: localStorage.getItem("watchlistOfMovie")
    ? JSON.parse(localStorage.getItem("watchlistOfMovie"))
    : [],
  completedOfMovie: localStorage.getItem("completedOfMovie")
    ? JSON.parse(localStorage.getItem("completedOfMovie"))
    : [],
};

// create context

export const GlobalMovieContext = createContext(intialMovieState);

export const GlobalMovieProvider = (props) => {
  const [state, dispatch] = useReducer(AppMovieReducer, intialMovieState);

  useEffect(() => {
    localStorage.setItem(
      "watchlistOfMovie",
      JSON.stringify(state.watchlistOfMovie)
    );
    localStorage.setItem(
      "completedOfMovie",
      JSON.stringify(state.completedOfMovie)
    );
  }, [state]);

  // actions
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIES_TO_WATCH_LIST", payload: movie });
  };
  const removeMoviefromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIES_FROM_WATCH_LIST", payload: id });
  };
  const addMovieToCompleted = (movie) => {
    dispatch({ type: "ADD_MOVIES_TO_COMPLETED", payload: movie });
  };
  const moveCompletedMovieToWatchList = (movie) => {
    dispatch({ type: "MOVE_COMPLETED_MOVIE_TO_WATCH_LIST", payload: movie });
  };
  const removeMoviefromCompleted = (id) => {
    dispatch({ type: "REMOVE_MOVIES_FROM_COMPLETED", payload: id });
  };

  const updateMovieComment = (id, comment, listType) => {
    dispatch({
      type: "UPDATE_MOVIE_COMMENT",
      payload: { id, comment, listType },
    });
  };

  const setMovieUserRating = (id, rating, listType) => {
    dispatch({
      type: "SET_MOVIE_USER_RATING",
      payload: { id, rating, listType },
    });
  };

  return (
    <GlobalMovieContext.Provider
      value={{
        watchlistOfMovie: state.watchlistOfMovie,
        completedOfMovie: state.completedOfMovie,
        addMovieToWatchList,
        removeMoviefromWatchList,
        addMovieToCompleted,
        moveCompletedMovieToWatchList,
        removeMoviefromCompleted,
        updateMovieComment,
        setMovieUserRating,
      }}
    >
      {props.children}
    </GlobalMovieContext.Provider>
  );
};
