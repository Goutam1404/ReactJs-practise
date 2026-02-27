import { Auth } from "./User.model.js";
import jwt from "jsonwebtoken";
import transporter from "./nodemailer.js";

const signToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All the fields are required",
      });
    }
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

    //sending verification OTP via mail to the user
    const mailOptions = {
      from: process.env.SENDER_MAIL,
      to: email,
      subject: "email verification",
      text: `Welcome to the auth working ${username}, Thank you for choosing us`,
    };
    console.log(mailOptions);
    await transporter.sendMail(mailOptions);

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

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All the fields are required",
      });
    }

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
      return res.status(401).json({
        message: "Password not correct",
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
    await user.save();
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
    const {userId}=req.body
    console.log("User ID from request:",userId); // <--- Check this!

    if (!userId) {
      return res.status(401).json({ message: "User ID not found in request" });
    }
    res.clearCookie("token");
    await Auth.findByIdAndUpdate(req.userId, {
      isLoggedIn: false,
    });

    return res.status(200).json({
      success: true,
      message: "User logged out.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in logging out.",
      error: error.message,
    });
  }
};

const sendOtp = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await Auth.findById(userId);
    console.log(userId);
    
    if (!user) {
      return res.status(400).json({
        message: "User doesn't exists",
        success: false,
        
      });
    }
    if (user.isAccountVerified) {
      return res.status(403).json({
        message: "User already verified",
      });
    }
    //creating OTP
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    user.verifyOtp = otp;
    user.verifyOtpExpiry = Date.now() + 24 * 60 * 60 * 1000;
    await user.save();

    //sending OTP through mail
    const mailOptions = {
      from: process.env.SENDER_MAIL,
      to: user.email,
      subject: "Account verification",
      text: `Welcome to the auth working ${user.username}, Thank you for choosing us. Your OTP is : ${otp}`,
    };
    console.log(mailOptions);
    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ success: true, message: "Verification OTP sent on Email" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User verification failed",
      error: error.message,
    });
  }
};

const verifyMail = async (req, res) => {
  try {
    const { userId, otp } = req.body;

    if (!userId || !otp) {
      return res.status(400).json({
        success: false,
        message: "Missing details",
      });
    }
    const user = await Auth.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User doesn't exists",
        success: false,
      });
    }

    if (user.verifyOtp === "" || user.verifyOtp !== otp) {
      return res.status(401).json({
        success: false,
        message: "Invalid OTP",
        error: error.message,
      });
    }
    if (user.verifyOtpExpiry < Date.now()) {
      return res.status(401).json({
        success: false,
        message: "OTP expired",
        error: error.message,
      });
    }

    user.isAccountVerified = true;
    user.verifyOtp = "";
    user.verifyOtpExpiry = 0;

    await user.save();
    return res
      .status(200)
      .json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Issue in verifying mail",
      error: error.message,
    });
  }
};

export { register, login, logout, verifyMail, sendOtp };
