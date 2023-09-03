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

  type Post {
    _id: ID
    title: String
    slug: String
    content: String
    tags: [String]
  }

  type Query {
    getBlogPosts: [Post]
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
