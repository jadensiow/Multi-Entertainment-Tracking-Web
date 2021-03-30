import React, { useState } from "react";
import ButtonsAnime from "./ButtonsAnime";
import EpisodeNumberUpdater from "../EpisodeNumberUpdater";
import CardComponent from "../CardComponent";

const ListAnime = ({ listAnime, type }) => {
  //console.log(listAnime);

  const [search, setSearch] = useState("");

  return (
    <div className="mt-5 ml-3">
      <h1 className="animetitle">Watch List</h1>
      <input
        className="mt-5"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />{" "}
      <div>
        {listAnime.map((anime) => {
          return (
            anime.title.toLowerCase().includes(search.toLowerCase()) && (
              <CardComponent
                id={anime.mal_id}
                image_url={anime.image_url}
                title={anime.title}
                start_date={
                  anime.start_date ? anime.start_date.slice(0, 4) : ""
                }
                key={anime.mal_id}
                end_date={anime.end_date ? anime.end_date.slice(0, 4) : ""}
                episodes={anime.episodes}
                score={anime.score}
                synopsis={anime.synopsis}
                type="anime"
                comment={anime.comment ? anime.comment : "No comment available"}
                listType="watching"
                userRating={anime.userRating ? anime.userRating : 0}
                animeManga_url={anime.image2_url ? anime.image2_url : null}
              >
                <div style={{ paddingLeft: "2rem" }}>
                  <EpisodeNumberUpdater
                    id={anime.mal_id}
                    key={anime.mal_id}
                    totalEpisodes={
                      anime.episodes > 0 ? anime.episodes : "Ongoing"
                    }
                    onEpisodeNumber={
                      anime["episodesWatched"] ? anime["episodesWatched"] : 0
                    }
                    type="anime"
                  />
                  <ButtonsAnime anime={anime} type={type} />
                </div>
              </CardComponent>
            )
          );
        })}
      </div>
    </div>
  );
};
export default ListAnime;
