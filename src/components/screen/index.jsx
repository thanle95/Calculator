import "./style.css";
import Moves from "./moves";
import Goal from "./goal";
import Current from "./current";

export default function Screen() {
  return (
    <>
      <Moves></Moves>
      <Goal></Goal>
      <Current></Current>
    </>
  );
}
