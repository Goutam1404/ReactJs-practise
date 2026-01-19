import React from "react";
import { useState } from "react";
import "./App.css";
const App = () => {
  // let value=5
  let [value, setValue] = useState(5);
  
  function addVal() {
    value = value + 1;
    setValue(value);
  }
  function decreaseVal() {
    value = value - 1;
    if (value < 0) {
      value = 0;
    }
    setValue(value);
  }
  function toZero() {
    value = 0;
    setValue(value);
  }
  return (
    <div>
      <h1>Counter variable</h1>
      <h2>Counter:{value}</h2>
      <button onClick={() => setValue(value + 1)}>Add value +1</button>
      &nbsp; &nbsp;
      <button onClick={decreaseVal}>subtract value -1</button>
      &nbsp; &nbsp;
      <button onClick={toZero}>Intialize to 0</button>
    </div>
  );
};

export default App;
