import Player from "./components/Player";
import Loading from "./components/Loading";
import { useState, useEffect, useContext } from "react";
import React from "react";

function App() {
  const [firstDice, setFirstDice] = useState(0);
  const [secondDice, setSecondDice] = useState(0);
  let [aaa, setaaa] = useState("");
  let [playerOneName, setPlayerOneName] = useState("");
  let [playerTwoName, setPlayerTwoName] = useState("");
  let [gameState, setGameState] = useState(false);
  const PlayerOneContext = React.createContext("PlayerOne");
  const PlayerTwoContext = React.createContext("PlayerTwo");


  return (
    <>
    { gameState ?
      <>
      <Player
        dice={firstDice}
        setDice={setFirstDice}
        name={playerOneName}
      />
      <Player
        dice={secondDice}
        setDice={setSecondDice}
        name={playerTwoName}
      />
    </>
    :
      <> 
        <PlayerOneContext.Provider value={[playerOneName,setPlayerOneName]}>
          <PlayerTwoContext.Provider value={[playerTwoName, setPlayerTwoName]}>
            <Loading PlayerOneContext={PlayerOneContext} PlayerTwoContext={PlayerTwoContext} setGameState={setGameState}/>
          </PlayerTwoContext.Provider>
        </PlayerOneContext.Provider>
      </>


    }

</>)
}

export default App;
