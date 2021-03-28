import CardComponent from "../CardComponent";
import { ButtonsMovie } from "./ButtonsMovie";
import React, { useState } from "react";

const ListMovie = ({ listMovie, type }) => {
  const [search, setSearch] = useState("");

  //console.log("listMovie", listMovie);
  // console.log(listMovie);
  return (
    <div className="mt-4 ml-3">
      <h1 className="Title_Text">Watch List</h1>
      <input
        className="mt-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {listMovie.map((movie) => {
          return (
            movie.title.toLowerCase().includes(search.toLowerCase()) && (
              <CardComponent
                image_url={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                title={movie.title}
                score={movie.vote_average}
                synopsis={movie.overview}
                start_date={movie.release_date}
                movie
                id={movie.id}
                listType="watching"
                comment={movie.comment ? movie.comment : "No Comment Available"}
                type="movie"
                userRating={movie.userRating ? movie.userRating : 0}
              >
                <div style={{ marginLeft: "2rem" }}>
                  <ButtonsMovie movie={movie} type={type} />
                </div>
              </CardComponent>
            )
          );
        })}
      </div>
    </div>
  );
};

export default ListMovie;
