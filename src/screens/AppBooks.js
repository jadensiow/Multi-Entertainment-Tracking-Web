import React, { useContext } from "react";

import AddBooks from "../components/componentsBooks/AddBooks";
import CompletedBooks from "../components/componentsBooks/CompletedBooks";
//import HeaderBooks from "../Trash/HeaderBooks";
import ListBooks from "../components/componentsBooks/ListBooks";
//import RandomBooks from "../components/componentsBooks/RandomBooks";
import Header from "../components/Header";
import getLinksAndNames from "../components/Helper/Links";

import { GlobalBooksContext } from "../context/GlobalBooksState";

function AppBooks({ match }) {
  const { watchlistOfBooks, completedOfBooks } = useContext(GlobalBooksContext);

  const componentToRender = () => {
    let component;
    let compProcess; // to pass it down to button so can choose at watchlist or completed
    switch (match.params.listType) {
      case "watchlist":
        component = (
          <ListBooks
            listBooks={watchlistOfBooks}
            type={(compProcess = "watchlist")}
            watchList
          />
        );
        break;

      case "completed":
        component = (
          <CompletedBooks
            listBooks={completedOfBooks}
            type={(compProcess = "completed")}
            completed
          />
        );
        break;

      case "add":
        component = <AddBooks />;
        break;
      /*
      case "random":
        component = <RandomBooks />;
        break;
*/
      default:
        break;
    }

    return component;
  };
  <Header linksAndNames={getLinksAndNames("books")} />;

  return <div>{componentToRender()}</div>;
}

export default AppBooks;
