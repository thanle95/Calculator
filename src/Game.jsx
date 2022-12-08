import { useState } from "react";
import "./Game.scss";
import Control from "./components/control";
import Screen from "./components/screen";
import { GameContext } from "./context/gameContext";
import { add, divide, multiply, subtract } from "./utils/operator";

function Game() {
  const [goal, setGoal] = useState(4);
  const [moves, setMoves] = useState(3);
  const [initResult, setInitResult] = useState(3);
  const [currentResult, setCurrentResult] = useState(3);
  const [gameEnd, setGameEnd] = useState(false);
  const [operators, setOperators] = useState([add(4), multiply(4), divide(4)]);

  const value = {
    goal,
    setGoal,
    moves,
    setMoves,
    initResult,
    setInitResult,
    currentResult,
    setCurrentResult,
    operators,
    setOperators,
    gameEnd,
    setGameEnd,
  };
  return (
    <GameContext.Provider value={value}>
      <div className="App">
        <div className="container">
          <Screen></Screen>
          <Control></Control>
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default Game;
