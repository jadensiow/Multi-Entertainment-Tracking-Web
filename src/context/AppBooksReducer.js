const AppBooksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOKS_TO_WATCH_LIST":
      return {
        ...state,
        watchlistOfBooks: [action.payload, ...state.watchlistOfBooks],
      }; // return exisiting state
    case "REMOVE_BOOKS_FROM_WATCH_LIST":
      return {
        ...state,
        watchlistOfBooks: state.watchlistOfBooks.filter(
          (books) => books.id !== action.payload
        ),
      }; // return exisiting state
    case "ADD_BOOKS_TO_COMPLETED":
      return {
        ...state,
        watchlistOfBooks: state.watchlistOfBooks.filter(
          (books) => books.id !== action.payload.id
        ),
        completedOfBooks: [...state.completedOfBooks, action.payload],
      }; // return exisiting state
    case "MOVE_COMPLETED_BOOKS_TO_WATCH_LIST":
      return {
        ...state,
        completedOfBooks: state.completedOfBooks.filter(
          (books) => books.id !== action.payload.id
        ),
        watchlistOfBooks: [action.payload, ...state.watchlistOfBooks],
      }; // return exisiting state
    case "REMOVE_BOOKS_FROM_COMPLETED":
      return {
        ...state,
        completedOfBooks: state.completedOfBooks.filter(
          (books) => books.id !== action.payload
        ),
      }; // return exisiting state

    case "UPDATE_WATCHED_BOOKS":
      const { id, episodes } = action.payload;

      const newList = state.watchlistOfBooks.map((books) => {
        if (books.id === id) {
          if (episodes <= books.volumeInfo.pageCount) {
            books["episodesWatched"] = episodes;
          }
        }
        return books;
      });

      return { ...state, watchlistOfBooks: newList };

    case "UPDATE_BOOK_COMMENT": {
      const { id, comment, listType } = action.payload;

      let list =
        listType === "watching"
          ? state.watchlistOfBooks
          : state.completedOfBooks;

      const newList = list.map((book) => {
        if (book.id === id) {
          book.volumeInfo["comment"] = comment;
        }
        return book;
      });

      if (listType === "watching") {
        return {
          ...state,
          watchlistOfBooks: newList,
        };
      } else {
        return {
          ...state,
          completedOfBooks: newList,
        };
      }
    }

    case "SET_BOOK_USER_RATING": {
      const { id, rating, listType } = action.payload;

      let list =
        listType === "watching"
          ? state.watchlistOfBooks
          : state.completedOfBooks;

      const newList = list.map((book) => {
        if (book.id === id) {
          book.volumeInfo["userRating"] = rating;
        }
        return book;
      });

      if (listType === "watching") {
        return {
          ...state,
          watchlistOfBooks: newList,
        };
      } else {
        return {
          ...state,
          completedOfBooks: newList,
        };
      }
    }

    default:
      return state;
  }
};

export default AppBooksReducer;
