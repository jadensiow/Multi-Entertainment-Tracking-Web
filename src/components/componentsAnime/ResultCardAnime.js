import React, { useEffect, useState } from "react";

import { ResultCardChildAnime } from "./ResultCardChildAnime";

import axios from "axios";

export const ResultCardAnime = (props) => {
  const [result, setResults] = useState("");
  useEffect(() => {
    const searchUrl = `https://api.jikan.moe/v3/anime/${props.anime.mal_id}/pictures`;
    axios.get(searchUrl).then((res) => {
      if (res.data.pictures) {
        // console.log(res.data.pictures);
        setResults(res.data.pictures[res.data.pictures.length - 1].large);
      }
    });
  }, []);
  return (
    <div className="result-card">
      {result && (
        <ResultCardChildAnime anime={props.anime} imageTwoUrl={result} />
      )}
    </div>
  );
};
export default ResultCardAnime;
