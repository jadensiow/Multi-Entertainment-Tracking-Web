import { useContext } from "react";
import { GlobalMangaContext } from "../../context/GlobalMangaState";

export const ButtonsManga = ({ manga, type }) => {
  const { removeMangafromWatchList, addMangaToCompleted } = useContext(
    GlobalMangaContext
  );
  //console.log(manga);
  const {
    moveCompletedMangaToWatchList,
    removeMangafromCompleted,
  } = useContext(GlobalMangaContext);

  const clickDeleteInWatchList = (event) => {
    event.preventDefault();
    //console.log(event.target);
    removeMangafromWatchList(manga.mal_id);
  };
  const clickMovetoCompleted = (event) => {
    event.preventDefault();
    // console.log(event.target);
    addMangaToCompleted(manga);
  };

  const clickMovetoWatchList = (event) => {
    event.preventDefault();
    //console.log(event.target);
    moveCompletedMangaToWatchList(manga);
  };
  const clickRemoveFromCompleted = (event) => {
    event.preventDefault();
    // console.log(event.target);
    removeMangafromCompleted(manga.mal_id);
  };

  //console.log(type);
  return (
    <div className="watchListBtn">
      {type === "watchlist" ? (
        <div>
          <button
            className="btn btn-outline-danger"
            onClick={clickDeleteInWatchList}
          >
            Remove
          </button>
          <button
            className="btn btn-outline-success ml-3"
            onClick={clickMovetoCompleted}
          >
            Completed
          </button>
        </div>
      ) : type === "completed" ? (
        <div>
          <button
            className="btn btn-outline-success ml-3"
            onClick={clickMovetoWatchList}
          >
            Move To Watchlist
          </button>
          <button
            className="btn btn-outline-success ml-3"
            onClick={clickRemoveFromCompleted}
          >
            Delete from completed
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ButtonsManga;
