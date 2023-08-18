import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Contact {
    _id: ID
    firstName: String
    lastName: String
    email: String
    message: String
    date: String
  }

  type Query {
    getContacts: [Contact]
  }

  type Mutation {
    addContact(firstName: String!, lastName: String!, email: String!, message: String!): Contact
  }
`;

export default typeDefs;
