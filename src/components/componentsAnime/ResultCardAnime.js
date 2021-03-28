import React, { useContext, useState } from "react";
import { GlobalAnimeContext } from "../../context/GlobalAnimeState";
import CardComponent from "../CardComponent";
import { TrailerAnime } from "./TrailerAnime";

export const ResultCardAnime = (props) => {
  const { anime } = props;
  //console.log(props);
  // store to globalprovider hooks
  const [showTrailer, setShowTrailer] = useState(false);

  const {
    addAnimeToWatchList,
    watchlistOfAnime,
    completedOfAnime,
    addAnimeToCompleted,
  } = useContext(GlobalAnimeContext);

  let watchListAnime = watchlistOfAnime.find(
    (o) => o.mal_id === props.anime.mal_id
  );
  let completedAnime = completedOfAnime.find(
    (o) => o.mal_id === props.anime.mal_id
  );

  const disableWatchlist = watchListAnime
    ? true
    : completedAnime
    ? true
    : false;

  return (
    <div className="resultAnime">
      <CardComponent
        image_url={anime.image_url}
        title={anime.title}
        start_date={anime.start_date ? anime.start_date.slice(0, 4) : ""}
        end_date={anime.end_date ? anime.end_date.slice(0, 4) : ""}
        episodes={anime.episodes}
        score={anime.score}
        synopsis={anime.synopsis}
        listType="add"
      >
        <div style={{ marginLeft: "2rem" }}>
          <button
            className="btn btn-outline-primary"
            disabled={disableWatchlist}
            onClick={() => addAnimeToWatchList(props.anime)}
          >
            Add to watchlist
          </button>
          <button
            className="btn btn-outline-primary ml-2"
            disabled={disableWatchlist}
            onClick={() => addAnimeToCompleted(props.anime)}
          >
            Add to Complete
          </button>

          <button
            className="btn btn-outline-primary ml-2"
            onClick={() => setShowTrailer(!showTrailer)}
          >
            Show Trailer
          </button>
        </div>
        {showTrailer && (
          <TrailerAnime anime={props.anime} setShowTrailer={setShowTrailer} />
        )}
      </CardComponent>
    </div>
  );
};
export default ResultCardAnime;
