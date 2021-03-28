import React, { useState } from "react";
import CardComponent from "../CardComponent";
import ButtonsAnime from "./ButtonsAnime";

const CompletedAnime = ({ listAnime, type }) => {
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
        {listAnime.map((anime) => {
          return (
            anime.title.toLowerCase().includes(search.toLowerCase()) && (
              <CardComponent
                id={anime.mal_id}
                image_url={anime.image_url}
                title={anime.title ? anime.title : ""}
                start_date={
                  anime.start_date ? anime.start_date.slice(0, 4) : ""
                }
                end_date={anime.end_date ? anime.end_date.slice(0, 4) : ""}
                episodes={anime.episodes}
                score={anime.score}
                synopsis={anime.synopsis}
                type="anime"
                comment={anime.comment ? anime.comment : "No comment available"}
                userRating={anime.userRating ? anime.userRating : 0}
              >
                <ButtonsAnime anime={anime} type={type} />
              </CardComponent>
            )
          );
        })}
      </div>
    </div>
  );
};

export default CompletedAnime;