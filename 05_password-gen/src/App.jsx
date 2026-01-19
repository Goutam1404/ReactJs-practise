import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { useCallback } from "react";
const App = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  let pass = "";
  let str = "ABCDEFGHIzJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstvwxyz";
  const passwordRef = useRef("null");

  const generatePassword = useCallback(() => {
    
    if (char) str += "!@#$%^&*()_+-{}[]<>,.?/|";
    if (number) str += "1234567890";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, number, char, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, char, number, generatePassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div>
      <div className="w-full max-w-md bg-gray-800 shadow-md mx-auto my-8 px-4 py-2 rounded-lg text-orange-500 ">
        <h1 className="text-center text-white my-2">Password Generator</h1>
        <div className="bg-slate-200 rounded-md overflow-hidden flex mb-4">
          <input
            type="text"
            value={password}
            placeholder="Generate your password"
            readOnly
            ref={passwordRef}
            className="outline-none w- w-full px-3 py-1"
          />
          <button
            onClick={copyPassword}
            className="bg-blue-600 text-white px-2 py-0.5"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Special char</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
