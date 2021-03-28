const AppAnimeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ANIME_TO_WATCH_LIST":
      return {
        ...state,
        watchlistOfAnime: [action.payload, ...state.watchlistOfAnime],
      }; // return exisiting state
    case "REMOVE_ANIME_FROM_WATCH_LIST":
      return {
        ...state,
        watchlistOfAnime: state.watchlistOfAnime.filter(
          (anime) => anime.mal_id !== action.payload
        ),
      }; // return exisiting state
    case "ADD_ANIME_TO_COMPLETED":
      return {
        ...state,
        watchlistOfAnime: state.watchlistOfAnime.filter(
          (anime) => anime.mal_id !== action.payload.mal_id
        ),
        completedOfAnime: [action.payload, ...state.completedOfAnime],
      }; // return exisiting state
    case "MOVE_COMPLETED_ANIME_TO_WATCH_LIST":
      return {
        ...state,
        completedOfAnime: state.completedOfAnime.filter(
          (anime) => anime.mal_id !== action.payload.mal_id
        ),
        watchlistOfAnime: [action.payload, ...state.watchlistOfAnime],
      }; // return exisiting state
    case "REMOVE_ANIME_FROM_COMPLETED":
      return {
        ...state,
        completedOfAnime: state.completedOfAnime.filter(
          (anime) => anime.mal_id !== action.payload
        ),
      }; // return exisiting state

    case "UPDATE_WATCHED_ANIME_EPISODES":
      const { mal_id, episodes } = action.payload;

      /* 
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            map over the watchlistOfAnime as episodes can only be updated if a users is still
            watching the anime. For each anime check if it's id is equal to the id of the 
            anime we want to edit and set 'episodesWatched' property on it. 
            We can't do anime.episodesWatched = episodes as the anime object may not have the 
            property 'episodesWatched'
            */
      const newList = state.watchlistOfAnime.map((anime) => {
        if (anime.mal_id === mal_id) {
          if (episodes <= anime.episodes) {
            anime["episodesWatched"] = episodes;
          }
          if (episodes >= anime.episodes) {
            anime["episodesWatched"] = anime.episodes;
          }
          if (anime.episodes === 0) {
            anime.episodes = "Ongoing";
            anime["episodesWatched"] = episodes;
          }
        }
        return anime;
      });

      return { ...state, watchlistOfAnime: newList };

    case "UPDATE_ANIME_COMMENT": {
      const { mal_id, comment, listType } = action.payload;

      let list =
        listType === "watching"
          ? state.watchlistOfAnime
          : state.completedOfAnime;

      const newList = list.map((anime) => {
        if (anime.mal_id === mal_id) {
          anime["comment"] = comment;
        }
        return anime;
      });

      if (listType === "watching") {
        return {
          ...state,
          watchlistOfAnime: newList,
        };
      } else {
        return {
          ...state,
          completedOfAnime: newList,
        };
      }
    }

    case "SET_ANIME_USER_RATING": {
      const { mal_id, rating, listType } = action.payload;

      let list =
        listType === "watching"
          ? state.watchlistOfAnime
          : state.completedOfAnime;

      const newList = list.map((anime) => {
        if (anime.mal_id === mal_id) {
          anime["userRating"] = rating;
        }
        return anime;
      });
      // console.log(newList);
      if (listType === "watching") {
        return {
          ...state,
          watchlistOfAnime: newList,
        };
      } else {
        return {
          ...state,
          completedOfAnime: newList,
        };
      }
    }

    default:
      return state;
  }
};

export default AppAnimeReducer;
