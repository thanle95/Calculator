import { useContext, useEffect } from "react";
import { GameContext } from "../../../context/gameContext";

export default function Operator({ op }) {
  const { goal, currentResult, setCurrentResult, moves, setMoves, setGameEnd } =
    useContext(GameContext);
  const handleClick = () => {
    const current = op.func(currentResult);
    setCurrentResult(current);
    const newMoves = moves - 1;
    setMoves(newMoves);
    //lưu lại bước đã đi, để disable nút đó trên giao diện
    if(checkGameEnd(newMoves, current))
        setGameEnd(true)
  };
  // useEffect(()=>{},[moves])
  const checkGameEnd = (moves, current) => {
    if (moves === 0 && current !== goal) {
        handleLose();
        return true;
    }
    if (current === goal){
        handleWin()
        return true;
    };
    return false
  };
  const handleWin = () => {
     //if wins, show steps, ask new game
     alert("wins")
  };
  const handleLose = () => {
      //if loses, reset
      alert("lose")
  };
  return (
    <button className="control " onClick={handleClick}>
      {op.label}
    </button>
  );
}
