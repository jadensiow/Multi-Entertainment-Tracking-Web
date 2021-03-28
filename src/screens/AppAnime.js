import React, { useContext } from "react";

import AddAnime from "../components/componentsAnime/AddAnime";
import HeaderAnime from "../components/componentsAnime/HeaderAnime";
import ListAnime from "../components/componentsAnime/ListAnime";
//import RandomAnime from "../components/componentsAnime/RandomAnime";
import CompletedAnime from "../components/componentsAnime/CompletedAnime";

import { GlobalAnimeContext } from "../context/GlobalAnimeState";

function AppAnime({ match }) {
  const { watchlistOfAnime, completedOfAnime } = useContext(GlobalAnimeContext);

  const componentToRender = () => {
    let component;
    let compProcess; // to pass it down to button so can choose at watchlist or completed

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

  return (
    <div>
      <HeaderAnime />
      {componentToRender()}
    </div>
  );
}

export default AppAnime;
