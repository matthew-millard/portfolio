/* eslint-disable no-console */
/* eslint-disable import/extensions */
import db from "../config/connection.js";
import { Contact, Post, Admin } from "../models/index.js";
import contactSeedData from "./contactSeedData.js";
import postSeedData from "./postSeedData.js";
import adminSeedData from "./adminSeedData.js";
import generateSlug from "../../utils/slugHelper.js";
import bcrypt from "bcrypt";

db.once("open", async () => {
  try {
    // Clear existing data
    await Promise.all([Post.deleteMany({}), Contact.deleteMany({})], Admin.deleteMany({}));

    // Insert the seed data
    await Promise.all(
      postSeedData.map(async (postData) => {
        try {
          const post = new Post({
            ...postData,
            slug: generateSlug(postData.title),
          });
          await post.save();
        } catch (error) {
          console.log(`Error saving post with title ${postData.title}:`, error);
        }
      }),
    );

    await Contact.insertMany(contactSeedData);

    await Promise.all(
      adminSeedData.map(async (adminData) => {
        try {
          const admin = new Admin({
            ...adminData,
            password: await bcrypt.hash(adminData.password, 10),
          });
          await admin.save();
        } catch (error) {
          console.log(`Error saving admin with username ${adminData.username}:`, error);
        }
      }),
    );

    console.log("Database seeded 🌱");
  } catch (err) {
    console.error("Error seeding database", err.message);
  } finally {
    process.exit(0);
  }
});
