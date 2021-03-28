import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultCardTvSeries from "./ResultCardTvSeries";

export const AddTvSeries = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.title.value;
    console.log(name);
    setSearch(name);
  };
  const { REACT_APP_TMDB_KEY } = process.env;

  useEffect(() => {
    if (search === "") {
      return null;
    } else {
      const searchUrl = `https://api.themoviedb.org/3/search/tv?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${search}`;
      axios.get(searchUrl).then((res) => {
        if (res.data.results.length !== 0) {
          // console.log(res.data.results);
          setResults(res.data.results);
        } else {
          setResults([]);
        }
      });
    }
  }, [search]);

  console.log(results);

  return (
    <div className="mt-4 ml-3">
      <h1 className="Title_Text">Search Tv Series</h1>
      <div className="inputTvSeries">
        <form onSubmit={handleSubmit} className="form-inline mt-4">
          <div class="form-group mb-2">
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
          {results.map((tvseries) => (
            <li key={tvseries.id}>
              <ResultCardTvSeries tvseries={tvseries} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default AddTvSeries;
