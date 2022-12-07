import { useContext } from "react"
import { GameContext } from "../../../context/gameContext"

export default function Goal(){
    const {goal} = useContext(GameContext)
    return <div className="screen-item bg-dark text-white">{goal}</div>
}