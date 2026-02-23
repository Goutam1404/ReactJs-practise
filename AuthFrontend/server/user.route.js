import { Router } from "express";
import { register, login, logout } from "./user.controller.js";
import { auth } from "./auth.middleware.js";
import { Auth } from "./User.model.js";
const userRoutes = Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.post("/logout", auth, logout);
userRoutes.get("/me", auth, async (req, res) => {
  try {
    const user = await Auth.findById(req.userId);
    res.json({ user });
  } catch (err) {
    res.status(401).json({ message: "Invalid session" });
  }
});
export default userRoutes;
