import { Router } from "express";
import { register, login, logout } from "./user.controller.js";
import { auth } from "./auth.middleware.js";
const userRoutes = Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.post("/logout", auth, logout);
userRoutes.get("/me", auth, (req, res) => {
  console.log("In protected route");
  res.json({ message: "This is a private message!", userId: req.userId });
});
export default userRoutes;
