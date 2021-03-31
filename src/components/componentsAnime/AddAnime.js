import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ResultCardAnime from "./ResultCardAnime";
import { GlobalAnimeContext } from "../../context/GlobalAnimeState";

export const AddAnime = () => {
  const { watchlistOfAnime } = useContext(GlobalAnimeContext);

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.title.value;
    // console.log(name);
    setSearch(name);
  };

  useEffect(() => {
    if (search === "") {
      return null;
    } else {
      const searchUrl = `https://api.jikan.moe/v3/search/anime?q=${search}&order_by=title&sort=asc&limit=10&rated=g,pg13,pg,r17,r&type=tv,ova,movie`;
      axios.get(searchUrl).then((res) => {
        if (res.data.results.length !== 0) {
          //   console.log("searching");
          //console.log(res.data.results);
          setResults(res.data.results);
        } else {
          console.log("error");
          setResults([]);
        }
      });
    }
  }, [search]);

  return (
    <div className="mt-5 ml-3">
      <h1 className="animetitle">Search Anime</h1>

      <div className="inputAnime">
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
          {results.map((anime) => (
            <li>
              <ResultCardAnime
                anime={anime}
                type={watchlistOfAnime}
                key={anime.mal_id}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default AddAnime;
