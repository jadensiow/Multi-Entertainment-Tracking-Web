import React, { useContext, useState } from "react";

import { TvNumSeasonNEps } from "./TvNumSeasonNEps";

export const ResultCardTvSeries = (props) => {
  //console.log(props.tvseries.id);
  console.log(props);

  return (
    <div className="result-card">
      <TvNumSeasonNEps tvseries={props.tvseries} />
    </div>
  );
};
export default ResultCardTvSeries;
