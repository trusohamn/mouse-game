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

const Final = ({ position, found }) => {
  const stylePosition = {
    top: `${position[1] - 50}px`,
    left: `${position[0] - 50}px`,
  };

  return (
    <div className="Element" style={stylePosition}>
      <img
        src={found ? babyDragon : dragonEgg}
        alt={dragonEgg}
        width={100}
        heigth={100}
      ></img>
    </div>
  );
};
const App = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [xy, setXy] = useState([0, 0]);
  const [movement, setMovement] = useState([0, 0]);
  const [found, setFound] = useState(false);
  const [finalPosition, setFinalPosition] = useState(null);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setWidth(innerWidth);
    setHeight(innerHeight);
    if (width && height) {
      setFinalPosition([
        Math.random() * width * 0.9,
        Math.random() * height * 0.9,
      ]);
    }
  }, [height, width]);

  useEffect(() => {
    if (
      !!finalPosition &&
      Math.abs(xy[0] - finalPosition[0] < 20) &&
      Math.abs(xy[1] - finalPosition[1]) < 20
    ) {
      setFound(true);
    }
  }, [xy, finalPosition]);

  const onMouseMove = (e) => {
    setMovement([e.movementX, e.movementY]);
    setXy([e.clientX, e.clientY]);
  };

  return (
    <div className="App" onMouseMove={onMouseMove}>
      <Element xy={xy} movement={movement}></Element>
      {!!finalPosition && (
        <Final position={finalPosition} found={found}></Final>
      )}
    </div>
  );
};

export default App;
