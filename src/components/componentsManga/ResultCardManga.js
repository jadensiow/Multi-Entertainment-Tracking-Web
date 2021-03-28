import React, { useContext } from "react";
import { GlobalMangaContext } from "../../context/GlobalMangaState";
import CardComponent from "../CardComponent";

export const ResultCardManga = (props) => {
  const { manga } = props;

  // store to globalprovider hooks
  const {
    addMangaToWatchList,
    watchlistOfManga,
    completedOfManga,
    addMangaToCompleted,
  } = useContext(GlobalMangaContext);

  // console.log(watchlistOfManga);

  let watchListManga = watchlistOfManga.find(
    (o) => o.mal_id === props.manga.mal_id
  );
  let completedManga = completedOfManga.find(
    (o) => o.mal_id === props.manga.mal_id
  );
  const disableWatchlist = watchListManga
    ? true
    : completedManga
    ? true
    : false;

  return (
    <CardComponent
      title={manga.title}
      image_url={manga.image_url}
      start_date={manga.start_date ? manga.start_date.slice(0, 4) : ""}
      end_date={manga.end_date ? manga.end_date.slice(0, 4) : ""}
      episodes={manga.chapters}
      score={manga.score}
      synopsis={manga.synopsis}
      listType="add"
    >
      <div style={{ marginLeft: "2rem" }}>
        <button
          className="btn btn-outline-primary"
          disabled={disableWatchlist}
          onClick={() => addMangaToWatchList(props.manga)}
        >
          Add to watchlist
        </button>
        <button
          className="btn btn-outline-primary ml-2"
          disabled={disableWatchlist}
          onClick={() => addMangaToCompleted(props.manga)}
        >
          Add to Complete
        </button>
      </div>
    </CardComponent>
  );
};
export default ResultCardManga;
