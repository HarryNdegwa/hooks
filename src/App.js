import "./App.css";
import { useState, useEffect } from "react";

function App(props) {
  const [{ count, count2 }, setCount, setCount2] = useState({
    count: 10,
    count2: 20,
  });

  useEffect(() => {
    console.log("Hellooo");
  }, [count]);

  return (
    <div className="App">
      <button
        onClick={(e) => {
          e.preventDefault();
          setCount((currState) => {
            return {
              ...currState,
              count: currState.count + 1,
            };
          });
        }}
      >
        +
      </button>
      <p>Count 1:{count}</p>
      <p>Count 2:{count2}</p>
    </div>
  );
}

export default App;
