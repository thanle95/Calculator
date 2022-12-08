import "./style.scss";
import Moves from "./moves";
import Goal from "./goal";
import Current from "./current";

export default function Screen() {
  return (
    <div className="screen">
      <Moves></Moves>
      <Goal></Goal>
      <Current></Current>
    </div>
  );
}
