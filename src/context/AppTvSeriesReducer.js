const AppTvSeriesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TVSERIES_TO_WATCH_LIST":
      return {
        ...state,
        watchlistOfTvSeries: [action.payload, ...state.watchlistOfTvSeries],
      }; // return exisiting state
    case "REMOVE_TVSERIES_FROM_WATCH_LIST":
      return {
        ...state,
        watchlistOfTvSeries: state.watchlistOfTvSeries.filter(
          (tvseries) => tvseries.id !== action.payload
        ),
      }; // return exisiting state
    case "ADD_TVSERIES_TO_COMPLETED":
      return {
        ...state,
        watchlistOfTvSeries: state.watchlistOfTvSeries.filter(
          (tvseries) => tvseries.id !== action.payload.id
        ),
        completedOfTvSeries: [action.payload, ...state.completedOfTvSeries],
      }; // return exisiting state
    case "MOVE_COMPLETED_TVSERIES_TO_WATCH_LIST":
      return {
        ...state,
        completedOfTvSeries: state.completedOfTvSeries.filter(
          (tvseries) => tvseries.id !== action.payload.id
        ),
        watchlistOfTvSeries: [action.payload, ...state.watchlistOfTvSeries],
      }; // return exisiting state
    case "REMOVE_TVSERIES_FROM_COMPLETED":
      return {
        ...state,
        completedOfTvSeries: state.completedOfTvSeries.filter(
          (tvseries) => tvseries.id !== action.payload
        ),
      };

    case "UPDATE_WATCHED_TV_SERIES_EPISODES": {
      // @@@@@@@@@@@@@@@@@@@@@
      // I've put curly braces around this and the next case to avoid
      // variable scoping issues

      const { id, watchedEpisodes } = action.payload;

      const newList = state.watchlistOfTvSeries.map((tv) => {
        if (tv.id === id) {
          tv["episodesWatched"] = watchedEpisodes;
        }
        return tv;
      });

      return {
        ...state,
        watchlistOfTvSeries: newList,
      };
    }

    case "UPDATE_WATCHED_TV_SERIES_SEASONS": {
      const { id, watchedSeasons } = action.payload;

      const newList = state.watchlistOfTvSeries.map((tv) => {
        if (tv.id === id) {
          tv["seasonsWatched"] = watchedSeasons;
        }
        return tv;
      });

      return {
        ...state,
        watchlistOfTvSeries: newList,
      };
    }

    case "UPDATE_TV_SERIES_COMMENT": {
      const { id, comment, listType } = action.payload;

      let list =
        listType === "watching"
          ? state.watchlistOfTvSeries
          : state.completedOfTvSeries;

      const newList = list.map((tvseries) => {
        if (tvseries.id === id) {
          tvseries["comment"] = comment;
        }
        return tvseries;
      });

      if (listType === "watching") {
        return {
          ...state,
          watchlistOfTvSeries: newList,
        };
      } else {
        return {
          ...state,
          completedOfTvSeries: newList,
        };
      }
    }

    case "SET_TV_SERIES_USER_RATING": {
      const { id, rating, listType } = action.payload;

      let list =
        listType === "watching"
          ? state.watchlistOfTvSeries
          : state.completedOfTvSeries;

      const newList = list.map((tvseries) => {
        if (tvseries.id === id) {
          tvseries["userRating"] = rating;
        }
        return tvseries;
      });

      if (listType === "watching") {
        return {
          ...state,
          watchlistOfTvSeries: newList,
        };
      } else {
        return {
          ...state,
          completedOfTvSeries: newList,
        };
      }
    }

    default:
      return state;
  }
};

export default AppTvSeriesReducer;
