import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalTvSeriesContext } from "../../context/GlobalTvSeriesState";
import CardComponent from "../CardComponent";
import TrailerTvSeries from "./TrailerTvSeries";

export const TvNumSeasonNEps = (props) => {
  const [results, setResults] = useState([]);
  console.log(props);
  const { addTvSeriesToWatchList, addTvSeriesToCompleted } = useContext(
    GlobalTvSeriesContext
  );
  const { watchlistOfTvSeries, completedOfTvSeries } = useContext(
    GlobalTvSeriesContext
  );

  let watchListTvSeries = watchlistOfTvSeries.find(
    (o) => o.id === props.tvseries.id
  );
  let completedTvSeries = completedOfTvSeries.find(
    (o) => o.id === props.tvseries.id
  );
  const disableWatchlist = watchListTvSeries
    ? true
    : completedTvSeries
    ? true
    : false;
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const { REACT_APP_TMDB_KEY } = process.env;
    {
      const searchUrl = `https://api.themoviedb.org/3/tv/${props.tvseries.id}?api_key=${REACT_APP_TMDB_KEY}&language=en-US`;
      axios.get(searchUrl).then((res) => {
        // console.log(res);

        if (res.data !== 0) {
          setResults(res.data);
        } else {
          console.log("error");
          setResults([]);
        }
      });
    }
  }, []);

  let tvseries = results;
  // console.log(tvseries);
  return (
    <CardComponent
      tvseries
      image_url={
        tvseries.poster_path !== null
          ? `https://image.tmdb.org/t/p/w200${tvseries.poster_path}`
          : `${window.location.origin}/noimage.png`
      }
      title={tvseries.name}
      score={tvseries.vote_average}
      episodes={tvseries.number_of_episodes}
      sesaons={tvseries.number_of_seasons}
      synopsis={tvseries.overview}
      start_date={
        tvseries.first_air_date && tvseries.first_air_date.slice(0, 4)
      }
      end_date={tvseries.last_air_date && tvseries.last_air_date.slice(0, 4)}
      listType="add"
      MovieTVbackground_url={
        tvseries.backdrop_path !== null
          ? `https://image.tmdb.org/t/p/w780${tvseries.backdrop_path}`
          : null
      }
    >
      <div style={{ marginLeft: "2rem" }}>
        <button
          className="btn btn-outline-info "
          disabled={disableWatchlist}
          onClick={() => addTvSeriesToWatchList(results)}
        >
          Add to watchlist
        </button>
        <button
          className="btn btn-outline-info ml-2"
          disabled={disableWatchlist}
          onClick={() => addTvSeriesToCompleted(results)}
        >
          Add to completed
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
    </CardComponent>
  );
};
