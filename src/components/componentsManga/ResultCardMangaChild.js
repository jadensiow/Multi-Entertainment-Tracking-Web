import React, { useContext } from "react";
import { GlobalMangaContext } from "../../context/GlobalMangaState";
import CardComponent from "../CardComponent";

export const ResultCardMangaChild = (props) => {
  const { manga } = props;
  //console.log(manga);
  let newObjManga;
  newObjManga = { ...props.manga, image2_url: props.imageTwoUrl };
  const {
    addMangaToWatchList,
    watchlistOfManga,
    completedOfManga,
    addMangaToCompleted,
  } = useContext(GlobalMangaContext);

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
      animeManga_url={newObjManga.image2_url ? newObjManga.image2_url : null}
    >
      <div style={{ marginLeft: "2rem" }}>
        <button
          className="btn btn-outline-primary"
          disabled={disableWatchlist}
          onClick={() => addMangaToWatchList(newObjManga)}
        >
          Add to watchlist
        </button>
        <button
          className="btn btn-outline-primary ml-2"
          disabled={disableWatchlist}
          onClick={() => addMangaToCompleted(newObjManga)}
        >
          Add to Complete
        </button>
      </div>
    </CardComponent>
  );
};
