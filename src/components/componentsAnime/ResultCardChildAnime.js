import React, { useContext, useState } from "react";
import { GlobalAnimeContext } from "../../context/GlobalAnimeState";
import CardComponent from "../CardComponent";
import { TrailerAnime } from "./TrailerAnime";

export const ResultCardChildAnime = (props) => {
  const { anime } = props;
  let newObjAnime;
  newObjAnime = { ...props.anime, image2_url: props.imageTwoUrl };

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
        animeManga_url={newObjAnime.image2_url ? newObjAnime.image2_url : null}
      >
        <div style={{ marginLeft: "2rem" }}>
          <button
            className="btn btn-outline-primary"
            disabled={disableWatchlist}
            onClick={() => addAnimeToWatchList(newObjAnime)}
          >
            Add to watchlist
          </button>
          <button
            className="btn btn-outline-primary ml-2"
            disabled={disableWatchlist}
            onClick={() => addAnimeToCompleted(newObjAnime)}
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
          <TrailerAnime anime={newObjAnime} setShowTrailer={setShowTrailer} />
        )}
      </CardComponent>
    </div>
  );
};

/*

newObj = { ...props.anime, image2_url: result };
  const [result, setResults] = useState("");
  console.log(props.anime.mal_id);
  let newObj;
  useEffect(() => {
    const searchUrl = `https://api.jikan.moe/v3/anime/${props.anime.mal_id}/pictures`;
    axios.get(searchUrl).then((res) => {
      if (res.data.pictures) {
        console.log(res.data.pictures);
        setResults(res.data.pictures[0].large);
      }
    });
  }, []);
  console.log(newObj);*/
