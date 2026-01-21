import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
const Display = ({ queue, onUpdate , onRemove}) => {
  const getStatusColour=(status)=>{
    switch(status){
      case "waiting": return "#E64A27";      
      case "serving": return "#47FC42";
      case "completed": return "#5188FC";
      default: return "gray";
    }
  }
  return (
    <>
      <div className="p-6 rounded-xl bg-gray-950 h-fit">
        <h2 className="font-bold mb-2 text-xl md:text-2xl">Current Queue</h2>
        <div>
          {queue.length === 0 ? (
            <p className="text-center md:text-xl text-gray-500">
              No customer data is there
            </p>
          ) : (
            <div className="mt-5">
              {queue.map((customer) => (
                <div
                  key={customer.id}
                  className="bg-gray-900 h-fit mt-5 max-w-full p-3 flex items-center justify-between"
                >
                  <div className="my-2">
                    <div className="my-2 font-semibold md:text-xl ">
                      {customer.name.toUpperCase()}
                    </div>
                    <p className="my-1">{customer.service}</p>
                    <span style={{ color: getStatusColour(customer.status) }}>
                      {customer.status}
                    </span>
                  </div>
                  <div className=" flex gap-2">
                    {customer.status === "waiting" && (
                      <button
                        className="my-2 text-gray-200 bg-green-600 px-4 py-3 rounded-xl cursor-pointer hover:bg-green-700 duration-200"
                        onClick={() => onUpdate(customer.id, "serving")}
                      >
                        Serve
                      </button>
                    )}
                    {customer.status === "serving" && (
                      <button
                        className="my-2 text-gray-200 bg-blue-400 px-4 py-3 rounded-xl cursor-pointer hover:bg-blue-600 duratio-200"
                        onClick={() => onUpdate(customer.id, "completed")}
                      >
                        Completed
                      </button>
                    )}
                    <button
                      className="my-2 flex items-center justify-center text-gray-200 bg-red-600 px-3 py-3 rounded-xl cursor-pointer hover:bg-red-700 duration-200"
                      onClick={() => onRemove(customer.id)}
                    > <MdOutlineDelete/>
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