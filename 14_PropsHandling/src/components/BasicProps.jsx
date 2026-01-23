import React, { useState } from "react";

function Button({ text, color, size, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-6 py-2 font-medium transition-all duration-200 rounded-lg 
        ${size === "small" ? "text-sm px-2 py-1" : ""} 
      ${size === "large" ? "text-lg px-8 py-3" : ""} 
      ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
     ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""} 
      ${color === "success" ? "bg-teal-500 hover:bg-teal-600 text-white" : ""} 
      ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : " "}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {text}
    </button>
  );
}

export const BasicProps = () => {
  const [count,setcount]=useState(0);
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-4 text-gray-700">BasicProps</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        assumenda in id iure quos aliquid, quae beatae iste esse blanditiis
        culpa veritatis facere libero nihil suscipit vitae exercitationem quis
        debitis.
      </p>

      <div className="space-y-4">
        <h3 className="font-bold uppercase mt-4">Different colors</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary button"
            color="primary"
            onClick={() => setcount(count + 1)}
          />
          <Button
            text="Secondary button"
            color="secondary"
            onClick={() => setcount(count + 1)}
          />
          <Button
            text="Success button"
            color="success"
            onClick={() => setcount(count + 1)}
          />
          <Button
            text="Danger button"
            color="danger"
            onClick={() => setcount(count + 1)}
          />
        </div>
      </div>
      {/* Different sizes */}
      <div className="space-y-4">
        <h3 className="font-bold uppercase mt-4">Different Sizes</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary button"
            color="primary"
            size="small"
            onClick={() => setcount(count + 1)}
          />
          <Button
            text="Secondary button"
            color="secondary"
            onClick={() => setcount(count + 1)}
          />
          <Button
            text="Success button"
            color="success"
            onClick={() => setcount(count + 1)}
          />
          <Button
            text="Danger button"
            color="danger"
            size={"large"}
            onClick={() => setcount(count + 1)}
          />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-bold uppercase mt-4">Buttons enabled and disabled</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary button"
            color="primary"
            disabled={true}
            onClick={() => setcount(count + 1)}
          />
          <Button
            text="Secondary button"
            color="secondary"
            onClick={() => setcount(count + 1)}
          />
          <Button
            text="Success button"
            color="success"
            onClick={() => setcount(count + 1)}
          />
          <Button
            text="Danger button"
            color="danger"
            onClick={() => setcount(count + 1)}
          />
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-lg font-medium text-gray-700">
          Click count: <span className="text-blue-500 font-bold">{count}</span>
        </p>
      </div>
    </section>
  );
};


