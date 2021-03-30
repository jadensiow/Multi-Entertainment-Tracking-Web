export const RandomAnime = () => {
  const handleRandom = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Random trending anime</h2>

      <button onClick={handleRandom}>Random</button>
    </div>
  );
};

export default RandomAnime;
