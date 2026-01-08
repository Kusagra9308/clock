

import { useState, useEffect,setNow } from "react";


function App() {
  const [color, setColor] = useState("green");

  const change = (event) => {
    setColor(event.target.value);
  };
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup (important)
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1>Default props in react.js</h1>
      <select onChange={change}>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
      </select>

      {/* <h1>{color}</h1> */}

      <br></br>
      <br></br>

      <div
        style={{
          backgroundColor: "black",
          padding: "70px",
          width: "200px",
          borderRadius: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: color }}>{time.toLocaleTimeString()}</h1>
        </div>
      </div>
    </>
  );
}

export default App;