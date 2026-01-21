import React, { useState } from 'react'
import { FaUserPlus } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
const QueueForm = ({ onAdd }) => {
  const [name, setName]=useState('');
  const [service, setService]=useState('');
  const handleSubmit=(e)=>{
      e.preventDefault();
      if(!name.trim() || !service.trim()){
        alert("All the fields are required");
        return ;
      }
      onAdd({name, service});
      setName('');
      setService('');
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-5 rounded-xl bg-gray-950 h-fit"
      >
        <h2 className="mt-0 mb-5 text-indigo-600">Add to queue</h2>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 placeholder:text-gray-400 bg-gray-900 appearance-none rounded-md focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
          />
        </div>
        <div className=" bg-gray-900 pr-2  rounded-md ">
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="col-start-1 row-start-1 w-full p-3 rounded-md cursor-pointer  bg-gray-900 text-base focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 text-gray-400 *:bg-gray-800 placeholder:text-gray-500  sm:text-sm/6"
          >
            <option value="">Select service</option>
            <option value="consultancy">consultancy</option>
            <option value="Payment">Payment</option>
            <option value="Support">Support</option>
          </select>
          {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div> */}
        </div>
        <button
          type="submit"
          className="w-full border-none p-3 flex items-center justify-center gap-1 rounded-xl h-11 text-l font-semibold bg-indigo-800 mt-5 cursor-pointer hover:opacity-90"
        >
          <FaUserPlus /> Add customer
        </button>
      </form>
    </>
  );
};

export default QueueForm;