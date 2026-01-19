import React, { useState } from "react";
import useCurrencyInfo from "./hooks/userCurrencyInfo.js";
import InputBox from "./components/InputBox.jsx";

const App = () => {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmnt, setConvertedAmnt] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const option = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmnt(amount);
    setAmount(convertedAmnt);
  };
  const convert = () => {
    setConvertedAmnt(currencyInfo[to] * amount);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-end  items-center bg-cover bg-no-repeat bg-gray-900"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D}')`,
        
      }}
    >
      <div className="w-full m-10 text-2xl">
        <div className="w-full max-w-md mx-auto mr-0 border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault(); //whenever a form is made then its info will be sent somewhere so it is preventing it
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={option}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount)=>setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-800"
                onClick={swap}
              > 
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmnt}
                currencyOptions={option}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                // currencyDisable
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
