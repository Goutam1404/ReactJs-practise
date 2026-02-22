import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./db.js";
import userRoutes from "./user.route.js";
const app = express();
dotenv.config({ path: "./.env" });

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173/",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(cookieParser());
const PORT = process.env.PORT || 8000;

//here the app will start if the db is connected
connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDb connection error");
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("In home page");
});
app.get("/name", (req, res) => {
  res.send("i am goutam kumar");
});

app.use("/user", userRoutes);

// console.log("Hi goutam");
