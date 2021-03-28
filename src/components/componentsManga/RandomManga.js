export const RandomManga = () => {
  const handleRandom = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Random trending manga</h2>

      <button onClick={handleRandom}>Random</button>
    </div>
  );
};

export default RandomManga;
