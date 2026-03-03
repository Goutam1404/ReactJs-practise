import { createContext, useContext, useEffect, useState } from "react";
import API from "../Api";
export const AuthContext = createContext();
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const AuthProvider = function ({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await API.get("/me");
        // console.log("User", res.data.userInfo);

        setUser(res.data.userInfo);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  const login = async (email, password) => {
    try {
      console.log("Frontend call for user login");
      const { data } = await API.post("/login", { email, password });

      setUser(data.userInfo);
      console.log(data);
      toast.success("Logged in successfully!");
    } catch (error) {
      console.error("Error in fetching data in login", error);
      const message =
        error.response?.data?.message ||
        "Login failed. Please check your credentials.";
      toast.error(message);
    }
  };

  const register = async (username, email, password) => {
    try {
      console.log("Frontend call for user register");

      const { data } = await API.post("/register", {
        username,
        email,
        password,
      });
      console.log({ data });
      toast.success("User Registered, Success");
    } catch (error) {
      console.error(
        "Error in sending data from frontend in register",
        error.message
      );
      toast.error(err.response?.data?.error || "Registration failed");
    }
  };

  const logout = async () => {
    try {
      await API.post("/logout");
      setUser(null);
      console.log("Frontend call for logout");
    } catch (error) {
      console.error("Error in frontend for logout");
      toast.error(err.response?.data?.error || "Logout failed");
    }
  };

  const sendOtp = async () => {
    try {
      await API.post("/send-verify-otp");
      setTimeout(() => {
        navigate("/email-verify");
      }, 2000);
      console.log("Frontend call for sending otp for email verification");
      toast.success("OTP sent successfully");
    } catch (error) {
      console.error(
        "Error in frontend for sending otp for email verification",
        error
      );
      toast.error(err.response?.data?.error || "Failed to sent OTP");
    }
  };

  const verifyOtp = async (otp) => {
    try {
      await API.post("/verify-account", { otp });
      setTimeout(() => {
        navigate("/home");
      }, 2000);
      console.log("Frontend call for email verification");
      toast.success("User verified");
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to verify");
      console.error("Error in frontend for email verification", error);
    }
  };

  const values = {
    login,
    register,
    logout,
    sendOtp,
    verifyOtp,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
