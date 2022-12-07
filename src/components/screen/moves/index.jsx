import { useContext } from "react"
import { GameContext } from "../../../context/gameContext"

export default function Moves(){
    const {moves} = useContext(GameContext)
    return <div className="screen-item bg-dark text-white">Moves: {moves}</div>
}