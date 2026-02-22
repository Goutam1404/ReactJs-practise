import { Auth } from "./User.model.js";
import jwt from "jsonwebtoken";
const signToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username);

    const isUser = await Auth.findOne({ email });
    // console.log(isUser);
    // res.send("register route is listening");
    if (isUser) {
      return res.status(409).json({
        message: "User already exists",
        success: false,
      });
    }

    const newUser = await Auth.create({ username, email, password });
    await newUser.save();
    console.log(newUser);

    return res.status(200).json({
      message: "User registered successfully",
      success: true,
      newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in registering the user",
      success: false,
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Listening login route");

    const user = await Auth.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(400).json({
        message: "User doesn't exists",
        success: false,
      });
    }
    const isPassword = await user.isPasswordCorrect(password);
    if (!isPassword) {
      return res.status(400).json({
        message: "Given password is not correct",
        success: false,
      });
    }
    const token = signToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    user.isLoggedIn = true;
    await user.save()
    return res.status(200).json({
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in login the user",
      error: error.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    console.log("App is listening in logout");
    console.log("User ID from request:", req.userId); // <--- Check this!

    if (!req.userId) {
        return res.status(401).json({ message: "User ID not found in request" });
    }
    res.clearCookie("token");
    await Auth.findByIdAndUpdate(req.userId, {
      isLoggedIn: false,
    });
    return res.status(200).json({
      message: "User logged out.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in logging out.",
      error: error.message,
    });
  }
};

export { register, login, logout };
