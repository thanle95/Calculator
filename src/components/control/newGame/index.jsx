import { useContext } from "react"
import { GameContext } from "../../../context/gameContext"

export default function NewGame(){
    const {setGoal} = useContext(GameContext)
    const newGame = ()=>{
setGoal(2)
    }
    return <div className="control ">NewGame
    <button onClick={newGame}>new Game</button></div>
}