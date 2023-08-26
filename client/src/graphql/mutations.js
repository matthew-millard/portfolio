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
