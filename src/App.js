import "./App.css";
import { useState, useMemo, useEffect } from "react";
import dragon from "./dragon.gif";
import dragonEgg from "./dragonEgg.png";
import babyDragon from "./baby-dragon.jpg";

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

const Final = ({ position }) => {
  const stylePosition = {
    top: `${position[1] - 50}px`,
    left: `${position[0] - 50}px`,
  };

  return (
    <div className="Element" style={stylePosition}>
      <img src={dragonEgg} alt={dragonEgg} width={100} heigth={100}></img>
    </div>
  );
};
const App = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [xy, setXy] = useState([0, 0]);
  const [movement, setMovement] = useState([0, 0]);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setWidth(innerWidth);
    setHeight(innerHeight);
  }, []);

  const onMouseMove = (e) => {
    setMovement([e.movementX, e.movementY]);
    setXy([e.clientX, e.clientY]);
  };

  const finalPosition = useMemo(
    () => [Math.random() * width * 0.9, Math.random() * height * 0.9],
    [height, width]
  );

  if (
    Math.abs(xy[0] - finalPosition[0] < 20) &&
    Math.abs(xy[1] - finalPosition[1]) < 20
  ) {
    return (
      <div className="App">
        <div>
          <img src={babyDragon} alt={babyDragon}></img>
        </div>
      </div>
    );
  }

  return (
    <div className="App" onMouseMove={onMouseMove}>
      <Element xy={xy} movement={movement}></Element>
      <Final position={finalPosition}></Final>
    </div>
  );
};

export default App;
