import React, { useState } from "react";
import CardComponent from "../CardComponent";
import { ButtonsTvSeries } from "./ButtonsTvSeries";

const CompletedTvSeries = ({ listTvSeries, type }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="mt-5 ml-3">
      <h1 className="tvseriestitle">Completed List</h1>
      <input
        className="mt-5"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {listTvSeries.map((tvseries) => {
          return (
            tvseries.name.toLowerCase().includes(search.toLowerCase()) && (
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
                start_date={tvseries.first_air_date.slice(0, 4)}
                end_date={tvseries.last_air_date.slice(0, 4)}
                id={tvseries.id}
                type="tvseries"
                key={tvseries.id}
                comment={
                  tvseries.comment ? tvseries.comment : "No comment available"
                }
                listType="completed"
                userRating={tvseries.userRating ? tvseries.userRating : 0}
                MovieTVbackground_url={
                  tvseries.backdrop_path !== null
                    ? `https://image.tmdb.org/t/p/w780${tvseries.backdrop_path}`
                    : null
                }
              >
                <div style={{ marginLeft: "2rem" }}>
                  <ButtonsTvSeries
                    tvseries={tvseries}
                    type={type}
                    key={tvseries.id}
                  />
                </div>
              </CardComponent>
            )
          );
        })}
      </div>
    </div>
  );
};

export default CompletedTvSeries;
