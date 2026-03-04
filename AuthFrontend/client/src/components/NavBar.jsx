import React from "react";

import { useAuth } from "../context/AuthContext";
function NavBar() {
  const { user, logout, sendOtp, resetPassOtp } = useAuth();
  console.log(user);
  if(!user){
    return <></>
  }
  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
      <h2 className="text-gray-400 font-bold text-2xl">AuthFrontend</h2>
      <div className="text-white bg-gray-700 w-10 h-10 flex items-center justify-center rounded-full relative group">
        {user.name[0].toUpperCase()}
        <div className="absolute w-30 hidden group-hover:block top-0 right-0 z-10 rounded pt-10">
          <ul className="list-none bg-gray-700 p-2 text-sm m-0 ">
            {!user.isAccountVerified && (
              <li
                className="px-2 py-1 border-b-2 hover:bg-gray-600 cursor-pointer"
                onClick={sendOtp}
              >
                Verify Email
              </li>
            )}
            <li
              className="py-1 px-2 pr-10 hover:bg-gray-600 cursor-pointer"
              onClick={() => resetPassOtp(user.email)}
            >
              Reset Password
            </li>
            <li
              className="py-1 px-2 pr-10 hover:bg-gray-600 cursor-pointer"
              onClick={logout}
            >
              Log out
            </li>
          </ul>
        </div>
      </div>

      {/* <button
        onClick={logout}
        className="bg-blue-700 hover:bg-blue-800 text-neutral-200 px-4 py-2 rounded-full m-5 cursor-pointer transition-all"
      >
        Logout
      </button> */}
    </div>
  );
}

export default NavBar;
