import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
const AuthSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trime: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      unique: true,
      minlength: 5,
      trim: true,
    },
    verifyOtp:{
      type:String,
      default:''
    },
    verifyOtpExpiry:{
      type:Number,
      default:0
    },
    isAccountVerified:{
      type:Boolean,
      default:false
    },
    resetOtp:{
      type:String,
      default:''
    },
    resetOtpExpiry:{
      type:Number,
      default:0
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

AuthSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next;
  }
  this.password = await bcrypt.hash(this.password, 10);
  next;
});

AuthSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const Auth = new model("Auth", AuthSchema);
