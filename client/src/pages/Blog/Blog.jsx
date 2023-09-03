import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOG_POSTS } from "../../graphql/queries";
// import styles from "./Blog.module.css";
import utilStyles from "../../styles/utilities.module.css";

function Blog() {
  const { loading, error, data } = useQuery(GET_BLOG_POSTS);

  // Fetch data from server
  useEffect(() => {
    if (loading) {
      console.log("loading...");
    }
    if (error) {
      console.log("error", error);
    }
    if (data) {
      console.log("data", data);
    }
  }, [loading, error, data]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={utilStyles.minHeight}>
      <h1>Latest posts</h1>
      {data &&
        data.getBlogPosts &&
        data.getBlogPosts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
    </div>
  );
}

export default Blog;
