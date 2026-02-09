import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
  },
  {
    timestamps: true,
  }
);



export const User = new model("User", UserSchema);
