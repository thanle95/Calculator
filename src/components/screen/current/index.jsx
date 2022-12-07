import { useContext } from "react"
import { GameContext } from "../../../context/gameContext"

export default function Current(){
    const {currentResult} = useContext(GameContext)
    return <div className="screen-item ">Current : {currentResult}</div>
}