import React from "react";

export const RandomTvSeries = () => {
  const handleRandom = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Random trending tvseries</h2>

      <button onClick={handleRandom}>Random</button>
    </div>
  );
};

export default RandomTvSeries;
