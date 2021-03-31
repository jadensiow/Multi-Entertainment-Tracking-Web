import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ResultCardMovies from "./ResultCardMovies";
import { GlobalMovieContext } from "../../context/GlobalMovieState";

export const AddMovies = () => {
  const { watchlistOfMovie } = useContext(GlobalMovieContext);

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.title.value;
    //console.log(name);
    setSearch(name);
  };
  const { REACT_APP_TMDB_KEY } = process.env;
  useEffect(() => {
    if (search === "") {
      return null;
    } else {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${search}`;
      axios.get(searchUrl).then((res) => {
        if (res.data.results.length !== 0) {
          //	console.log("searching");
          console.log(res.data);
          setResults(res.data.results);
        } else {
          setResults([]);
        }
      });
    }
  }, [search]);

  return (
    <div className="mt-5 ml-3">
      <h1 className="movietitle">Search Movie</h1>
      <div className="inputMovie">
        <form onSubmit={handleSubmit} className="form-inline mt-5">
          <div class="form-group  mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              name="title"
            />
            <button type="submit" className="btn btn-primary ml-4">
              Search
            </button>
          </div>
        </form>
      </div>
      {results.length > 0 ? (
        <ul className="results">
          {results.map((movie) => (
            <li>
              <ResultCardMovies
                movie={movie}
                type={watchlistOfMovie}
                key={movie.id}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default AddMovies;
