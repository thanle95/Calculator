import { useContext } from "react";
import { GameContext } from "../../context/gameContext";
import NewGame from "./newGame";
import Operator from "./operator";

export default function Control(){
    const {operators} = useContext(GameContext)
    return <><NewGame></NewGame>
    {operators.map((op)=> <Operator op={op}></Operator>)}
    
    </>
}