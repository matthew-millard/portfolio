/* eslint-disable import/extensions */
import { Schema, model } from "mongoose";
import generateSlug from "../../utils/slugHelper.js";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [String],
    helpfulCount: {
      type: Number,
      default: 0,
    },
    unhelpfulCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

postSchema.pre("save", function generateAndAssignSlug(next) {
  this.slug = generateSlug(this.title);
  next();
});

const Post = model("Post", postSchema);

export default Post;
