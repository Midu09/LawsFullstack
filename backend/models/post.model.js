import { Schema } from "mongoose";
import mongoose from "mongoose";
const postSchema = new Schema(
  {
    img: {
      type: String,
    },
    title: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
      unique: true,
    },
    desc: {
      type: String,
    },
    content: {
      type: String,
      require: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    visit: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Post", postSchema);
