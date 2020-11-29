import "./App.css";
import { useState } from "react";
import dragon from "./dragon.gif";

const Element = ({ xy, movement }) => {
  const degree = 0;
  const scale = movement[0] > 0 ? -1 : 1;
  const stylePosition = {
    top: `${xy[1] - 140}px`,
    left: `${xy[0] - 100}px`,
    transform: `rotate(${degree}deg) scaleX(${scale})`,
  };

  return (
    <div className="Element" style={stylePosition}>
      <img src={dragon} alt={dragon}></img>
    </div>
  );
};

function App() {
  const [xy, setXy] = useState([0, 0]);
  const [movement, setMovement] = useState([0, 0]);

  const onMouseMove = (e) => {
    setMovement([e.movementX, e.movementY]);
    setXy([e.clientX, e.clientY]);
  };

  return (
    <div className="App" onMouseMove={onMouseMove}>
      <Element xy={xy} movement={movement}></Element>
    </div>
  );
}

export default App;
