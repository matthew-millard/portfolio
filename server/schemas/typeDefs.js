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
    createdAt: String
    helpfulCount: Int
    unhelpfulCount: Int
  }

  type FeedbackUpdateResponse {
    _id: ID
    helpfulCount: Int
    unhelpfulCount: Int
    success: Boolean
    message: String
  }

  type Admin {
    _id: ID
    username: String
    password: String
    role: String
  }

  type AdminLoginResponse {
    success: Boolean
    message: String
  }

  type Query {
    getBlogPosts: [Post]
    getBlogPostBySlug(slug: String!): Post
  }

  type Mutation {
    sendEmail(
      firstName: String!
      lastName: String!
      emailAddress: String!
      message: String!
    ): sendEmailResponse!

    updateFeedbackCount(postId: ID!, value: String!): FeedbackUpdateResponse!

    adminLogin(username: String!, password: String!): AdminLoginResponse!
  }
`;

export default typeDefs;
