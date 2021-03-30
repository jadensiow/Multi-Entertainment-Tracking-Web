const getLinksAndNames = (listName) => {
    // listname = anime, manga, tvseries, books, movies
  
    return [
      { link: `/${listName}/add`, name: "Add " + listName },
      { link: `/${listName}/watchlist`, name: "Watchlist " + listName },
      { link: `/${listName}/completed`, name: "Completed " + listName },
    ];
  };
  
  export default getLinksAndNames;
  