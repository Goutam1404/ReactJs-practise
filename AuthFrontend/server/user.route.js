import { Router } from "express";
import { register, login, logout, sendOtp, verifyMail } from "./user.controller.js";
import { useAuth } from "./auth.middleware.js";
import { Auth } from "./User.model.js";
const userRoutes = Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.post("/logout", useAuth, logout);
userRoutes.post("/send-verify-otp", useAuth, sendOtp);
userRoutes.post("/verify-account", useAuth, verifyMail);
userRoutes.get("/me", useAuth, async (req, res) => {
  try {
    const user = await Auth.findById(req.userId);
    res.json({ user });
  } catch (err) {
    res.status(401).json({ message: "Invalid session" });
  }
});
export default userRoutes;
