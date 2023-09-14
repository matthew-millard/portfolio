/* eslint-disable import/extensions */
import { Contact, Post, Admin } from "../models/index.js";
import bcrypt from "bcrypt";

const resolvers = {
  Query: {
    getBlogPosts: async () => {
      try {
        const posts = await Post.find({});
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
    getBlogPostBySlug: async (_, { slug }) => {
      try {
        const post = await Post.findOne({ slug });
        return post;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    sendEmail: async (_, { firstName, lastName, emailAddress, message }) => {
      try {
        await Contact.create({
          firstName,
          lastName,
          emailAddress,
          message,
        });
        return {
          success: true,
          message: "Your message has been sent!",
        };
      } catch (err) {
        return {
          success: false,
          message: "Your message could not be sent!",
        };
      }
    },
    updateFeedbackCount: async (_, { postId, value }) => {
      try {
        const post = await Post.findById(postId);
        if (!post) {
          throw new Error("No post found!");
        }

        if (value === "helpful") {
          post.helpfulCount += 1;
        } else if (value === "unhelpful") {
          post.unhelpfulCount += 1;
        } else {
          throw new Error("Invalid feedback value!");
        }

        await post.save();

        return {
          _id: post._id,
          helpfulCount: post.helpfulCount,
          unhelpfulCount: post.unhelpfulCount,
          success: true,
          message: "Thank you for your feedback!",
        };
      } catch (err) {
        return {
          _id: null,
          helpfulCount: null,
          unhelpfulCount: null,
          success: false,
          message: "Your feedback could not be processed!",
        };
      }
    },
    adminLogin: async (_, { username, password }) => {
      try {
        const isAdmin = await Admin.findOne({ username });

        if (!isAdmin) {
          throw new Error("Invalid login credentials!");
        }

        const isPasswordCorrect = await bcrypt.compare(password, isAdmin.password);

        if (!isPasswordCorrect) {
          throw new Error("Invalid login credentials!");
        }

        return {
          success: true,
          message: "You have successfully logged in!",
        };
      } catch (err) {
        return {
          success: false,
          message: err.message,
        };
      }
    },
  },
};

export default resolvers;
