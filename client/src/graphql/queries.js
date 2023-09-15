import { gql } from "@apollo/client";

export const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    getBlogPosts {
      _id
      title
      slug
      content
      tags
      createdAt
    }
  }
`;

export const GET_BLOG_POST_BY_SLUG = gql`
  query GetBlogPostBySlug($slug: String!) {
    getBlogPostBySlug(slug: $slug) {
      _id
      title
      slug
      content
      tags
      createdAt
    }
  }
`;

export const IS_AUTHENTICATED = gql`
  query IsAuthenticated {
    isAuthenticated {
      isAuthenticated
      message
    }
  }
`;
