import { Schema } from "mongoose";
import mongoose from "mongoose";
const userSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    img: {
      type: String,
    },
    savePosts: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);
