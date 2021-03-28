import React, { useContext } from "react";

import AddManga from "../components/componentsManga/AddManga";
import CompletedManga from "../components/componentsManga/CompletedManga";
import HeaderManga from "../components/componentsManga/HeaderManga";
import ListManga from "../components/componentsManga/ListManga";
//import RandomManga from "../components/componentsManga/RandomManga";

import { GlobalMangaContext } from "../context/GlobalMangaState";

function AppManga({ match }) {
  const { watchlistOfManga, completedOfManga } = useContext(GlobalMangaContext);

  const componentToRender = () => {
    let component;
    let compProcess; // to pass it down to button so can choose at watchlist or completed

    switch (match.params.listType) {
      case "watchlist":
        component = (
          <ListManga
            listManga={watchlistOfManga}
            type={(compProcess = "watchlist")}
            watchList
          />
        );
        break;

      case "completed":
        component = (
          <CompletedManga
            listManga={completedOfManga}
            type={(compProcess = "completed")}
            completed
          />
        );
        break;

      case "add":
        component = <AddManga />;
        break;
      /*
      case "random":
        component = <RandomManga />;
        break;
*/
      default:
        break;
    }

    return component;
  };

  return (
    <div>
      <HeaderManga />
      {componentToRender()}
    </div>
  );
}

export default AppManga;
