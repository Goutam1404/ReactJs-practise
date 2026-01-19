import React from "react";

const Input = React.forwardRef(function input(
  { label, type = "text", classname = "", ...props },
  ref
) {
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block pl-1 mb-4" htmlFor={id}>
          {label}
        </label>
      )}
      <input type={type} className={`px-3 py-2 bg-white rounded-lg outline-none text-black focus:bg-gray-50 duration-200 border border-gray-200 w-full${classname}`} ref={ref} {...props} id={id}/>
    </div>
  );
});

export default Input;
