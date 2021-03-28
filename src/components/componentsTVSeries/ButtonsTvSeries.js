import { useContext, useState } from "react";
import { GlobalTvSeriesContext } from "../../context/GlobalTvSeriesState";
import { TrailerTvSeries } from "./TrailerTvSeries";

export const ButtonsTvSeries = ({ tvseries, type }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const { removeTvSeriesfromWatchList, addTvSeriesToCompleted } = useContext(
    GlobalTvSeriesContext
  );

  const {
    moveCompletedTvSeriesToWatchList,
    removeTvSeriesfromCompleted,
  } = useContext(GlobalTvSeriesContext);

  const clickDeleteInWatchList = (event) => {
    event.preventDefault();
    //console.log(event.target);
    removeTvSeriesfromWatchList(tvseries.id);
    // console.log(movie);
  };
  const clickMovetoCompleted = (event) => {
    event.preventDefault();
    // console.log(event.target);
    addTvSeriesToCompleted(tvseries);
    // console.log(movie);
  };

  const clickMovetoWatchList = (event) => {
    event.preventDefault();
    //console.log(event.target);
    moveCompletedTvSeriesToWatchList(tvseries);
    // console.log(movie);
  };
  const clickRemoveFromCompleted = (event) => {
    event.preventDefault();
    // console.log(event.target);
    removeTvSeriesfromCompleted(tvseries.id);
    // console.log(movie);
  };

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
            <TrailerTvSeries
              tvseries={tvseries}
              setShowTrailer={setShowTrailer}
            />
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
