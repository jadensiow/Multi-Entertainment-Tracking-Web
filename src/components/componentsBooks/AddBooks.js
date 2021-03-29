import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultCardBooks from "./ResultCardBooks";
import { GlobalBooksContext } from "../../context/GlobalBooksState";

export const AddBooks = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.title.value;
    //  console.log(name);
    setSearch(name);
  };

  useEffect(() => {
    // need if as the data cant be read since [0] cause a lot of errors
    if (search === "") {
      return null;
    } else {
      const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
      axios.get(searchUrl).then((res) => {
        if (res.data !== 0) {
          //  console.log("searching");
          // console.log(res.data.items);
          setResults(res.data.items);
        } else {
          // console.log("error");
          setResults([]);
        }
      });
    }
  }, [search]);
  //  console.log(results);
  return (
    <div className="mt-5 ml-3">
      <h1 className="bookstitle">Search Books</h1>

      <div className="inputBooks">
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
          {results.map((books) => (
            <li key={books.id}>
              <ResultCardBooks books={books} type={GlobalBooksContext} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default AddBooks;
