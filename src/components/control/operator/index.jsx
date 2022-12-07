import { useContext } from "react"
import { GameContext } from "../../../context/gameContext"

export default function Operator({op}){
    const {currentResult} = useContext(GameContext)
    const handleClick = ()=>{
        const current = op.func(currentResult)
        
    }
    return <button className="control " onClick={handleClick}>{op.label}</button>
}