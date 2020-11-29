import "./App.css";
import { useState } from "react";
import dragon from "./dragon.gif";

const Element = ({ xy }) => {
  const style = {
    top: `${xy[1]}px`,
    left: `${xy[0]}px`,
  };

  // TODO read it from properties of image
  const styleImage = {
    marginLeft: "-80px",
    marginTop: "-120px",
  };

  return (
    <div className="Element" style={style}>
      <img src={dragon} alt={dragon} style={styleImage}></img>
    </div>
  );
};

function App() {
  const [xy, setXy] = useState([0, 0]);
  const onMouseMove = (e) => {
    setXy([e.clientX, e.clientY]);
  };

  return (
    <div className="App" onMouseMove={onMouseMove}>
      <Element xy={xy}></Element>
    </div>
  );
}

export default App;
