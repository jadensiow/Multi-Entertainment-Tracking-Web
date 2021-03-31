import { createContext, useReducer, useEffect } from "react";

import AppAnimeReducer from "./AppAnimeReducer";

const intialAnimeState = {
  watchlistOfAnime: localStorage.getItem("watchlistOfAnime")
    ? JSON.parse(localStorage.getItem("watchlistOfAnime"))
    : [],
  completedOfAnime: localStorage.getItem("completedOfAnime")
    ? JSON.parse(localStorage.getItem("completedOfAnime"))
    : [],
};

// create context

export const GlobalAnimeContext = createContext(intialAnimeState);

export const GlobalAnimeProvider = (props) => {
  const [state, dispatch] = useReducer(AppAnimeReducer, intialAnimeState);

  useEffect(() => {
    localStorage.setItem(
      "watchlistOfAnime",
      JSON.stringify(state.watchlistOfAnime)
    );
    localStorage.setItem(
      "completedOfAnime",
      JSON.stringify(state.completedOfAnime)
    );
  }, [state]);

  // actions
  const addAnimeToWatchList = (anime) => {
    dispatch({ type: "ADD_ANIME_TO_WATCH_LIST", payload: anime });
  };
  const removeAnimefromWatchList = (mal_id) => {
    dispatch({ type: "REMOVE_ANIME_FROM_WATCH_LIST", payload: mal_id });
  };
  const addAnimeToCompleted = (anime) => {
    dispatch({ type: "ADD_ANIME_TO_COMPLETED", payload: anime });
  };
  const moveCompletedAnimeToWatchList = (anime) => {
    dispatch({ type: "MOVE_COMPLETED_ANIME_TO_WATCH_LIST", payload: anime });
  };
  const removeAnimefromCompleted = (mal_id) => {
    dispatch({ type: "REMOVE_ANIME_FROM_COMPLETED", payload: mal_id });
  };

  const updateWatchedAnimeEpisodes = (mal_id, episodes) => {
    dispatch({
      type: "UPDATE_WATCHED_ANIME_EPISODES",
      payload: { mal_id, episodes },
    });
  };

  const updateAnimeComment = (mal_id, comment, listType) => {
    dispatch({
      type: "UPDATE_ANIME_COMMENT",
      payload: { mal_id, comment, listType },
    });
  };

  const setAnimeUserRating = (mal_id, rating, listType) => {
    dispatch({
      type: "SET_ANIME_USER_RATING",
      payload: { mal_id, rating, listType },
    });
  };

  return (
    <GlobalAnimeContext.Provider
      value={{
        watchlistOfAnime: state.watchlistOfAnime,
        completedOfAnime: state.completedOfAnime,
        addAnimeToWatchList,
        removeAnimefromWatchList,
        addAnimeToCompleted,
        moveCompletedAnimeToWatchList,
        removeAnimefromCompleted,
        updateWatchedAnimeEpisodes,
        updateAnimeComment,
        setAnimeUserRating,
      }}
    >
      {props.children}
    </GlobalAnimeContext.Provider>
  );
};
