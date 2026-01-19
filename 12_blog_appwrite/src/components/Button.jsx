import React from "react";

const Button = ({
  children, //here children is nothing but any text which one want to give
  type = "button",
  bgColour = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return <button className={`px-4 py-2 rounded-lg ${bgColour} ${textColor} ${className}`}{...props}>
    {children}
  </button>;
};

export default Button;
