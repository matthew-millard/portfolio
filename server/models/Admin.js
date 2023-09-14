import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const AdminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      default: "admin",
      enum: ["admin"],
    },
  },
  { timestamps: true },
);

AdminSchema.pre("save", async function hashPassword(next) {
  try {
    if (this.isModified("password")) {
      this.password = bcrypt.hash(this.password, 10);
    }
    next();
  } catch (err) {
    next(err);
  }
});

const Admin = model("Admin", AdminSchema);

export default Admin;
