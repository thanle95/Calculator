import { useContext } from "react";
import { GameContext } from "../../../context/gameContext";
import { pickArrayRandom, randomInt, shuffledArray } from "../../../utils/helpers";
import * as allOperators from "../../../utils/operator";
export default function NewGame() {
  const { setGoal, setMoves,setInitResult , setOperators, setCurrentResult} = useContext(GameContext);
  const generate = () => {
    const opt = {
      initResult: randomInt(0, 10),
      numberOfMoves: randomInt(3, 5),
      operatorRange: [1, 9],
      steps: []
      // ...options,
    };
    const ops = Object.values(allOperators);
    //random operators array
    //nếu lenght operators = moves mức easy
    //mức khó hơn thì operators > moves
    // hiển thị modal chọn độ khó của game
    const operators = Array.from({ length: opt.numberOfMoves }, () => {
      const op = pickArrayRandom(ops);
      return op(randomInt(...opt.operatorRange));
    });
    opt.steps = [...new Array(opt.numberOfMoves)].fill(0).map((a,index)=> index)
    
    shuffledArray(opt.steps)
    console.log({steps: opt.steps})
    // Áp dụng ngẫu nhiên các phép tính ở trên vào `initResult`
    const goal = 
    // opt.steps.reduce((sum, cur)=> {sum + operators[cur].func(sum)}, opt.initResult) 
    
    Array.from({ length: opt.numberOfMoves }).reduce((goal, curr, index) => {
      const op = operators[opt.steps[index]];

      return op.func(goal);
    }, opt.initResult);
    setInitResult(opt.initResult)
    setCurrentResult(opt.initResult)
    setGoal(goal)
    setMoves(opt.numberOfMoves + randomInt(0,3))
    setOperators(operators)
    // console.log({opt, operators,goal})
  };
  return (
    <div className="control ">
      <button onClick={generate}>new Game</button>
    </div>
  );
}
