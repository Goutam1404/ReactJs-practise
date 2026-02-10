import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`); //the url should be in string
    console.log("✅ Db connected successfully");
  } catch (error) {
    console.error("Error in connecting DB =>:", error);
    process.exit(1);
  }
};

export default connectDb;
