import "./App.css";
import { useState } from "react";

const Element = ({ xy }) => {
  const style = {
    top: `${xy[1]}px`,
    left: `${xy[0]}px`,
  };
  console.log(style);
  return <div className="Element" style={style}></div>;
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
