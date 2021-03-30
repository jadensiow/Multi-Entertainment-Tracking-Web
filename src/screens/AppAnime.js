import React, { useContext } from "react";

import AddAnime from "../components/componentsAnime/AddAnime";
import ListAnime from "../components/componentsAnime/ListAnime";
//import RandomAnime from "../components/componentsAnime/RandomAnime";
import CompletedAnime from "../components/componentsAnime/CompletedAnime";
import Header from '../components/Header'
import { GlobalAnimeContext } from "../context/GlobalAnimeState";
import getLinksAndNames from '../components/Helper/Links'
import ScrollToTop from "../components/Helper/ScrollToTop";

function AppAnime({ match }) {
  const { watchlistOfAnime, completedOfAnime } = useContext(GlobalAnimeContext);

  const componentToRender = () => {
    let component;
    let compProcess; 
    switch (match.params.listType) {
      case "watchlist":
        component = (
          <ListAnime
            listAnime={watchlistOfAnime}
            type={(compProcess = "watchlist")}
            watchList
          />
        );
        break;

      case "completed":
        component = (
          <CompletedAnime
            listAnime={completedOfAnime}
            type={(compProcess = "completed")}
            completed
          />
        );
        break;

      case "add":
        component = <AddAnime />;
        break;
      /*
      case "random":
        component = <RandomAnime />;
        break;
*/
      default:
        break;
    }

    return component;
  };
  <Header linksAndNames={getLinksAndNames("anime")} />

  return <div>{componentToRender()}
  <ScrollToTop/>
  </div>;
}

export default AppAnime;
