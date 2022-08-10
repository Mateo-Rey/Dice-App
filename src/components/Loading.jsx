import { useContext } from "react";

export default function Loading({
  PlayerOneContext,
  PlayerTwoContext,
  setGameState,
}) {
  const [playerOne, setPlayerOne] = useContext(PlayerOneContext);
  const [playerTwo, setPlayerTwo] = useContext(PlayerTwoContext);

  function formSubmit(e) {
    e.preventDefault();
    if (playerTwo.length > 2 && playerOne.length > 2) {
      console.log("setGameState(true)");
      setGameState(true);
    } else {
      alert("need longer names");
    }
  }
  const updateNameP1 = (e) => {
    setPlayerOne(e.target.value);
  };
  const updateNameP2 = (e) => {
    setPlayerTwo(e.target.value);
  };
  return (
    <>
      <form onSubmit={formSubmit}>
        <h1>Player Select</h1>
        <label>Player One</label>
        <input type="text" value={playerOne} onChange={updateNameP1}></input>

        <label>Player Two</label>
        <input type="text" value={playerTwo} onChange={updateNameP2}></input>
        <button>Start!</button>
      </form>
    </>
  );
}
