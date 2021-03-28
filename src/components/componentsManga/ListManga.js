import { ButtonsManga } from "./ButtonsManga";
import EpisodeNumberUpdater from "../EpisodeNumberUpdater";
import CardComponent from "../CardComponent";
import React, { useState } from "react";

const ListManga = ({ listManga, type }) => {
  const [search, setSearch] = useState("");

  console.log(listManga);
  return (
    <div className="mt-4 ml-3">
      <h1 className="Title_Text">Watch List</h1>
      <input
        className="mt-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {listManga.map((manga) => {
          return (
            manga.title.toLowerCase().includes(search.toLowerCase()) && (
              <CardComponent
                id={manga.mal_id}
                title={manga.title}
                image_url={manga.image_url}
                start_date={
                  manga.start_date ? manga.start_date.slice(0, 4) : ""
                }
                end_date={manga.end_date ? manga.end_date.slice(0, 4) : ""}
                episodes={manga.chapters}
                score={manga.score}
                synopsis={manga.synopsis}
                type="manga"
                comment={manga.comment ? manga.comment : "No comment available"}
                listType="watching"
                userRating={manga.userRating ? manga.userRating : 0}
              >
                <div style={{ paddingLeft: "2rem" }}>
                  <EpisodeNumberUpdater
                    id={manga.mal_id}
                    totalEpisodes={manga.chapters}
                    onEpisodeNumber={
                      manga["episodesWatched"] ? manga["episodesWatched"] : 0
                    }
                    type="manga"
                  />
                  <ButtonsManga manga={manga} type={type} />
                </div>
              </CardComponent>
            )
          );
        })}
      </div>
    </div>
  );
};
export default ListManga;
