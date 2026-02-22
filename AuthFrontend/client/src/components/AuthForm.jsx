import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AuthForm({ isLogin = false }) {
  // const {isLogin, setIsLogin} = useState(false);
  const navigate = useNavigate();
  const {login, register}=useAuth()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isLogin) {
        await register(email, password);
        alert("Success! Now please login.");
        navigate("/login");
      } else {
        await login(email, password);
        alert("Logged in successfully!");
      }
    } catch (err) {
      alert(err.response?.data?.error || isLogin?"Login failed":"Registration failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center text-gray-400 p-4">
      <div className="w-full max-w-md rounded-2xl bg-gray-800 p-4 sm:p-6  shadow-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-300">
            {isLogin ? "Login to your account" : "Create Account"}
          </h2>
          <p className="mt-2 text-gray-400">Please enter your details below.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="mt-1 w-full rounded-lg border border-gray-600 p-3 outline-none transition focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="mt-1 w-full rounded-lg border border-gray-600 p-3 outline-none transition focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="mt-1 w-full rounded-lg border border-gray-600 p-3 outline-none transition focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95 cursor-pointer"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        {/* <p class="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="#" class="text-blue-600 hover:underline">
            Log in
          </a>
        </p> */}
      </div>
    </div>
  );
}

export default AuthForm;
