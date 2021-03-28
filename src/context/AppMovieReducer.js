const AppMovieReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIES_TO_WATCH_LIST":
      return {
        ...state,
        watchlistOfMovie: [action.payload, ...state.watchlistOfMovie],
      }; // return exisiting state
    case "REMOVE_MOVIES_FROM_WATCH_LIST":
      return {
        ...state,
        watchlistOfMovie: state.watchlistOfMovie.filter(
          (movie) => movie.id !== action.payload
        ),
      }; // return exisiting state
    case "ADD_MOVIES_TO_COMPLETED":
      return {
        ...state,
        watchlistOfMovie: state.watchlistOfMovie.filter(
          (movie) => movie.id !== action.payload.id
        ),
        completedOfMovie: [action.payload, ...state.completedOfMovie],
      }; // return exisiting state
    case "MOVE_COMPLETED_MOVIE_TO_WATCH_LIST":
      return {
        ...state,
        completedOfMovie: state.completedOfMovie.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlistOfMovie: [action.payload, ...state.watchlistOfMovie],
      }; // return exisiting state
    case "REMOVE_MOVIES_FROM_COMPLETED":
      return {
        ...state,
        completedOfMovie: state.completedOfMovie.filter(
          (movie) => movie.id !== action.payload
        ),
      }; // return exisiting state

    case "UPDATE_MOVIE_COMMENT": {
      const { id, comment, listType } = action.payload;

      let list =
        listType === "watching"
          ? state.watchlistOfMovie
          : state.completedOfMovie;

      const newList = list.map((movie) => {
        if (movie.id === id) {
          movie["comment"] = comment;
        }
        return movie;
      });

      console.log(newList);

      if (listType === "watching") {
        return {
          ...state,
          watchlistOfMovie: newList,
        };
      } else {
        return {
          ...state,
          completedOfMovie: newList,
        };
      }
    }

    case "SET_MOVIE_USER_RATING": {
      const { id, rating, listType } = action.payload;

      let list =
        listType === "watching"
          ? state.watchlistOfMovie
          : state.completedOfMovie;

      const newList = list.map((movie) => {
        if (movie.id === id) {
          movie["userRating"] = rating;
        }
        return movie;
      });

      if (listType === "watching") {
        return {
          ...state,
          watchlistOfMovie: newList,
        };
      } else {
        return {
          ...state,
          completedOfMovie: newList,
        };
      }
    }

    default:
      return state;
  }
};

export default AppMovieReducer;
