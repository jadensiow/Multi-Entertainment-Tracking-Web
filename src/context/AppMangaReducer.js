const AppMangaReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MANGA_TO_WATCH_LIST":
      return {
        ...state,
        watchlistOfManga: [action.payload, ...state.watchlistOfManga],
      }; // return exisiting state
    case "REMOVE_MANGA_FROM_WATCH_LIST":
      return {
        ...state,
        watchlistOfManga: state.watchlistOfManga.filter(
          (manga) => manga.mal_id !== action.payload
        ),
      }; // return exisiting state
    case "ADD_MANGA_TO_COMPLETED":
      return {
        ...state,
        watchlistOfManga: state.watchlistOfManga.filter(
          (manga) => manga.mal_id !== action.payload.mal_id
        ),
        completedOfManga: [action.payload, ...state.completedOfManga],
      }; // return exisiting state
    case "MOVE_COMPLETED_MANGA_TO_WATCH_LIST":
      return {
        ...state,
        completedOfManga: state.completedOfManga.filter(
          (manga) => manga.mal_id !== action.payload.mal_id
        ),
        watchlistOfManga: [action.payload, ...state.watchlistOfManga],
      }; // return exisiting state
    case "REMOVE_MANGA_FROM_COMPLETED":
      return {
        ...state,
        completedOfManga: state.completedOfManga.filter(
          (manga) => manga.mal_id !== action.payload
        ),
      }; // return exisiting state

    case "UPDATE_WATCHED_MANGA":
      const { mal_id, episodes } = action.payload;

      const newList = state.watchlistOfManga.map((manga) => {
        if (manga.mal_id === mal_id) {
          if (episodes <= manga.chapters) {
            manga["episodesWatched"] = episodes;
          }
          if (episodes >= manga.chapters) {
            manga["episodesWatched"] = manga.chapters;
          }
          if (manga.chapters === 0) {
            manga["episodesWatched"] = episodes;

            manga.chapters = "Ongoing";
          }
          if (manga.chapters === "Ongoing") {
            manga["episodesWatched"] = episodes;
          }
        }
        return manga;
      });

    case "UPDATE_MANGA_COMMENT": {
      const { mal_id, comment, listType } = action.payload;

      let list =
        listType === "watching"
          ? state.watchlistOfManga
          : state.completedOfManga;

      const newList = list.map((manga) => {
        if (manga.mal_id === mal_id) {
          manga["comment"] = comment;
        }
        return manga;
      });

      if (listType === "watching") {
        return {
          ...state,
          watchlistOfManga: newList,
        };
      } else {
        return {
          ...state,
          completedOfManga: newList,
        };
      }
    }

    case "SET_MANGA_USER_RATING": {
      const { mal_id, rating, listType } = action.payload;

      let list =
        listType === "watching"
          ? state.watchlistOfManga
          : state.completedOfManga;

      const newList = list.map((manga) => {
        if (manga.mal_id === mal_id) {
          manga["userRating"] = rating;
        }
        return manga;
      });

      if (listType === "watching") {
        return {
          ...state,
          watchlistOfManga: newList,
        };
      } else {
        return {
          ...state,
          completedOfManga: newList,
        };
      }
    }

    default:
      return state;
  }
};

export default AppMangaReducer;
