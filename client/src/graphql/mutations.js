import { gql } from "@apollo/client";

export const SEND_EMAIL = gql`
  mutation SendEmail(
    $firstName: String!
    $lastName: String!
    $emailAddress: String!
    $message: String!
  ) {
    sendEmail(
      firstName: $firstName
      lastName: $lastName
      emailAddress: $emailAddress
      message: $message
    ) {
      success
      message
    }
  }
`;

export const UPDATE_FEEDBACK_COUNT = gql`
  mutation UpdateFeedbackCount($postId: ID!, $value: String!) {
    updateFeedbackCount(postId: $postId, value: $value) {
      _id
      helpfulCount
      unhelpfulCount
      success
      message
    }
  }
`;

export const ADMIN_LOGIN = gql`
  mutation AdminLogin($username: String!, $password: String!) {
    adminLogin(username: $username, password: $password) {
      success
      message
    }
  }
`;

export const ADMIN_LOGOUT = gql`
  mutation AdminLogout {
    adminLogout {
      isAuthenticated
      message
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      success
      message
    }
  }
`;
