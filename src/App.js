/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useState, useEffect } from "react";
import dragon from "./dragon.gif";
import dragonEgg from "./dragonEgg.png";
import dragonBaby from "./baby-dragon.jpg";

const iconWidth = 100;
const iconHeight = 100;

const Mouse = ({ xy, movement }) => {
  const degree = 0;
  const scale = movement[0] > 0 ? -1 : 1;
  const stylePosition = {
    top: `${xy[1] - 140}px`,
    left: `${xy[0] - 100}px`,
    transform: `rotate(${degree}deg) scaleX(${scale})`,
  };

  return (
    <div className="Mouse" style={stylePosition}>
      <img src={dragon} alt={dragon}></img>
    </div>
  );
};

const Final = ({ position }) => {
  const stylePosition = {
    top: `${position[1]}px`,
    left: `${position[0]}px`,
  };

  return (
    <div className="Mouse" style={stylePosition}>
      <img
        src={dragonEgg}
        alt={dragonEgg}
        width={iconWidth}
        heigth={iconHeight}
      ></img>
    </div>
  );
};

const Found = ({ position }) => {
  const stylePosition = {
    top: `${position[1]}px`,
    left: `${position[0]}px`,
  };

  return (
    <div className="Mouse" style={stylePosition}>
      <img
        src={dragonBaby}
        alt={dragonBaby}
        width={iconWidth}
        heigth={iconHeight}
      ></img>
    </div>
  );
};

const App = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [xy, setXy] = useState([0, 0]);
  const [movement, setMovement] = useState([0, 0]);
  const [found, setFound] = useState([]);
  const [finalPosition, setFinalPosition] = useState(null);

  const setupGoal = () =>
    setFinalPosition([
      Math.random() * width * 0.9 - iconWidth / 2,
      Math.random() * height * 0.9 - iconHeight / 2,
    ]);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setWidth(innerWidth);
    setHeight(innerHeight);
    if (width && height) setupGoal();
  }, [height, width]);

  useEffect(() => {
    if (
      !!finalPosition &&
      Math.abs(xy[0] - finalPosition[0]) < iconWidth &&
      Math.abs(xy[1] - finalPosition[1]) < iconHeight
    ) {
      setFound([...found, <Found position={[...finalPosition]}></Found>]);
      setupGoal();
    }
  }, [xy, finalPosition]);

  const onMouseMove = (e) => {
    setMovement([e.movementX, e.movementY]);
    setXy([e.clientX, e.clientY]);
  };

  return (
    <div className="App" onMouseMove={onMouseMove}>
      <Mouse xy={xy} movement={movement}></Mouse>
      {!!finalPosition && (
        <Final position={finalPosition} found={found}></Final>
      )}
      {found}
    </div>
  );
};

export default App;
