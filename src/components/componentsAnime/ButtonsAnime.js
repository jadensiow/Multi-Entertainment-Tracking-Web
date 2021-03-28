import { useContext, useState } from "react";
import { GlobalAnimeContext } from "../../context/GlobalAnimeState";
import { TrailerAnime } from "./TrailerAnime";

export const ButtonsAnime = ({ anime, type }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const { removeAnimefromWatchList, addAnimeToCompleted } = useContext(
    GlobalAnimeContext
  );
  const {
    moveCompletedAnimeToWatchList,
    removeAnimefromCompleted,
  } = useContext(GlobalAnimeContext);
  //console.log(anime);

  const clickDeleteInWatchList = (event) => {
    event.preventDefault();
    //console.log(event.target);
    removeAnimefromWatchList(anime.mal_id);
  };
  const clickMovetoCompleted = (event) => {
    event.preventDefault();
    // console.log(event.target);
    addAnimeToCompleted(anime);
  };

  const clickMovetoWatchList = (event) => {
    event.preventDefault();
    //console.log(event.target);
    moveCompletedAnimeToWatchList(anime);
  };
  const clickRemoveFromCompleted = (event) => {
    event.preventDefault();
    // console.log(event.target);
    removeAnimefromCompleted(anime.mal_id);
  };

  return (
    <div className="mt-4">
      {type === "watchlist" ? (
        <div>
          <button
            className="btn btn-outline-danger"
            onClick={clickDeleteInWatchList}
          >
            Remove
          </button>
          <button
            className="btn btn-outline-success ml-3"
            onClick={clickMovetoCompleted}
          >
            Completed
          </button>
          <button
            className="btn btn-outline-warning ml-3"
            onClick={() => setShowTrailer(!showTrailer)}
          >
            Show Trailer
          </button>
          {showTrailer && (
            <TrailerAnime anime={anime} setShowTrailer={setShowTrailer} />
          )}
        </div>
      ) : type === "completed" ? (
        <div>
          <button
            className="btn btn-outline-success ml-3"
            onClick={clickMovetoWatchList}
          >
            Move To Watchlist
          </button>
          <button
            className="btn btn-outline-success ml-3"
            onClick={clickRemoveFromCompleted}
          >
            Delete from completed
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default ButtonsAnime;
