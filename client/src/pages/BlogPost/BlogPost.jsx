import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BLOG_POST_BY_SLUG } from "../../graphql/queries";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FeedbackButton } from "../../components";
import formatDate from "../../utils/formatDate";
import utilsStyles from "../../styles/utilities.module.css";
import styles from "./BlogPost.module.css";

function BlogPost() {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_BLOG_POST_BY_SLUG, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data?.getBlogPostBySlug;

  return (
    <div className={utilsStyles.minHeight}>
      {/* Article Header */}
      <header>
        <h1>{post?.title}</h1>
        <p>Published on: {formatDate(post?.createdAt)}</p>
      </header>

      {/* Content Section */}
      <article>
        <p>{post?.content}</p>
      </article>

      {/* Feedback Section */}
      <section>
        <p className={styles.feedback}>
          Was this article helpful?
          <FeedbackButton icon={faThumbsUp} value="helpful" postId={post?._id} />
          <FeedbackButton icon={faThumbsDown} value="unhelpful" postId={post?._id} />
        </p>
        <p>
          If you have any feedback or questions, feel free to <Link to="/contact">contact me</Link>.
        </p>
      </section>
    </div>
  );
}

export default BlogPost;
