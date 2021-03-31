import React, { useState } from "react";
import CardComponent from "../CardComponent";
import ButtonsManga from "./ButtonsManga";

const CompletedManga = ({ listManga, type }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="mt-5 ml-3">
      <h1 className="mangatitle">Completed List</h1>
      <input
        className="mt-5"
        placeholder="Search Completed List"
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
                image_url={manga.image_url ? manga.image_url : ""}
                start_date={
                  manga.start_date ? manga.start_date.slice(0, 4) : ""
                }
                end_date={manga.end_date ? manga.end_date.slice(0, 4) : ""}
                episodes={manga.chapters}
                score={manga.score}
                synopsis={manga.synopsis}
                key={manga.mal_id}
                type="manga"
                comment={manga.comment ? manga.comment : "No comment available"}
                listType="completed"
                userRating={manga.userRating ? manga.userRating : 0}
                animeManga_url={manga.image2_url ? manga.image2_url : null}
              >
                <ButtonsManga manga={manga} type={type} key={manga.mal_id} />
              </CardComponent>
            )
          );
        })}
      </div>
    </div>
  );
};

export default CompletedManga;
