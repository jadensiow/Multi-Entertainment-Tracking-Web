import { useContext, useState } from "react";
import { GlobalMovieContext } from "../../context/GlobalMovieState";
import { TrailerMovie } from "./TrailerMovie";
export const ButtonsMovie = ({ movie, type }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const { removeMoviefromWatchList, addMovieToCompleted } = useContext(
    GlobalMovieContext
  );

  const {
    moveCompletedMovieToWatchList,
    removeMoviefromCompleted,
  } = useContext(GlobalMovieContext);

  const clickDeleteInWatchList = (event) => {
    event.preventDefault();
    //console.log(event.target);
    removeMoviefromWatchList(movie.id);
    // console.log(movie);
  };
  const clickMovetoCompleted = (event) => {
    event.preventDefault();
    // console.log(event.target);
    addMovieToCompleted(movie);
    // console.log(movie);
  };

  const clickMovetoWatchList = (event) => {
    event.preventDefault();
    //console.log(event.target);
    moveCompletedMovieToWatchList(movie);
    // console.log(movie);
  };
  const clickRemoveFromCompleted = (event) => {
    event.preventDefault();
    // console.log(event.target);
    removeMoviefromCompleted(movie.id);
    // console.log(movie);
  };

  // console.log(type);
  return (
    <div className="watchListBtn">
      {type === "watchlist" ? (
        <div>
          <button
            className="btn btn-outline-danger"
            onClick={clickDeleteInWatchList}
          >
            Remove
          </button>
          <button
            className="btn btn-outline-primary ml-2"
            onClick={clickMovetoCompleted}
          >
            Completed
          </button>
          <button
            className="btn btn-outline-warning ml-2"
            onClick={() => setShowTrailer(!showTrailer)}
          >
            Show Trailer
          </button>
          {showTrailer && (
            <TrailerMovie movie={movie} setShowTrailer={setShowTrailer} />
          )}
        </div>
      ) : type === "completed" ? (
        <div>
          <button
            className="btn btn-outline-success ml-2"
            onClick={clickMovetoWatchList}
          >
            Move To Watchlist
          </button>
          <button
            className="btn btn-outline-success ml-2"
            onClick={clickRemoveFromCompleted}
          >
            Delete from completed
          </button>
        </div>
      ) : null}
    </div>
  );
};
