import React, { useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  // const { userid } = useParams();
  const {userid, setUseId}=useState("Goutam");
  return (
    <div className="bg-gray-600 p-5 m-4 text-3xl text-center rounded-md box-content text-wrap shadow-md text-yellow-500 hover:bg-gray-700 duration-100">
      
      User:{userid != "Goutam" ? ` ${userid} is not a valid id` : " Goutam"}
    </div>
  );
}

export default User;
