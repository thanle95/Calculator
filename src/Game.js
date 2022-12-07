import { useState } from "react";
import "./Game.css";
import Control from "./components/control";
import Screen from "./components/screen";
import { GameContext } from "./context/gameContext";
import { add, divide, subtract } from "./utils/operator";

function Game() {
  const [goal, setGoal] = useState(4);
  const [moves, setMoves] = useState(3);
  const [initResult, setInitResult] = useState(3);
  const [currentResult, setCurrentResult] = useState(3);
  const [operators, setOperators] = useState([add(4), subtract(4), divide(4)]);

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
  };
  return (
    <GameContext.Provider value={value}>
      <div className="App">
        <Screen></Screen>
        <Control></Control>
      </div>
    </GameContext.Provider>
  );
}

export default Game;
