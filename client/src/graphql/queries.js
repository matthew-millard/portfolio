import { gql } from "@apollo/client";

export const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    getBlogPosts {
      _id
      title
      slug
      content
      tags
    }
  }
`;
