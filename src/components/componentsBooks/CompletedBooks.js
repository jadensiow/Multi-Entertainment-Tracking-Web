import React, { useState } from "react";
import AppBooksReducer from "../../context/AppBooksReducer";
import CardComponent from "../CardComponent";
import ButtonsBooks from "./ButtonsBooks";

export const CompletedBooks = ({ listBooks, type }) => {
  const [search, setSearch] = useState("");

  //console.log(listBooks);
  return (
    <div className="mt-5 ml-3">
      <h1 className="bookstitle">Completed List</h1>
      <input
        className="mt-5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {listBooks.map((books) => {
          const book = books.volumeInfo;
          return (
            book.title.toLowerCase().includes(search.toLowerCase()) && (
              <CardComponent
                image_url={book.imageLinks.thumbnail}
                title={book.title}
                start_date={book.publishedDate}
                episodes={book.pageCount}
                score={book.averageRating}
                synopsis={book.description}
                book
                id={books.id}
                listType="completed"
                comment={book.comment ? book.comment : "No Comment Available"}
                type="book"
                userRating={book.userRating ? book.userRating : 0}
                key={books.id}
              >
                <div style={{ marginLeft: "2rem" }}>
                  <ButtonsBooks books={books} type={type} key={books.id} />
                </div>
              </CardComponent>
            )
          );
        })}
      </div>
    </div>
  );
};

export default CompletedBooks;
