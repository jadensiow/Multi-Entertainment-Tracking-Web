import React, { useState, useContext } from "react";
import "../card.css";

import ReactCardFlip from "react-card-flip";
import StarHollowSVG from "./StarHollowSVG";
import { GlobalAnimeContext } from "../context/GlobalAnimeState";
import { GlobalMangaContext } from "../context/GlobalMangaState";
import { GlobalTvSeriesContext } from "../context/GlobalTvSeriesState";
import { GlobalBooksContext } from "../context/GlobalBooksState";
import { GlobalMovieContext } from "../context/GlobalMovieState";

const CardComponent = ({
  id,
  children,
  image_url,
  title,
  start_date,
  end_date,
  episodes,
  score,
  synopsis,
  tvseries,
  sesaons,
  movie,
  book,
  type,
  comment,
  listType,
  userRating,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [commentState, setCommentState] = useState(comment);
  const [showEditForm, setShowEditForm] = useState(false);
  const [hoveringStar, setHoveringStar] = useState(0);
  const [clickedStar, setClickedStar] = useState(userRating);

  const { updateAnimeComment, setAnimeUserRating } = useContext(
    GlobalAnimeContext
  );
  const { updateMangaComment, setMangaUserRating } = useContext(
    GlobalMangaContext
  );
  const { updateTvSeriesComment, setTvSeriesUserRating } = useContext(
    GlobalTvSeriesContext
  );
  const { updateBookComment, setBookUserRating } = useContext(
    GlobalBooksContext
  );
  const { updateMovieComment, setMovieUserRating } = useContext(
    GlobalMovieContext
  );

  const clickedOnStar = (starNumber) => {
    setClickedStar(starNumber);
    switch (type) {
      case "anime":
        setAnimeUserRating(id, starNumber, listType);
        break;

      case "manga":
        setMangaUserRating(id, starNumber, listType);
        break;

      case "tvseries":
        setTvSeriesUserRating(id, starNumber, listType);
        break;

      case "book":
        setBookUserRating(id, starNumber, listType);
        break;

      case "movie":
        setMovieUserRating(id, starNumber, listType);
        break;

      default:
        break;
    }
  };

  const hoveringOverStar = (starNumber) => {
    setHoveringStar(starNumber);
  };

  const stoppedHovering = (starNumber) => {
    setHoveringStar(0);
  };

  const sendUpdateCommentAction = () => {
    switch (type) {
      case "anime":
        updateAnimeComment(id, commentState, listType);
        break;

      case "manga":
        updateMangaComment(id, commentState, listType);
        break;

      case "tvseries":
        updateTvSeriesComment(id, commentState, listType);
        break;

      case "book":
        updateBookComment(id, commentState, listType);
        break;

      case "movie":
        updateMovieComment(id, commentState, listType);
        break;

      default:
        break;
    }
    setShowEditForm(false);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div>
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={image_url} />
              <h1>
                {title && title.length > 44
                  ? title.slice(0, 42) + "..."
                  : title}
              </h1>
              <h4>
                {start_date ? start_date : "Date not in database"}{" "}
                {!movie && !book && (
                  <span>to {end_date ? end_date : "Ongoing"}</span>
                )}
              </h4>
              {!movie && (
                <span className="minutes">
                  {book ? "Pages:" : "Episodes:"} {"  "}
                  {episodes
                    ? episodes
                    : episodes === 0
                    ? "Ongoing"
                    : "Data unavailable"}
                </span>
              )}
              {tvseries && (
                <span className="minutes">
                  Seasons:{" "}
                  {sesaons
                    ? sesaons
                    : sesaons === 0
                    ? "Ongoing"
                    : "Data unavailable"}
                </span>
              )}
              <p className="type">
                Ratings: {score ? score : "Data unavailable"}
              </p>
            </div>
            <div className="movie_desc">
              <p className="text">
                {synopsis
                  ? synopsis.length > 430
                    ? synopsis.slice(0, 427) + "..."
                    : synopsis
                  : "Synopsis unavaiable"}
              </p>
            </div>

            {children}

            {listType !== "add" && (
              <button
                style={{
                  position: "absolute",
                  top: "1%",
                  right: "1%",
                }}
                className="btn btn-md btn-info ml-1000"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                Flip
              </button>
            )}
          </div>
          <div
            className="blur_back"
            style={{
              backgroundImage: `url(${image_url})`,
            }}
          ></div>
        </div>
      </div>

      <div>
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={image_url} />
              <h1>
                {title && title.length > 44
                  ? title.slice(0, 42) + "..."
                  : title}
              </h1>

              <p>
                {Array(10)
                  .fill(0)
                  .map((n, i) => i + 1)
                  .map((num) => {
                    let fill = false;

                    if (num <= hoveringStar || num <= clickedStar) {
                      // if the number of star is less than the star we're hoveringOver
                      // then we want to fill all stars that have a number lower than the
                      // current star that we're hovering over

                      /* 
                        so if we're hovering over star number 5, then fill all stars
                        that have number less than equal to 5. Same thing applies to any
                        star we click on. But the click is permanent as it sends an action
                        to the context 
                        */

                      fill = true;
                    }

                    return (
                      <StarHollowSVG
                        number={num}
                        clickedOnStar={clickedOnStar}
                        hoveringOverStar={hoveringOverStar}
                        stoppedHovering={stoppedHovering}
                        fill={fill}
                      />
                    );
                  })}
              </p>
            </div>
            <div className="movie_desc">
              <div>
                {!showEditForm ? (
                  <p className="text">{comment}</p>
                ) : (
                  <div className="input-group">
                    <textarea
                      className="form-control"
                      rows="5"
                      value={commentState}
                      onChange={(e) => setCommentState(e.target.value)}
                      style={{ backgroundColor: "transparent", color: "white" }}
                    />
                  </div>
                )}
                {!showEditForm && (
                  <button
                    className="btn btn-outline-warning mt-3"
                    onClick={() => setShowEditForm(true)}
                  >
                    Edit
                  </button>
                )}
                {showEditForm && (
                  <button
                    className="btn btn-outline-info mt-3"
                    onClick={sendUpdateCommentAction}
                  >
                    Update
                  </button>
                )}
              </div>
            </div>
            {listType !== "add" && (
              <button
                style={{
                  position: "absolute",
                  top: "1%",
                  right: "1%",
                }}
                className="btn btn-md btn-info ml-0"
                id="btnFlip"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                Flip
              </button>
            )}
          </div>

          <div
            className="blur_back"
            style={{
              backgroundImage: `url(${image_url}) `,
            }}
          ></div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default CardComponent;
