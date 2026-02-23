import { createContext, useContext, useEffect, useState } from "react";
import API from "../Api";
export const AuthContext = createContext();

export const AuthProvider = function ({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const verifyUser = async () => {
    try {
     
      const res = await API.get("/me");
      // console.log(res);
      // console.log(res.data);
      
      setUser(res.data.user);
      // console.log(user);
      
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
      setUser(data);
    } catch (error) {
      console.error("Error in fetching data in login");
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
      console.log({data});
    } catch (error) {
      console.error("Error in sending data from frontend in register",error.message);
    }
  };

  const logout = async () => {
    try {
      await API.post("/logout");
      setUser(null);
      console.log("Frontend call for logout");
    } catch (error) {
      console.error("Error in frontend for logout");
    }
  };

  const values={
    login, register, logout, user, loading
  }
  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)
