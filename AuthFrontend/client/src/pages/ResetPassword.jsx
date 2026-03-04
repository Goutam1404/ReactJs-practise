import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import NavBar from '../components/NavBar';

function ResetPassword() {
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const inputRef = useRef([]);
  const { user, verifyPassOtp } = useAuth();
  const location=useLocation();
  // const {state}=location;
  const email = location.state.email || user.email;
  console.log("email:",email);
  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRef.current.length - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((element, index) => {
      if (inputRef.current[index]) {
        inputRef.current[index].value = element;
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpArray = inputRef.current.map((e) => e.value);
    const otp = otpArray.join("");
    await verifyPassOtp(email,otp,password);
    // navigate('/home')
  };

  // useEffect(() => {
  //   user && user.isLoggedIn && user.isAccountVerified && navigate("/home");
  // }, [user.isAccountVerified, user]);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-200 to-neutral-400 flex items-center justify-center text-gray-600 ">
      {user && user.isLoggedIn && <NavBar/>}
      <form
        className="bg-slate-700 p-8 shadow-lg rounded-lg w-96 text-sm"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-white font-extrabold text-center mb-4">
          Password Reset
        </h1>
        <input
          type="text"
          value={email}
          className="rounded-md mb-4 w-full p-1 text-center text-lg font-thin text-slate-300 bg-slate-500 outline-none"
          readOnly
        />
        <p className="text-slate-400 mb-6 text-center">
          Enter the 6-digit code sent to your email id
        </p>
        <div className="flex justify-between mb-8" onPaste={handlePaste}>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <input
                type="text"
                maxLength={1}
                key={index}
                className="w-12 h-12 rounded-md text-white text-center text-xl bg-slate-500 outline-none"
                ref={(e) => (inputRef.current[index] = e)}
                onInput={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
        </div>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter new password'
          className="rounded-md mb-4 w-full px-2 py-1 text-lg font-thin text-slate-300 bg-slate-500 outline-none"
        />
        <button
          type="submit"
          className="w-full rounded-full bg-linear-to-r from-indigo-400 to-indigo-700 py-3 font-semibold text-white transition hover:bg-linear-to-r hover:from-indigo-800 hover:to-indigo-500 active:scale-95 cursor-pointer"
        >
          Reset Pass
        </button>
      </form>
    </div>
  );
}

export default ResetPassword