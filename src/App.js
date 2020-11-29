import "./App.css";
import { useState } from "react";

function App(props) {
  const [count, setCount] = useState(10);

  return (
    <div className="App">
      <button
        onClick={(e) => {
          e.preventDefault();
          setCount((curCount) => curCount + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
    </div>
  );
}

export default App;
