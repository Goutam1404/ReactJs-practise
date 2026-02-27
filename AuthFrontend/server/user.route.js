import { Router } from "express";
import { register, login, logout, sendOtp, verifyMail, sendResetOtp, resetPassword, userData } from "./user.controller.js";
import { useAuth } from "./auth.middleware.js";
import { Auth } from "./User.model.js";
const userRoutes = Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.post("/logout", useAuth, logout);
userRoutes.post("/send-verify-otp", useAuth, sendOtp);
userRoutes.post("/verify-account", useAuth, verifyMail);
userRoutes.post("/reset-pass-otp", useAuth, sendResetOtp);
userRoutes.post("/reset-pass", useAuth, resetPassword);
userRoutes.get("/me", useAuth, userData);
export default userRoutes;
