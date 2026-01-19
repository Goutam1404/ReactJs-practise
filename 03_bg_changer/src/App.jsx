import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center px-4  bottom-12 inset-x-0">
        <div className="bg-slate-100 flex flex-wrap justify-center gap-3 px-3 py-1 rounded-2xl">
          <button
            style={{ backgroundColor: "red" }}
            className="rounded-full px-4 py-1 border-2 border-indigo-500"
            onClick={() => setColor("red")} 
          >
            Red
          </button>
          <button
            style={{ backgroundColor: "green" }}
            className="rounded-full px-4 py-1 border-2 border-indigo-500"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            style={{ backgroundColor: "blue", color: "white" }}
            className="rounded-full px-4 py-1 border-2 border-indigo-500"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            style={{ backgroundColor: "orange" }}
            className="rounded-full px-4 py-1 border-2 border-indigo-500"
            onClick={() => setColor((color) => (color = "orange"))}
          >
            Orange
          </button>
          <button
            style={{ backgroundColor: "yellow" }}
            className="rounded-full px-4 py-1 border-2 border-indigo-500"
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
          <button
            style={{ backgroundColor: "black", color: "white" }}
            className="rounded-full px-4 py-1 border-2 border-indigo-500"
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            style={{ backgroundColor: "white" }}
            className="rounded-full px-4 py-1 border-2 border-indigo-500"
            onClick={() => setColor("white")}
          >
            white
          </button>
          <button
            style={{ backgroundColor: "pink" }}
            className="rounded-full px-4 py-1 border-2 border-indigo-500"
            onClick={() => setColor("pink")}
          >
            pink
          </button>
          <button
            style={{ backgroundColor: "violet" }}
            className="rounded-full px-4 py-1 border-2 border-indigo-500"
            onClick={() => setColor("violet")}
          >
            violet
          </button>
          <button
            style={{ backgroundColor: "olive" }}
            className="rounded-full px-4 py-1 border-2 border-indigo-500"
            onClick={() => setColor("olive")}
          >
            olive
          </button>
          <button
            style={{ backgroundColor: "gray" }}
            className="rounded-full px-4 py-1 border-4 border-indigo-500"
            onClick={() => setColor("olive")}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
