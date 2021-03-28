import React, { useState } from "react";
import CardComponent from "../CardComponent";
import { ButtonsTvSeries } from "./ButtonsTvSeries";

const CompletedTvSeries = ({ listTvSeries, type }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="mt-4 ml-3">
      <h1 className="Title_Text">Completed List</h1>
      <input
        className="mt-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {listTvSeries.map((tvseries) => {
          return (
            tvseries.name.toLowerCase().includes(search.toLowerCase()) && (
              <CardComponent
                tvseries
                image_url={`https://image.tmdb.org/t/p/w200${tvseries.poster_path}`}
                title={tvseries.name}
                score={tvseries.vote_average}
                episodes={tvseries.number_of_episodes}
                sesaons={tvseries.number_of_seasons}
                synopsis={tvseries.overview}
                start_date={tvseries.first_air_date.slice(0, 5)}
                end_date={tvseries.last_air_date.slice(0, 5)}
                id={tvseries.id}
                type="tvseries"
                comment={
                  tvseries.comment ? tvseries.comment : "No comment available"
                }
                listType="completed"
                userRating={tvseries.userRating ? tvseries.userRating : 0}
              >
                <div style={{ marginLeft: "2rem" }}>
                  <ButtonsTvSeries tvseries={tvseries} type={type} />
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
