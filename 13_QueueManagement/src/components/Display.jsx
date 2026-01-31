import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { useTheme } from './ThemeToggler.jsx';
const Display = ({ queue, onUpdate , onRemove}) => {
  const { isDark } = useTheme();
  const getStatusColour=(status)=>{
    switch(status){
      case "waiting": return "#E64A27";      
      case "serving": return "#2e9e35";
      case "completed": return "#278be6";
      default: return "gray";
    }
  }

  return (
    <>
      <div
        className={`p-6 rounded-xl  ${
          isDark ? "bg-gray-950" : "bg-gray-700"
        } h-fit`}
      >
        <h2 className="font-bold mb-2 text-xl md:text-2xl">Current Queue</h2>
        <div>
          {queue.length === 0 ? (
            <p
              className={`text-center md:text-xl ${
                isDark ? " text-gray-500" : "  text-gray-400 "
              } `}
            >
              No customer data is here
            </p>
          ) : (
            <div className="mt-5">
              {queue.map((customer) => (
                <div
                  key={customer.id}
                  className={`${
                    isDark ? "bg-gray-900" : "bg-gray-400"
                  } h-fit mt-5 max-w-full p-3 flex  justify-between rounded `}
                >
                  <div className="my-2">
                    <div className="my-2 flex flex-row w-full gap-4 items-center ">
                      <span
                        className={`md:text-xl ${
                          isDark ? "font-semibold " : "text-gray-800 font-bold"
                        }`}
                      >
                        {customer.name.trim().toUpperCase()}
                      </span>

                      {customer.urgent && (
                        <div
                          className={`${
                            isDark
                              ? "bg-lime-300 border-yellow-500"
                              : "bg-orange-400"
                          } px-3 py-1 rounded-full border-2  text-neutral-800 text-sm font-medium`}
                        >
                          URGENT
                        </div>
                      )}
                    </div>
                    <p
                      className={`my-1 ${
                        isDark ? "font-medium" : "text-gray-800 font-bold"
                      } tracking-wide`}
                    >
                      {customer.service}
                    </p>
                    <span
                      style={{ color: getStatusColour(customer.status) }}
                      className={`${isDark ? "font-bold" : "font-extrabold"} `}
                    >
                      {customer.status}
                    </span>
                  </div>
                  <div className=" flex gap-2 items-end">
                    {customer.status === "waiting" && (
                      <button
                        className="my-2 text-gray-200 bg-green-600 px-4 py-2 rounded-xl cursor-pointer hover:bg-green-700 duration-200"
                        onClick={() => onUpdate(customer.id, "serving")}
                      >
                        Serve
                      </button>
                    )}
                    {customer.status === "serving" && (
                      <button
                        className="my-2 text-gray-200 bg-blue-600 px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-700 duration-200"
                        onClick={() => onUpdate(customer.id, "completed")}
                      >
                        Completed
                      </button>
                    )}
                    <button
                      className="my-2 flex items-center justify-center text-gray-200 bg-red-600 px-4 py-2 rounded-xl cursor-pointer hover:bg-red-700 duration-200"
                      onClick={() => onRemove(customer.id)}
                    >
                      {" "}
                      <MdOutlineDelete />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Display