import React, { useState, useContext } from "react";
import { GlobalAnimeContext } from "../context/GlobalAnimeState";
import { GlobalMangaContext } from "../context/GlobalMangaState";
import { GlobalBooksContext } from "../context/GlobalBooksState";
import { GlobalTvSeriesContext } from "../context/GlobalTvSeriesState";

const EpisodeNumberUpdater = ({
  id,
  totalEpisodes,
  onEpisodeNumber,
  type,
  onSeason,
  totalSeasons,
}) => {
  // current episode the player is on
  const [episodeNumber, setEpisodeNumber] = useState(onEpisodeNumber);
  const [seasonNumber, setSeasonNumber] = useState(onSeason);
  // since users should be able to manuall edit the episodes instead of clicking
  // + and -, we show input as well
  const [showInput, setShowInput] = useState(false);
  const [showSeasonInput, setShowSeasonInput] = useState(false);

  const { updateWatchedAnimeEpisodes } = useContext(GlobalAnimeContext);
  const { updateWatchedManga } = useContext(GlobalMangaContext);
  const { updateWatchedBooks } = useContext(GlobalBooksContext);
  const {
    updateWatchedTvSeriesEpisodes,
    updateWatchedTvSeriesSeasons,
  } = useContext(GlobalTvSeriesContext);

  const sendUpdateEpisodesAction = () => {
    // we pass in a type which can be 'anime', 'manga', 'tvseries', so that
    // this one component will handle everything. That's why I've put it outside
    // of every folder
    switch (type) {
      case "anime":
        updateWatchedAnimeEpisodes(id, episodeNumber);
        break;

      case "manga":
        updateWatchedManga(id, episodeNumber);
        break;

      case "books":
        updateWatchedBooks(id, episodeNumber);
        break;

      case "tvseries":
        updateWatchedTvSeriesEpisodes(id, episodeNumber);
        break;

      default:
        break;
    }
  };

  const setEpisodeNumberHandler = (epNumber) => {
    if (epNumber > totalEpisodes) {
      setEpisodeNumber(totalEpisodes);
    } else if (epNumber < 0) {
      setEpisodeNumber(0);
    } else {
      setEpisodeNumber(epNumber);
    }
  };

  const setSeasonNumberHandler = (sNumber) => {
    if (sNumber > totalSeasons) {
      setSeasonNumber(totalSeasons);
    } else if (sNumber < 0) {
      setSeasonNumber(0);
    } else {
      setSeasonNumber(sNumber);
    }
  };

  return (
    <div>
      {type === "tvseries" && (
        <div className="mt-2 mb-2" style={{ color: "white" }}>
          <span className="mr-3">Seasons </span>
          <button
            className="btn btn-outline-primary btn-sm mr-2"
            onClick={() => setSeasonNumberHandler(seasonNumber - 1)}
          >
            {" "}
            -{" "}
          </button>
          {showSeasonInput ? (
            <input
              type="text"
              value={seasonNumber}
              onChange={(e) => setSeasonNumberHandler(e.target.value)}
              onDoubleClick={() => setShowSeasonInput(!showSeasonInput)}
            />
          ) : (
            <span onClick={() => setShowSeasonInput(!showSeasonInput)}>
              {seasonNumber}
            </span>
          )}
          / <span>{totalSeasons}</span>
          <button
            className="btn btn-outline-primary btn-sm ml-2"
            onClick={() => setSeasonNumberHandler(seasonNumber + 1)}
          >
            {" "}
            +{" "}
          </button>
          {/* updates will be made when this button is clicked */}
          <button
            className="btn btn-outline-primary btn-sm ml-3"
            onClick={() => updateWatchedTvSeriesSeasons(id, seasonNumber)}
          >
            Update
          </button>
        </div>
      )}
      <div style={{ color: "white" }} className="mb-3">
        <span className="mr-3">{type === "books" ? "Pages" : "Episodes"} </span>
        <button
          className="btn btn-outline-primary btn-sm mr-2"
          onClick={() => setEpisodeNumberHandler(episodeNumber - 1)}
        >
          {" "}
          -{" "}
        </button>
        {showInput ? (
          <input
            type="text"
            value={episodeNumber}
            onChange={(e) => setEpisodeNumberHandler(e.target.value)}
            onDoubleClick={() => setShowInput(!showInput)}
          />
        ) : (
          <span onClick={() => setShowInput(!showInput)}>{episodeNumber}</span>
        )}
        / <span>{totalEpisodes}</span>
        <button
          className="btn btn-outline-primary btn-sm ml-2"
          onClick={() => setEpisodeNumberHandler(episodeNumber + 1)}
        >
          {" "}
          +{" "}
        </button>
        {/* updates will be made when this button is clicked */}
        <button
          className="btn btn-outline-primary btn-sm ml-3"
          onClick={sendUpdateEpisodesAction}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EpisodeNumberUpdater;
