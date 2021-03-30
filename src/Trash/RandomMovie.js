export const RandomMovie = () => {
  const handleRandom = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Random trending movies</h2>

      <button onClick={handleRandom}>Random</button>
    </div>
  );
};

export default RandomMovie;
