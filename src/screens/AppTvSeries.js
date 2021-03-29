import React, { useContext } from "react";

import AddTvSeries from "../components/componentsTVSeries/AddTvSeries";
import CompletedTvSeries from "../components/componentsTVSeries/CompletedTvSeries";
import HeaderTvSeries from "../components/componentsTVSeries/HeaderTvSeries";
import ListTvSeries from "../components/componentsTVSeries/ListTvSeries";
//import RandomTvSeries from "../components/componentsTVSeries/RandomTvSeries";

import { GlobalTvSeriesContext } from "../context/GlobalTvSeriesState";

const AppTvSeries = ({ match }) => {
  const { watchlistOfTvSeries, completedOfTvSeries } = useContext(
    GlobalTvSeriesContext
  );

  const componentToRender = () => {
    let component;
    let compProcess; // to pass it down to button so can choose at watchlist or completed

    switch (match.params.listType) {
      case "watchlist":
        component = (
          <ListTvSeries
            listTvSeries={watchlistOfTvSeries}
            type={(compProcess = "watchlist")}
            watchList
          />
        );
        break;

      case "completed":
        component = (
          <CompletedTvSeries
            listTvSeries={completedOfTvSeries}
            type={(compProcess = "completed")}
            completed
          />
        );
        break;

      case "add":
        component = <AddTvSeries />;
        break;
      /*
      case "random":
        component = <RandomTvSeries />;
        break;
*/
      default:
        break;
    }

    return component;
  };

  return <div>{componentToRender()}</div>;
};

export default AppTvSeries;
