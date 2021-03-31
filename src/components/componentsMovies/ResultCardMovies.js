import React, { useContext, useState } from "react";
import { GlobalMovieContext } from "../../context/GlobalMovieState";
import CardComponent from "../CardComponent";
import { TrailerMovie } from "./TrailerMovie";

export const ResultCardMovies = (props) => {
  //console.log("resultcard", props);
  const {
    addMovieToWatchList,
    watchlistOfMovie,
    completedOfMovie,
    addMovieToCompleted,
  } = useContext(GlobalMovieContext);
  //console.log(props.movie.id);
  let watchListMovie = watchlistOfMovie.find((o) => o.id === props.movie.id);
  let completedMovie = completedOfMovie.find((o) => o.id === props.movie.id);

  const disableWatchlist = watchListMovie
    ? true
    : completedMovie
    ? true
    : false;

  const [showTrailer, setShowTrailer] = useState(false);

  const { movie } = props;
  //console.log(movie.backdrop_path);

  return (
    <CardComponent
      image_url={
        movie.poster_path !== null
          ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
          : `${window.location.origin}/noimage.png`
      }
      title={movie.title}
      score={movie.vote_average}
      synopsis={movie.overview}
      start_date={movie.release_date}
      movie
      listType="add"
      MovieTVbackground_url={
        movie.backdrop_path !== null
          ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
          : null
      }
    >
      <div style={{ marginLeft: "2rem" }}>
        <button
          className="btn btn-outline-primary"
          disabled={disableWatchlist}
          onClick={() => addMovieToWatchList(props.movie)}
        >
          Add to watchlist
        </button>
        <button
          className="btn btn-outline-primary ml-2"
          disabled={disableWatchlist}
          onClick={() => addMovieToCompleted(props.movie)}
        >
          Add to completed
        </button>

        <button
          className="btn btn-outline-primary ml-2"
          onClick={() => setShowTrailer(!showTrailer)}
        >
          Show Trailer
        </button>
        {showTrailer && (
          <TrailerMovie movie={props.movie} setShowTrailer={setShowTrailer} />
        )}
      </div>
    </CardComponent>
  );
};

// <div className='filler-poster''><div>
export default ResultCardMovies;
