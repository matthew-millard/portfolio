/* eslint-disable import/extensions */
import { Schema, model } from "mongoose";
import isValidEmail from "../../utils/isValidEmail.js";

const contactSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    validate: {
      validator: isValidEmail,
      message: (props) => `${props.value} is not a valid email!`,
    },
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact = model("Contact", contactSchema);

export default Contact;
