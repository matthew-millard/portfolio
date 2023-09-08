import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_BLOG_POSTS } from "../../graphql/queries";
import formatDate from "../../utils/formatDate";
import styles from "./BlogIndex.module.css";
import utilStyles from "../../styles/utilities.module.css";

function BlogIndex() {
  const { loading, error, data } = useQuery(GET_BLOG_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={`${utilStyles.minHeight} ${styles.blogIndexContainer}`}>
      <h1 className={styles.heading}>Latest posts</h1>
      {data?.getBlogPosts?.map(({ _id, title, slug, createdAt }) => (
        <div key={_id}>
          <Link to={`/blog/${slug}`}>
            <h3 className={styles.blogTitle}>
              {title} <p className={styles.blogPostDate}>Posted: {formatDate(createdAt)}</p>
            </h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogIndex;
