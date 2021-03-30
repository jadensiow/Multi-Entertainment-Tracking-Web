import React, { useState } from "react";
import CardComponent from "../CardComponent";

import EpisodeNumberUpdater from "../EpisodeNumberUpdater";
import ButtonsBooks from "./ButtonsBooks";

const ListBooks = ({ listBooks, type }) => {
  //console.log(listBooks);
  const [search, setSearch] = useState("");

  return (
    <div className="mt-5 ml-3">
      <h1 className="bookstitle">Watch List</h1>
      <input
        className="mt-5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {listBooks.map((books) => {
          const book = books.volumeInfo;
          return (
            books.volumeInfo.title
              .toLowerCase()
              .includes(search.toLowerCase()) && (
              <CardComponent
                image_url={book.imageLinks.thumbnail}
                title={book.title}
                start_date={book.publishedDate}
                episodes={book.pageCount}
                score={book.averageRating}
                synopsis={book.description}
                book
                id={books.id}
                listType="watching"
                comment={book.comment ? book.comment : "No Comment Available"}
                type="book"
                userRating={book.userRating ? book.userRating : 0}
                key={books.id}
              >
                <div style={{ marginLeft: "2rem" }}>
                  <EpisodeNumberUpdater
                    id={books.id}
                    key={books.id}
                    totalEpisodes={books.volumeInfo.pageCount}
                    onEpisodeNumber={
                      books["episodesWatched"] ? books["episodesWatched"] : 0
                    }
                    type="books"
                  />
                  <ButtonsBooks books={books} type={type} />
                </div>
              </CardComponent>
            )
          );
        })}
      </div>
    </div>
  );
};
export default ListBooks;
