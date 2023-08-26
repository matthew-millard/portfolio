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

  type sendEmailResponse {
    success: Boolean
    message: String
  }

  type Query {
    getContacts: [Contact]
  }

  type Mutation {
    sendEmail(
      firstName: String!
      lastName: String!
      emailAddress: String!
      message: String!
    ): sendEmailResponse!
  }
`;

export default typeDefs;
