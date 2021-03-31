import React, { useState, useEffect } from "react";

import axios from "axios";

import { ResultCardMangaChild } from "./ResultCardMangaChild";

export const ResultCardManga = (props) => {
  const [result, setResults] = useState("");
  useEffect(() => {
    const searchUrl = `https://api.jikan.moe/v3/manga/${props.manga.mal_id}/pictures`;
    axios.get(searchUrl).then((res) => {
      if (res.data.pictures) {
        setResults(res.data.pictures[res.data.pictures.length - 1].large);
      }
    });
  }, []);

  return (
    <div className="result-card">
      <ResultCardMangaChild manga={props.manga} imageTwoUrl={result} />
    </div>
  );
};

export default ResultCardManga;
