import { createContext, useReducer, useEffect } from "react";

import AppMangaReducer from "./AppMangaReducer";

const intialMangaState = {
  watchlistOfManga: localStorage.getItem("watchlistOfManga")
    ? JSON.parse(localStorage.getItem("watchlistOfManga"))
    : [],
  completedOfManga: localStorage.getItem("completedOfManga")
    ? JSON.parse(localStorage.getItem("completedOfManga"))
    : [],
};

// create context

export const GlobalMangaContext = createContext(intialMangaState);

export const GlobalMangaProvider = (props) => {
  const [state, dispatch] = useReducer(AppMangaReducer, intialMangaState);

  useEffect(() => {
    localStorage.setItem(
      "watchlistOfManga",
      JSON.stringify(state.watchlistOfManga)
    );
    localStorage.setItem(
      "completedOfManga",
      JSON.stringify(state.completedOfManga)
    );
  }, [state]);

  // actions
  const addMangaToWatchList = (manga) => {
    dispatch({ type: "ADD_MANGA_TO_WATCH_LIST", payload: manga });
  };
  const removeMangafromWatchList = (mal_id) => {
    dispatch({ type: "REMOVE_MANGA_FROM_WATCH_LIST", payload: mal_id });
  };
  const addMangaToCompleted = (manga) => {
    dispatch({ type: "ADD_MANGA_TO_COMPLETED", payload: manga });
  };
  const moveCompletedMangaToWatchList = (manga) => {
    dispatch({ type: "MOVE_COMPLETED_MANGA_TO_WATCH_LIST", payload: manga });
  };
  const removeMangafromCompleted = (mal_id) => {
    dispatch({ type: "REMOVE_MANGA_FROM_COMPLETED", payload: mal_id });
  };

  const updateWatchedManga = (mal_id, episodes) => {
    dispatch({
      type: "UPDATE_WATCHED_MANGA",
      payload: { mal_id, episodes },
    });
  };

  const updateMangaComment = (mal_id, comment, listType) => {
    dispatch({
      type: "UPDATE_MANGA_COMMENT",
      payload: { mal_id, comment, listType },
    });
  };

  const setMangaUserRating = (mal_id, rating, listType) => {
    dispatch({
      type: "SET_MANGA_USER_RATING",
      payload: { mal_id, rating, listType },
    });
  };

  return (
    <GlobalMangaContext.Provider
      value={{
        watchlistOfManga: state.watchlistOfManga,
        completedOfManga: state.completedOfManga,
        addMangaToWatchList,
        removeMangafromWatchList,
        addMangaToCompleted,
        moveCompletedMangaToWatchList,
        removeMangafromCompleted,
        updateWatchedManga,
        updateMangaComment,
        setMangaUserRating,
      }}
    >
      {props.children}
    </GlobalMangaContext.Provider>
  );
};
