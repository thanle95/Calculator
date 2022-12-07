import { useContext } from "react";
import { GameContext } from "../../../context/gameContext";

export default function Operator({ op }) {
  const { goal, currentResult, setCurrentResult, moves, setMoves, setGameEnd } =
    useContext(GameContext);
  const handleClick = () => {
    const current = op.func(currentResult);
    setCurrentResult(current);
    const newMoves = moves - 1;
    setMoves(newMoves);
    if(checkGameEnd(newMoves, current))
        setGameEnd(true)
  };
  const checkGameEnd = (moves, current) => {
    if (moves === 0 || current !== goal) {
        handleLose();
        return true;
    }
    if (current === goal){
        handleWin()
        return true;
    };
  };
  const handleWin = () => {
     //if wins, show steps, ask new game
  };
  const handleLose = () => {
      //if loses, reset
  };
  return (
    <button className="control " onClick={handleClick}>
      {op.label}
    </button>
  );
}
