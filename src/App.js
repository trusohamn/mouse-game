/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useState, useEffect } from "react";
import dragon from "./dragon.gif";
import dragonEgg from "./dragonEgg.png";
import dragonBaby from "./babyDragon.png";
import sound from "./assets/sound.mp3";

import { useAudio } from "./hooks";

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
    <div className="absolute" style={stylePosition}>
      <img src={dragon} alt={dragon}></img>
    </div>
  );
};

const Icon = ({ position, icon, scale = 1 }) => {
  const stylePosition = {
    top: `${position[1]}px`,
    left: `${position[0]}px`,
  };

  return (
    <div className="absolute" style={stylePosition}>
      <img
        src={icon}
        alt={icon}
        width={iconWidth * scale}
        heigth={iconHeight * scale}
      ></img>
    </div>
  );
};

const App = () => {
  const iconFound = dragonBaby;
  const iconGoal = dragonEgg;

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [xy, setXy] = useState([0, 0]);
  const [movement, setMovement] = useState([0, 0]);
  const [found, setFound] = useState([]);
  const [goalPosition, setGoalPosition] = useState(null);

  const [, toggle] = useAudio(sound);

  const setupNewGoal = () =>
    setGoalPosition([
      Math.random() * width * 0.9 - iconWidth / 2,
      Math.random() * height * 0.9 - iconHeight / 2,
    ]);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setWidth(innerWidth);
    setHeight(innerHeight);
    if (width && height) setupNewGoal();
  }, [height, width]);

  useEffect(() => {
    if (
      !!goalPosition &&
      Math.abs(xy[0] - goalPosition[0]) < iconWidth &&
      Math.abs(xy[1] - goalPosition[1]) < iconHeight
    ) {
      toggle();
      setFound([
        ...found,
        <Icon position={[...goalPosition]} icon={iconFound} scale={1.6} />,
      ]);
      setupNewGoal();
    }
  }, [xy, goalPosition]);

  const onMouseMove = (e) => {
    setMovement([e.movementX, e.movementY]);
    setXy([e.clientX, e.clientY]);
  };

  return (
    <div className="App" onMouseMove={onMouseMove}>
      <Mouse xy={xy} movement={movement} />
      {!!goalPosition && <Icon position={goalPosition} icon={iconGoal} />}
      {found}
    </div>
  );
};

export default App;
