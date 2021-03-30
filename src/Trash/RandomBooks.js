export const RandomBooks = () => {
  const handleRandom = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Random trending books</h2>

      <button onClick={handleRandom}>Random</button>
    </div>
  );
};

export default RandomBooks;
