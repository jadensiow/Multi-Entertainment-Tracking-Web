import React, { useContext } from "react";

import AddMovies from "../components/componentsMovies/AddMovies";
import CompletedMovie from "../components/componentsMovies/CompletedMovie";
//import HeaderMovies from "../Trash/HeaderMovies";
import ListMovie from "../components/componentsMovies/ListMovie";
//import RandomMovie from "../components/componentsMovies/RandomMovie";
import Header from "../components/Header";

import { GlobalMovieContext } from "../context/GlobalMovieState";
import getLinksAndNames from "../components/Helper/Links";

const AppMovies = ({ match }) => {
  const { completedOfMovie, watchlistOfMovie } = useContext(GlobalMovieContext);

  const componentToRender = () => {
    let component;
    let compProcess; // to pass it down to button so can choose at watchlist or completed
    switch (match.params.listType) {
      case "watchlist":
        component = (
          <ListMovie
            listMovie={watchlistOfMovie}
            type={(compProcess = "watchlist")}
            watchList
          />
        );
        break;

      case "completed":
        component = (
          <CompletedMovie
            listMovie={completedOfMovie}
            type={(compProcess = "completed")}
            completed
          />
        );
        break;

      case "add":
        component = <AddMovies />;
        break;
      /*
      case "random":
        component = <RandomMovie />;
        break;
*/
      default:
        break;
    }

    return component;
  };
  <Header linksAndNames={getLinksAndNames("movies")} />;

  return <div>{componentToRender()}</div>;
};

export default AppMovies;
