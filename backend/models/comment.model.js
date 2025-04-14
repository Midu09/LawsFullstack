import { Schema } from "mongoose";
import mongoose from "mongoose";
const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("comment", commentSchema);
