/* eslint-disable import/extensions */
import { Contact } from "../models/index.js";

const resolvers = {
  Query: {},
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
  },
};

export default resolvers;
