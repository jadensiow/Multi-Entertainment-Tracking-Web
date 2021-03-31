import CardComponent from "../CardComponent";
import { ButtonsMovie } from "./ButtonsMovie";
import React, { useState } from "react";

const ListMovie = ({ listMovie, type }) => {
  const [search, setSearch] = useState("");
  console.log(listMovie);
  //console.log("listMovie", listMovie);
  // console.log(listMovie);
  return (
    <div className="mt-5 ml-3">
      <h1 className="movietitle">Watch List</h1>
      <input
        className="mt-5"
        placeholder="Search Watch List"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {listMovie.map((movie) => {
          return (
            movie.title.toLowerCase().includes(search.toLowerCase()) && (
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
                id={movie.id}
                key={movie.id}
                listType="watching"
                comment={movie.comment ? movie.comment : "No Comment Available"}
                type="movie"
                userRating={movie.userRating ? movie.userRating : 0}
                MovieTVbackground_url={
                  movie.backdrop_path !== null
                    ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
                    : null
                }
              >
                <div style={{ marginLeft: "2rem" }}>
                  <ButtonsMovie movie={movie} type={type} key={movie.id} />
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
