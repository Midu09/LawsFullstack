import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/use.route.js";
import userPost from "./routes/post.route.js";
import userComment from "./routes/comment.route.js";
import dotenv from "dotenv";
import cors from "cors"; // 👈
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // nếu dùng cookie/token
  })
);

// app.get("/test", (req, res) => {
//   res.status(200).send("it oke");
// });

app.use("/users", userRouter);
app.use("/posts", userPost);
app.use("/comments", userComment);

app.listen(process.env.PORT || 5000, () => {
  connectDB();
  console.log("sever  is running");
});
