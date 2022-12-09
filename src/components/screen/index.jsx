import "./style.scss";
import Moves from "./moves";
import Goal from "./goal";
import Current from "./current";

export default function Screen() {
  return (
    <div className="screen">
      <div className="top">
        <Moves></Moves>
        <Goal></Goal>
      </div>

      <Current></Current>
    </div>
  );
}
