import React, { useState, useEffect } from "react";
import axios from "axios";

export const TrailerMovie = (props) => {
  //console.log(props.movie);

  //AIzaSyD3wEZ8-YIeLR747RyCYclfDBOzjBnk6hs limit

  let search = `${props.movie.title}`;
  let yearOfrelease = props.movie.release_date
    ? props.movie.release_date.slice(0, 4)
    : "";
  const [results, setResults] = useState([]);
  const { REACT_APP_YOUTUBE_KEY } = process.env;
  useEffect(() => {
    {
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?q=${search} ${yearOfrelease} trailer&part=snippet&type=video&pageInfo.resultsPerPage=2&videoEmbeddable=true&key=${REACT_APP_YOUTUBE_KEY}`;
      axios.get(searchUrl).then((res) => {
        console.log("searching");
        console.log(res.data.items[0].id.videoId);
        setResults(res.data.items[0].id.videoId);
      });
    }
  }, []);

  // console.log(search);
  // console.log(yearOfrelease);
  return (
    <div className="iframe-container">
      <button
        className="btn btn-danger close-iframe"
        style={{
          position: "absolute",
          left: "50%",
          top: "-15%",
          transform: "translateX(-50%)",
        }}
        onClick={() => props.setShowTrailer(false)}
      >
        Close
      </button>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${results}?rel=0`}
        frameborder="0"
        allow="encrypted-media"
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"
      ></iframe>
    </div>
  );
};

export default TrailerMovie;
