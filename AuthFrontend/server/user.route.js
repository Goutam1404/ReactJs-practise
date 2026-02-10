import { Router } from "express";
import { register, login, logout } from "./user.controller.js";
const userRoutes = Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.post("/logout", logout);
// userRoutes.get("/me", protect, (req, res) => {
//   res.json({ message: "This is a private message!", userId: req.userId });
// });
export default userRoutes;
