import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logoutUser()
      .then(() => {
        dispatch(logout());
      })
      .catch((res) => {
        console.log(res);
      });
  };
  return (
    <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full ">
      LogoutBtn
    </button>
  );
};

export default LogoutBtn;
