import CardComponent from "../CardComponent";
import EpisodeNumberUpdater from "../EpisodeNumberUpdater";
import { ButtonsTvSeries } from "./ButtonsTvSeries";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const ListTvSeries = ({ listTvSeries, type }) => {
  const [search, setSearch] = useState("");

  const [result, setResults] = useState("");

  console.log(listTvSeries);

  return (
    <div className="mt-5 ml-3">
      <h1 className="tvseriestitle">Watch List</h1>
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
                image_url={`https://image.tmdb.org/t/p/w200${tvseries.poster_path}`}
                title={tvseries.name}
                score={tvseries.vote_average ? tvseries.vote_average : ""}
                episodes={tvseries.number_of_episodes}
                sesaons={
                  tvseries.number_of_seasons ? tvseries.number_of_seasons : ""
                }
                synopsis={tvseries.overview}
                start_date={
                  tvseries.first_air_date
                    ? tvseries.first_air_date.slice(0, 4)
                    : ""
                }
                end_date={
                  tvseries.last_air_date
                    ? tvseries.last_air_date.slice(0, 4)
                    : ""
                }
                id={tvseries.id}
                type="tvseries"
                comment={
                  tvseries.comment ? tvseries.comment : "No comment available"
                }
                listType="watching"
                userRating={tvseries.userRating ? tvseries.userRating : 0}
                MovieTVbackground_url={
                  tvseries.backdrop_path !== null
                    ? `https://image.tmdb.org/t/p/w780${tvseries.backdrop_path}`
                    : null
                }
              >
                <div style={{ marginLeft: "2rem" }}>
                  <EpisodeNumberUpdater
                    id={tvseries.id}
                    totalEpisodes={tvseries.number_of_episodes}
                    onEpisodeNumber={
                      tvseries["episodesWatched"]
                        ? tvseries["episodesWatched"]
                        : 0
                    }
                    type="tvseries"
                    onSeason={
                      tvseries["seasonsWatched"]
                        ? tvseries["seasonsWatched"]
                        : 0
                    }
                    totalSeasons={tvseries.number_of_seasons}
                  />
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
export default ListTvSeries;
