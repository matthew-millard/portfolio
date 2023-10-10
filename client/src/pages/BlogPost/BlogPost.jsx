import React, { useCallback, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Prism from "prismjs";
import { GET_BLOG_POST_BY_SLUG } from "../../graphql/queries";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FeedbackButton } from "../../components";
import formatDate from "../../utils/formatDate";
import utilStyles from "../../styles/utilities.module.css";
import styles from "./BlogPost.module.css";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

function BlogPost() {
  const { slug } = useParams();
  const postContainerRef = useRef(null);

  const { loading, error, data } = useQuery(GET_BLOG_POST_BY_SLUG, {
    variables: { slug },
  });

  const post = data?.getBlogPostBySlug;

  const traverseNodes = useCallback((node) => {
    for (let i = 0; i < node.childNodes.length; i++) {
      const childNode = node.childNodes[i];
      if (childNode.nodeType === 3 && /\S/.test(childNode.nodeValue)) {
        const span = document.createElement("span");
        span.className = "token-unhighlighted";
        node.replaceChild(span, childNode);
        span.appendChild(childNode);
      }
      traverseNodes(childNode);
    }
  }, []);

  useEffect(() => {
    Prism.highlightAll();

    const timer = setTimeout(() => {
      if (postContainerRef.current) {
        traverseNodes(postContainerRef.current);
      }
    }, 0);

    return () => clearTimeout(timer); // Cleanup the timer if the component gets unmounted
  }, [post, traverseNodes]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={`${utilStyles.minHeight} ${styles.pageContainer}`}>
      {/* Article Header */}
      <header className={styles.header}>
        <h1>{post?.title}</h1>
        <p>Published on: {formatDate(post?.createdAt)}</p>
      </header>

      {/* Content Section */}
      <article className={styles.postContainer} ref={postContainerRef}>
        <div dangerouslySetInnerHTML={{ __html: post?.content || "" }} />
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
