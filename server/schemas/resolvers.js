import { Contact } from "../models/index.js";

const resolvers = {
  Query: {
    getContacts: async () => {
      try {
        const contacts = await Contact.find({});
        return contacts;
      } catch (err) {
        console.error(`Failed to get contacts: ${err.message}`);
        throw new Error(`There was an issue retrieving the contacts: ${err.message}`);
      }
    },
  },
  Mutation: {
    addContact: async (_, { firstName, lastName, email, message }) => {
      try {
        const contact = await Contact.create({
          firstName,
          lastName,
          email,
          message,
        });
        return contact;
      } catch (err) {
        console.error(`Failed to create contact: ${err.message}`);
        throw new Error(
          "There was an issue submitting your contact information. Please try again later.",
        );
      }
    },
  },
};

export default resolvers;
