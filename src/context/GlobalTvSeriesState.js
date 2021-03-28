import { createContext, useReducer, useEffect } from "react";
import AppTvSeriesReducer from "./AppTvSeriesReducer";

// initial state
const intialTvSeriesState = {
  watchlistOfTvSeries: localStorage.getItem("watchlistOfTvSeries")
    ? JSON.parse(localStorage.getItem("watchlistOfTvSeries"))
    : [],
  completedOfTvSeries: localStorage.getItem("completedOfTvSeries")
    ? JSON.parse(localStorage.getItem("completedOfTvSeries"))
    : [],
};

// create context

export const GlobalTvSeriesContext = createContext(intialTvSeriesState);

export const GlobalTvSeriesProvider = (props) => {
  const [state, dispatch] = useReducer(AppTvSeriesReducer, intialTvSeriesState);

  useEffect(() => {
    localStorage.setItem(
      "watchlistOfTvSeries",
      JSON.stringify(state.watchlistOfTvSeries)
    );
    localStorage.setItem(
      "completedOfTvSeries",
      JSON.stringify(state.completedOfTvSeries)
    );
  }, [state]);

  // actions
  const addTvSeriesToWatchList = (tvseries) => {
    dispatch({ type: "ADD_TVSERIES_TO_WATCH_LIST", payload: tvseries });
  };
  const removeTvSeriesfromWatchList = (id) => {
    dispatch({ type: "REMOVE_TVSERIES_FROM_WATCH_LIST", payload: id });
  };
  const addTvSeriesToCompleted = (tvseries) => {
    dispatch({ type: "ADD_TVSERIES_TO_COMPLETED", payload: tvseries });
  };
  const moveCompletedTvSeriesToWatchList = (tvseries) => {
    dispatch({
      type: "MOVE_COMPLETED_TVSERIES_TO_WATCH_LIST",
      payload: tvseries,
    });
  };
  const removeTvSeriesfromCompleted = (id) => {
    dispatch({ type: "REMOVE_TVSERIES_FROM_COMPLETED", payload: id });
  };

  const updateWatchedTvSeriesEpisodes = (id, watchedEpisodes) => {
    dispatch({
      type: "UPDATE_WATCHED_TV_SERIES_EPISODES",
      payload: { id, watchedEpisodes },
    });
  };

  const updateWatchedTvSeriesSeasons = (id, watchedSeasons) => {
    dispatch({
      type: "UPDATE_WATCHED_TV_SERIES_SEASONS",
      payload: { id, watchedSeasons },
    });
  };

  const updateTvSeriesComment = (id, comment, listType) => {
    dispatch({
      type: "UPDATE_TV_SERIES_COMMENT",
      payload: { id, comment, listType },
    });
  };

  const setTvSeriesUserRating = (id, rating, listType) => {
    dispatch({
      type: "SET_TV_SERIES_USER_RATING",
      payload: { id, rating, listType },
    });
  };

  return (
    <GlobalTvSeriesContext.Provider
      value={{
        watchlistOfTvSeries: state.watchlistOfTvSeries,
        completedOfTvSeries: state.completedOfTvSeries,
        addTvSeriesToWatchList,
        removeTvSeriesfromWatchList,
        addTvSeriesToCompleted,
        moveCompletedTvSeriesToWatchList,
        removeTvSeriesfromCompleted,
        updateWatchedTvSeriesEpisodes,
        updateWatchedTvSeriesSeasons,
        updateTvSeriesComment,
        setTvSeriesUserRating,
      }}
    >
      {props.children}
    </GlobalTvSeriesContext.Provider>
  );
};
